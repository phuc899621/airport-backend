export default class HangVeChuyenBayRepo{
    constructor(db){
        this.db = db;
    }
    async layHangVeChuyenBayTheoMaChuyenBay(maChuyenBay, tx) {
        const executor = tx || this.db;
        const result = await executor`
            SELECT *
            FROM "HANGVECHUYENBAY" hvcb
            JOIN "HANGVE" hv ON hv."MaHV" = hvcb."MaHV"
            WHERE hvcb."MaCB" = ${maChuyenBay};
        `;
        return result;
    }
    async layHangVeChuyenBay(maChuyenBay, maHangVe, tx) {
        const executor = tx || this.db;
        const result = await executor`
            SELECT *
            FROM "HANGVECHUYENBAY" hvcb
            JOIN "HANGVE" hv ON hv."MaHV" = hvcb."MaHV"
            WHERE hvcb."MaCB" = ${maChuyenBay} AND hvcb."MaHV" = ${maHangVe};
        `;
        return result[0] || null;
    }
    async capNhatHangVeChuyenBay(maChuyenBay, maHangVe,data, tx) {
        const executor = tx || this.db;
        const columns = Object.keys(data);
        const rows = await executor`
            WITH updated AS (
                UPDATE "HANGVECHUYENBAY"
                SET ${executor(data, columns)}
                WHERE "MaCB" = ${maChuyenBay} AND "MaHV" = ${maHangVe}
                RETURNING *
            )
            SELECT 
            u.*,
            hv."TenHV",
            hv."HeSoGia"
            FROM updated u
            JOIN "HANGVE" hv ON hv."MaHV" = u."MaHV";
        `;
        return rows[0] || null;
    }
    async taoHangVeChuyenBay(data, tx) {
        const { maChuyenBay, maHangVe, tongSoGhe } = data;
        const executor = tx || this.db;
        const rows = await executor`
            WITH inserted AS (
                INSERT INTO "HANGVECHUYENBAY" ("MaCB", "MaHV", "TongSoGhe")
                VALUES (${maChuyenBay}, ${maHangVe}, ${tongSoGhe})
                RETURNING *
            )
            SELECT 
                i.*,
                hv."TenHV",
                hv."HeSoGia"
            FROM inserted i
            JOIN "HANGVE" hv ON hv."MaHV" = i."MaHV";
        `;
        return rows[0] || null;
    }
    async xoaHangVeChuyenBayTheoMaChuyenBay(maChuyenBay, tx) {
        const executor = tx || this.db;
        const rows = await executor`
            DELETE FROM "HANGVECHUYENBAY"
            WHERE "MaCB" = ${maChuyenBay} RETURNING *;
        `;
        return rows[0] || null;
    }
    async xoaHangVeChuyenBayTheoMaHangVe(maChuyenBay, maHangVe, tx) {
        const executor = tx || this.db;
        const rows = await executor`
            DELETE FROM "HANGVECHUYENBAY"
            WHERE "MaCB" = ${maChuyenBay} AND "MaHV" = ${maHangVe} RETURNING *;
        `;
        return rows[0] || null;
    }
}