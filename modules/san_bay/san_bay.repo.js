import { DBError } from "../../core/errors/errors.js";

export default class SanBayRepo {
    constructor(db) {
        this.db = db;
    }
    async laySTTSanBayTiepTheo(){
        const rows= await this.db`
            SELECT nextval('sanbay_seq') as next_id;
        `;
        console.log(rows);
        return rows[0]?.next_id;
    }
    
    async taoSanBay({ maSanBay, tenSanBay, quocGia }, tx) {
        try {
            const executor = tx || this.db;
            const rows = await executor`
                INSERT INTO "SANBAY" ("MaSB","TenSB", "QuocGia")
                VALUES (${maSanBay},${tenSanBay}, ${quocGia})
                RETURNING *;
            `;
            console.log("SanBay vua tao",rows)
            return rows[0]||null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }

    
    async laySanBayTheoMaSanBay(maSanBay, tx) {
        try {
            const executor = tx || this.db;
            const rows = await executor`
                SELECT * FROM "SANBAY"
                WHERE "MaSB" = ${maSanBay}
                AND "DaXoa" = false
            `;
            return rows[0] || null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }

    async laySanBay(filter={}, tx) {
        try{
            const executor = tx || this.db;
            const {tenSanBay, quocGia} = filter;
            return await executor`
                SELECT * FROM "SANBAY"
                WHERE 1=1
                ${tenSanBay ? executor`AND "TenSB" ILIKE ${'%' + tenSanBay+'%'}`:executor``}
                ${quocGia ? executor`AND "QuocGia" ILIKE ${'%' + quocGia+'%'}`:executor``}
                AND "DaXoa" = false
                ORDER BY "MaSB";
            `;
        } catch (err) {
            throw new DBError(err.message);
        }
    }

    async capNhatSanBay(maSanBay, data, tx) {
        try {
            const executor = tx || this.db;
            const columns = Object.keys(data);
            const rows= await executor`
                UPDATE "SANBAY"
                SET ${executor(data, columns)}
                WHERE "MaSB" = ${maSanBay}
                RETURNING *;
            `;
            return rows[0] || null;
        } catch (err) {
            throw new DBError(err.message);
        }
    }

    
    async xoaSanBay(maSanBay, tx) {
        try {
            const executor = tx || this.db;

            await executor`
                UPDATE "SANBAY"
                SET "DaXoa" = true
                WHERE "MaSB" = ${maSanBay};
            `;
            return;
        } catch (err) {
            throw new DBError(err.message);
        }
    }
}
