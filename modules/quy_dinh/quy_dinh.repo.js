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