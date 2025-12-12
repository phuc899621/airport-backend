import { DBError } from "../../core/errors/errors.js";
export default class QuyDinhRepo {
    constructor(db) {
        this.db = db;
    }
    async capNhatQuyDinh(tenQuyDinh,data, tx) {
        try {
            const executor = tx || this.db;
            const {giaTri} = data;
            const rows = await executor`
                UPDATE "THAMSO"
                SET "GiaTri" = ${giaTri} 
                WHERE "TenTS" = ${tenQuyDinh}
                RETURNING *;
            `;
            return rows[0];
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async capNhatNhieuQuyDinh(quyDinhs, tx) {
        try {
            const executor = tx || this.db;
            console.log(quyDinhs);
            const rows = await executor`
                UPDATE "THAMSO" AS ts
                SET "GiaTri" = v."GiaTri"::bigint
                FROM (
                    VALUES ${executor(quyDinhs.map(q => [q.tenQuyDinh, q.giaTri]))}
                ) AS v("TenTS", "GiaTri")
                WHERE ts."TenTS" = v."TenTS"
                RETURNING ts.*;
            `;
            console.log("Quy dinh cap nhat",rows);
            return rows;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async layQuyDinhTheoTen(tenQuyDinh, tx) {
        try {
            const executor = tx || this.db;
            const rows = await executor`
                SELECT * FROM "THAMSO"
                WHERE "TenTS" = ${tenQuyDinh}
                LIMIT 1;
            `;
            return rows[0] || null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
    async layQuyDinh(tx){
        try {
            const executor = tx || this.db;
            const rows = await executor`
                SELECT * FROM "THAMSO"
            `;
            return rows;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
        
}