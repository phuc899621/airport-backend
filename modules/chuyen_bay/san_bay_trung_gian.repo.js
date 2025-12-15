import { DBError } from "../../core/errors/errors.js";

export const createSanBayTrungGianRepo = (db) => ({
    

    laySanBayTrungGianTheoMaChuyenBay: async (maChuyenBay, tx) => {
        try {
        const executor = tx || db;
        return await executor`
            SELECT * FROM "SANBAYTRUNGGIAN" sbtg
            LEFT JOIN "SANBAY" sb
            ON sbtg."MaSB" = sb."MaSB"
            WHERE sbtg."MaCB" = ${maChuyenBay};
        `;
        } catch (err) {
        throw new DBError(err.message);
        }
    },

    laySanBayTrungGian: async (maChuyenBay, maSanBay, tx) => {
        try {
        const executor = tx || db;
        const result = await executor`
            SELECT * FROM "SANBAYTRUNGGIAN" sbtg
            LEFT JOIN "SANBAY" sb
            ON sbtg."MaSB" = sb."MaSB"
            WHERE sbtg."MaCB" = ${maChuyenBay} AND sbtg."MaSB" = ${maSanBay};
        `;
        return result[0] || null;
        } catch (err) {
        throw new DBError(err.message);
        }
    },

    taoSanBayTrungGian: async (data, tx) => {
        try {
        const { maChuyenBay, maSanBay, thoiGianDung, ghiChu = "" } = data;
        const executor = tx || db;
        const rows = await executor`
            INSERT INTO "SANBAYTRUNGGIAN" ("MaCB", "MaSB", "ThoiGianDung", "GhiChu")
            VALUES (${maChuyenBay}, ${maSanBay}, ${thoiGianDung}, ${ghiChu}) RETURNING *;
        `;
        return rows[0] || null;
        } catch (err) {
        throw new DBError(err.message);
        }
    },
    taoNhieuSanBayTrungGian: async (data, tx) => {
        try {
            const executor = tx || db;
            const {maChuyenBay, sanBayTrungGians} = data;
            const values=sanBayTrungGians.map((sbtg)=>({
                MaCB:maChuyenBay,
                MaSB:sbtg.maSanBay,
                ThoiGianDung:sbtg.thoiGianDung,
                GhiChu:sbtg.ghiChu
            }));
            const rows = await executor`
                INSERT INTO "SANBAYTRUNGGIAN" 
                ${executor(values, 'MaCB', 'MaSB', 'ThoiGianDung', 'GhiChu')} RETURNING *;
            `;
            return rows;
        } catch (err) {
        throw new DBError(err.message);
        }
    },
});

export default createSanBayTrungGianRepo;