export default class SanBayTrungGianRepo {
    constructor(db) {
        this.db = db;
    }
    async laySanBayTrungGianTheoMaChuyenBay(maChuyenBay, tx) {
        try {
            const executor = tx || this.db;
            return await executor`
                SELECT * FROM "SANBAYTRUNGGIAN" sbtg
                LEFT JOIN "SANBAY" sb
                ON sbtg."MaSanBay" = sb."MaSanBay"
                WHERE sbtg."MaChuyenBay" = ${maChuyenBay};
            `;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async laySanBayTrungGian(maChuyenBay,maSanBay, tx) {
        try {
            const executor = tx || this.db;
            const result= await executor`
                SELECT * FROM "SANBAYTRUNGGIAN" sbtg
                LEFT JOIN "SANBAY" sb
                ON sbtg."MaSanBay" = sb."MaSanBay"
                WHERE sbtg"MaChuyenBay" = ${maChuyenBay} AND sbtg."MaSanBay" = ${maSanBay}
                RETURNING *;
            `;
            return result[0] || null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async taoSanBayTrungGian(maChuyenBay,data, tx) {
        try {
            const { maSanBay, thoiGianDung, ghiChu="" } = data;
            const executor = tx || this.db;
            const rows = await executor`
                INSERT INTO "SANBAYTRUNGGIAN" ("MaChuyenBay", "MaSanBay", "ThoiGianDung", "GhiChu")
                VALUES (${maChuyenBay}, ${maSanBay}, ${thoiGianDung}, ${ghiChu}) RETURNING *;
            `;
            return rows[0];
        } catch (err) {
            throw new DBError(err.message);
        }
    }   
    async capNhatSanBayTrungGian(maChuyenBay, maSanBay, data,tx){
        try {
            const executor = tx || this.db;
            const columns = Object.keys(data);
            const rows = await executor`
                UPDATE "SANBAYTRUNGGIAN"
                SET ${executor(data, columns)}
                WHERE "MaChuyenBay" = ${maChuyenBay} AND "MaSanBay" = ${maSanBay}
                RETURNING *;
            `;
            return rows[0];
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async xoaSanBayTrungGian(maChuyenBay,maSanBay, tx) {
        try {
            const executor = tx || this.db;
            await executor`
                DELETE FROM "SANBAYTRUNGGIAN"
                WHERE "MaChuyenBay" = ${maChuyenBay} AND "MaSanBay" = ${maSanBay};
            `;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    
}