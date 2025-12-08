import { DBError } from "../../core/errors/errors.js";

export default class SanBayTrungGianRepo {
    constructor(db) {
        this.db = db;
    }
    async layThoiGianDungToiThieu() {
        try {
            const executor = this.db;
            const result = await executor`
                SELECT "GiaTri" FROM "THAMSO" WHERE "TenThamSo" = 'ThoiGianDungMin';
            `;
            return result[0]?.GiaTri ? result[0].GiaTri : null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async layThoiGianDungToiDa() {
        try {
            const executor = this.db;
            const result = await executor`
                SELECT "GiaTri" FROM "THAMSO" WHERE "TenThamSo" = 'ThoiGianDungMax';
            `;
            return result[0]?.GiaTri ? result[0].GiaTri : null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async laySanBayTrungGianToiDa() {
        try {
            const executor = this.db;
            const result = await executor`
                SELECT "GiaTri" FROM "THAMSO" WHERE "TenThamSo" = 'SanBayTrungGianToiDa';
            `;
            return result[0]?.GiaTri ? result[0].GiaTri : null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async laySanBayTrungGianTheoMaChuyenBay(maChuyenBay, tx) {
        try {
            const executor = tx || this.db;
            return await executor`
                SELECT * FROM "SANBAYTRUNGGIAN" sbtg
                LEFT JOIN "SANBAY" sb
                ON sbtg."MaSB" = sb."MaSB"
                WHERE sbtg."MaCB" = ${maChuyenBay};
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
                ON sbtg."MaSB" = sb."MaSB"
                WHERE sbtg."MaCB" = ${maChuyenBay} AND sbtg."MaSB" = ${maSanBay};
            `;
            return result[0] || null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async taoSanBayTrungGian(data, tx) {
        try {
            const { maChuyenBay, maSanBay, thoiGianDung, ghiChu="" } = data;
            const executor = tx || this.db;
            console.log(data);
            const rows = await executor`
                INSERT INTO "SANBAYTRUNGGIAN" ("MaCB", "MaSB", "ThoiGianDung", "GhiChu")
                VALUES (${maChuyenBay}, ${maSanBay}, ${thoiGianDung}, ${ghiChu}) RETURNING *;
            `;
            return rows[0] || null;
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
                WHERE "MaCB" = ${maChuyenBay} AND "MaSB" = ${maSanBay}
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
                WHERE "MaCB" = ${maChuyenBay} AND "MaSB" = ${maSanBay};
            `;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    
}