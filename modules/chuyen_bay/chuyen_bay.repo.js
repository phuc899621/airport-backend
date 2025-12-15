import e from "express";
import { DBError } from "../../core/errors/errors.js";

const createChuyenBayRepo = (db) => ({
    laySTTTiepTheo: async () => {
        const rows = await db`
        SELECT nextval('chuyenbay_seq') as next_id;
        `;
        console.log(rows);
        return rows[0]?.next_id;
    },

    layHangVeChuyenBayTheoMaChuyenBay: async (maChuyenBay, tx) => {
        try {
            const executor = tx || db;
            const rows = await executor`
                SELECT * FROM "HANGVECHUYENBAY" hvcb
                JOIN "HANGVE" hv ON hv."MaHV" = hvcb."MaHV"
                WHERE "MaCB" = ${maChuyenBay}
            `;
            return rows;
        } catch (err) {
            throw new DBError(err.message);
        }
    },
    layLichChuyenBay: async (maChuyenBay, query, tx) => {
        try {
        const executor = tx || db;
        const { conGheTrong, coHangVe, daBay } = query;
        const result = await executor`
            SELECT 
                cb."MaCB",
                cb."MaSBDi",
                cb."MaSBDen",
                cb."DaXoa",
                sbDi."TenSB" AS "TenSBDi", 
                sbDen."TenSB" AS "TenSBDen",
                cb."ThoiGianBay",
                cb."NgayGio",
                cb."GiaVe" as "GiaVeCoBan",
                COALESCE(hvSum."TongSoGhe", 0) AS "TongSoGhe",
                COALESCE(vd."DaDat", 0) AS "TongSoGheDaDat",
                (COALESCE(hvSum."TongSoGhe", 0) - COALESCE(vd."DaDat", 0)) AS "TongSoGheConLai"
            FROM "CHUYENBAY" cb
            LEFT JOIN "SANBAY" AS sbDi
            ON cb."MaSBDi" = sbDi."MaSB"
            LEFT JOIN "SANBAY" AS sbDen
            ON cb."MaSBDen" = sbDen."MaSB"
            LEFT JOIN (
                SELECT "MaCB", SUM("TongSoGhe") AS "TongSoGhe"
                FROM "HANGVECHUYENBAY"
                GROUP BY "MaCB"
                ) hvSum ON hvSum."MaCB" = cb."MaCB"
            LEFT JOIN (
                SELECT "MaCB", COUNT(*) AS "DaDat"
                FROM "VECHUYENBAY"
                WHERE "TrangThai" <> 'da_huy'
                GROUP BY "MaCB"
            ) vd ON vd."MaCB" = cb."MaCB"
            WHERE cb."DaXoa" = false AND "TongSoGhe" > 0
            ORDER BY cb."NgayGio" ASC;
        `;
        return result;
        } catch (err) {
        throw new DBError(err.message);
        }
    },

    taoChuyenBay: async (data, tx) => {
        try {
            const executor = tx || db;
            const { maChuyenBay, maSanBayDi, maSanBayDen, ngayGio, giaVeCoBan, thoiGianBay } = data;
            const rows = await executor`
                INSERT INTO "CHUYENBAY" ("MaCB", "MaSBDi", "MaSBDen", "NgayGio", "GiaVe", "ThoiGianBay")
                VALUES (${maChuyenBay}, ${maSanBayDi}, ${maSanBayDen}, ${ngayGio}, ${giaVeCoBan}, ${thoiGianBay})
                RETURNING *;
            `;
            return rows[0] || null;
        } catch (err) {
            throw new DBError(err.message);
        }
    },

    layLichChuyenBayTheoMaChuyenBay: async (maChuyenBay, tx) => {
        try {
            const executor = tx || db;
            const result = await executor`
            SELECT 
                cb."MaCB",
                cb."MaSBDi" ,
                cb."MaSBDen",
                cb."DaXoa",
                sbDi."TenSB" AS "TenSBDi", 
                sbDen."TenSB" AS "TenSBDen",
                sbDi."QuocGia" AS "QuocGiaSBDi",
                sbDen."QuocGia" AS "QuocGiaSBDen",

                cb."ThoiGianBay",
                cb."NgayGio",
                cb."GiaVe" as "GiaVeCoBan",
                
                hv."MaHV",
                hv."TenHV",
                hv."HeSoGia",
                hvcb."TongSoGhe",

                ROUND(cb."GiaVe" * hv."HeSoGia") AS "GiaVeTheoHang",
                (hvcb."TongSoGhe" - COALESCE(vd."SoVeDaDat", 0)) AS "SoGheConLai",

                
                tsg."TongSoGhe",            
                tsg."TongSoGheDaDat",      
                tsg."TongSoGheConLai",       
                sbtg."MaSB",
                sb."TenSB",
                sb."QuocGia",
                sbtg."ThuTuDung",
                sbtg."ThoiGianDung",
                sbtg."GhiChu"
                    
                    
                FROM "CHUYENBAY" cb
                LEFT JOIN "SANBAY" AS sbDi
                    ON cb."MaSBDi" = sbDi."MaSB"
                LEFT JOIN "SANBAY" AS sbDen
                    ON cb."MaSBDen" = sbDen."MaSB"
                LEFT JOIN "SANBAYTRUNGGIAN" sbtg
                    ON sbtg."MaCB" = cb."MaCB"
                LEFT JOIN "SANBAY" sb
                    ON sb."MaSB"=sbtg."MaSB"
                JOIN "HANGVECHUYENBAY" hvcb ON hvcb."MaCB"=cb."MaCB"
                JOIN "HANGVE" hv ON hv."MaHV"=hvcb."MaHV"
                LEFT JOIN (
                    SELECT "MaCB","MaHV", COUNT(*) AS "SoVeDaDat"
                    FROM "VECHUYENBAY" 
                    WHERE "TrangThai" <> 'da_huy'
                    GROUP BY "MaCB","MaHV"
                ) vd ON vd."MaCB" = cb."MaCB"
                AND vd."MaHV"=hv."MaHV"
                LEFT JOIN (
                SELECT hvcb."MaCB",
                    SUM(hvcb."TongSoGhe") AS "TongSoGhe",
                    SUM(COALESCE(vd."SoVeDaDat",0)) AS "TongSoGheDaDat",
                    SUM(hvcb."TongSoGhe") - SUM(COALESCE(vd."SoVeDaDat",0)) AS "TongSoGheConLai"
                FROM "HANGVECHUYENBAY" hvcb
                LEFT JOIN (
                    SELECT "MaCB","MaHV", COUNT(*) AS "SoVeDaDat"
                    FROM "VECHUYENBAY"
                    WHERE "TrangThai" <> 'da_huy'
                    GROUP BY "MaCB","MaHV"
                ) vd ON vd."MaCB" = hvcb."MaCB" AND vd."MaHV" = hvcb."MaHV"
                GROUP BY hvcb."MaCB"
            ) tsg ON tsg."MaCB" = cb."MaCB"
                WHERE 1=1 
                AND cb."DaXoa" = false
                ${maChuyenBay ? executor`AND cb."MaCB" = ${maChuyenBay}` : executor``}
                ORDER BY cb."NgayGio" ASC, sbtg."ThuTuDung" ASC;
            `;
            console.log(result);
            return result;
        } catch (err) {
            throw new DBError(err.message);
        }
    },

    layChuyenBayTheoMaChuyenBay: async (maChuyenBay, tx) => {
        try {
        const executor = tx || db;
        const result = await executor`
            SELECT *
            FROM "CHUYENBAY"
            WHERE "MaCB" = ${maChuyenBay} AND "DaXoa" = false;
        `;
        return result[0] || null;
        } catch (err) {
        throw new DBError(err.message);
        }
    },
    laySoGheConLai: async (maChuyenBay, maHangVe, tx) => {
        try {
            const executor = tx || db;
            const result = await executor`
            SELECT 
                hvcb."TongSoGhe"
                - (
                    SELECT COUNT(*)
                    FROM "VECHUYENBAY" v
                    WHERE v."MaCB" = hvcb."MaCB"
                    AND v."MaHV" = hvcb."MaHV"
                    AND v."TrangThai" <> 'da_huy'
                ) AS "SoGheConLai"
            FROM "HANGVECHUYENBAY" hvcb
            WHERE hvcb."MaCB" = ${maChuyenBay}
            AND hvcb."MaHV" = ${maHangVe};
        `;
            return result[0].SoGheConLai || null;
        } catch (err) {
            throw new DBError(err.message);
        }
    },
});
export default createChuyenBayRepo;
