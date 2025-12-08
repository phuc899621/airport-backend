import { DBError } from "../../core/errors/errors.js";


export default class ChuyenBayRepo{
    constructor(db){
        this.db=db;
    }
    async layThoiGianBayToiThieu() {
        try{
            const executor = this.db;
            const result = await executor`
                SELECT "GiaTri" FROM "THAMSO" WHERE "TenThamSo" = 'ThoiGianBayToiThieu';
            `;
            return result[0]?.GiaTri?result[0].GiaTri:null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }

    async layLichChuyenBay(query,tx) {
        try {
            const executor = tx || this.db;
            const { tenSanBayDi, tenSanbayDen, 
                  maSanBayDi, maSanBayDen } = query;
            const result = await executor`
                SELECT 
                    cb."MaCB",
                    cb."MaSBDi" ,
                    cb."MaSBDen",
                    sbDi."TenSB" AS "TenSBDi", 
                    sbDen."TenSB" AS "TenSBDen",
                    sbDi."QuocGia" AS "QuocGiaSBDi",
                    sbDen."QuocGia" AS "QuocGiaSBDen",
                    cb."ThoiGianBay",
                    cb."SLGheHang1",
                    cb."SLGheHang2",
                    cb."NgayGio",
                    cb."GiaVe",

                    ROUND(cb."GiaVe" * hv1."HeSoGia") AS "GiaVeHang1",
                    ROUND(cb."GiaVe" * hv2."HeSoGia") AS "GiaVeHang2",

                    sbtg."MaSB" ,
                    sb."TenSB",
                    sb."QuocGia",
                    sbtg."ThuTuDung",
                    sbtg."ThoiGianDung",
                    sbtg."GhiChu",
                    (cb."SLGheHang1" - COALESCE(d1."DatChoConHieuLuc",0)) AS "SLGheHang1ConLai",
                    (cb."SLGheHang2" - COALESCE(d2."DatChoConHieuLuc",0)) AS "SLGheHang2ConLai"
                FROM "CHUYENBAY" cb
                LEFT JOIN "SANBAY" AS sbDi
                    ON cb."MaSBDi" = sbDi."MaSB"
                LEFT JOIN "SANBAY" AS sbDen
                    ON cb."MaSBDen" = sbDen."MaSB"
                LEFT JOIN "SANBAYTRUNGGIAN" sbtg
                    ON sbtg."MaCB" = cb."MaCB"
                LEFT JOIN "SANBAY" sb
                    ON sb."MaSB"=sbtg."MaSB"
                LEFT JOIN (
                    SELECT "MaCB", COUNT(*) AS "DatChoConHieuLuc"
                    FROM "VECHUYENBAY" 
                    WHERE "TrangThai" <> 'da_huy' AND "MaHV"='HV001'
                    GROUP BY "MaCB"
                ) d1 ON d1."MaCB" = cb."MaCB"

                LEFT JOIN (
                    SELECT "MaCB", COUNT(*) AS "DatChoConHieuLuc"
                    FROM "VECHUYENBAY" 
                    WHERE "TrangThai" <> 'da_huy' AND "MaHV"='HV002'
                    GROUP BY "MaCB"
                ) d2 ON d2."MaCB" = cb."MaCB"
                LEFT JOIN "HANGVE" hv1 ON hv1."MaHV" = 'HV001'
                LEFT JOIN "HANGVE" hv2 oN hv2."MaHV"='HV002'
                WHERE 1=1
                ${maSanBayDi ? executor`AND cb."MaSBDi" = ${maSanBayDi}` : executor``}
                ${maSanBayDen ? executor`AND cb."MaSBDen" = ${maSanBayDen}` : executor``}
                ${tenSanBayDi ? executor`AND sbDi."TenSB" ILIKE ${'%'+ tenSanBayDi+'%'}` : executor``}
                ${tenSanbayDen ? executor`AND sbDen."TenSB" ILIKE ${'%'+tenSanbayDen +'%'}` : executor``}
                ORDER BY cb."NgayGio" ASC, sbtg."ThuTuDung" ASC;
            `;
            return result;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async taoChuyenBay(data,tx)  {
        try {
            const executor = tx || this.db;
            const { maSanBayDi, maSanBayDen, ngayGio, slGheHang1, slGheHang2,
                giaVe, thoiGianBay } = data;
            const rows= await executor`
                INSERT INTO "CHUYENBAY" ("MaSBDi",
                    "MaSBDen","NgayGio","GiaVe","ThoiGianBay","SLGheHang1","SLGheHang2")
                VALUES (${maSanBayDi}, ${maSanBayDen}, ${ngayGio}, ${giaVe}, ${thoiGianBay}, ${slGheHang1}, ${slGheHang2})
                RETURNING *;
            `;
            return rows[0]||null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async layLichChuyenBayTheoMaChuyenBay(maChuyenBay, tx) {
        try {
            const executor = tx || this.db;
            const result = await executor`
                SELECT 
                    cb."MaCB",
                    cb."MaSBDi" ,
                    cb."MaSBDen",
                    sbDi."TenSB" AS "TenSBDi", 
                    sbDen."TenSB" AS "TenSBDen",
                    sbDi."QuocGia" AS "QuocGiaSBDi",
                    sbDen."QuocGia" AS "QuocGiaSBDen",
                    cb."ThoiGianBay",
                    cb."SLGheHang1",
                    cb."SLGheHang2",
                    cb."NgayGio",
                    cb."GiaVe",

                    ROUND(cb."GiaVe" * hv1."HeSoGia") AS "GiaVeHang1",
                    ROUND(cb."GiaVe" * hv2."HeSoGia") AS "GiaVeHang2",

                    sbtg."MaSB" ,
                    sb."TenSB",
                    sb."QuocGia",
                    sbtg."ThuTuDung",
                    sbtg."ThoiGianDung",
                    sbtg."GhiChu",
                    (cb."SLGheHang1" - COALESCE(d1."DatChoConHieuLuc",0)) AS "SLGheHang1ConLai",
                    (cb."SLGheHang2" - COALESCE(d2."DatChoConHieuLuc",0)) AS "SLGheHang2ConLai"
                FROM "CHUYENBAY" cb
                LEFT JOIN "SANBAY" AS sbDi
                    ON cb."MaSBDi" = sbDi."MaSB"
                LEFT JOIN "SANBAY" AS sbDen
                    ON cb."MaSBDen" = sbDen."MaSB"
                LEFT JOIN "SANBAYTRUNGGIAN" sbtg
                    ON sbtg."MaCB" = cb."MaCB"
                LEFT JOIN "SANBAY" sb
                    ON sb."MaSB"=sbtg."MaSB"
                LEFT JOIN (
                    SELECT "MaCB", COUNT(*) AS "DatChoConHieuLuc"
                    FROM "VECHUYENBAY" 
                    WHERE "TrangThai" <> 'da_huy' AND "MaHV"='HV001'
                    GROUP BY "MaCB"
                ) d1 ON d1."MaCB" = cb."MaCB"

                LEFT JOIN (
                    SELECT "MaCB", COUNT(*) AS "DatChoConHieuLuc"
                    FROM "VECHUYENBAY" 
                    WHERE "TrangThai" <> 'da_huy' AND "MaHV"='HV002'
                    GROUP BY "MaCB"
                ) d2 ON d2."MaCB" = cb."MaCB"
                LEFT JOIN "HANGVE" hv1 ON hv1."MaHV" = 'HV001'
                LEFT JOIN "HANGVE" hv2 oN hv2."MaHV"='HV002'
                WHERE cb."MaCB" = ${maChuyenBay}
                ORDER BY cb."NgayGio" ASC, sbtg."ThuTuDung" ASC;
            `;
            return result[0] || null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async layChuyenBayTheoMaChuyenBay(maChuyenBay, tx) {
        try {
            const executor = tx || this.db;
            const result = await executor`
                SELECT *
                FROM "CHUYENBAY"
                WHERE "MaCB" = ${maChuyenBay};
            `;
            return result[0] || null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async capNhatChuyenBay(maChuyenBay, data, tx) {
        try {
            const executor = tx || this.db;
            const columns = Object.keys(data);
            const rows = await executor`
                UPDATE "CHUYENBAY"
                SET ${executor(data, columns)}
                WHERE "MaCB" = ${maChuyenBay}
                RETURNING *;
            `;
            return rows[0]||null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async xoaChuyenBay(maChuyenBay, tx) {
        try {
            const executor = tx || this.db;
            return await executor`
                DELETE FROM "CHUYENBAY"
                WHERE "MaCB" = ${maChuyenBay}
                RETURNING *;
            `;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
}