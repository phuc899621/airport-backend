export const createHangVeChuyenBayRepo = (db) => ({
    layHangVeChuyenBayTheoMaChuyenBay: async (maChuyenBay, tx) => {
        const executor = tx || db;
        const result = await executor`
        SELECT *
        FROM "HANGVECHUYENBAY" hvcb
        JOIN "HANGVE" hv ON hv."MaHV" = hvcb."MaHV"
        WHERE hvcb."MaCB" = ${maChuyenBay};
        `;
        return result;
    },

    layHangVeChuyenBay: async (maChuyenBay, maHangVe, tx) => {
        const executor = tx || db;
        const result = await executor`
        SELECT *
        FROM "HANGVECHUYENBAY" hvcb
        JOIN "HANGVE" hv ON hv."MaHV" = hvcb."MaHV"
        WHERE hvcb."MaCB" = ${maChuyenBay} AND hvcb."MaHV" = ${maHangVe};
        `;
        return result[0] || null;
    },

    taoHangVeChuyenBay: async (data, tx) => {
        const { maChuyenBay, maHangVe, tongSoGhe } = data;
        const executor = tx || db;
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
    },
    taoNhieuHangVeChuyenBay: async (data, tx) => {
        try {
            const executor = tx || db;
            const {maChuyenBay, hangVes} = data;
            const values=hangVes.map((hv)=>({
                MaCB:maChuyenBay,
                MaHV:hv.maHangVe,
                TongSoGhe:hv.tongSoGhe
            }));
            const rows = await executor`
                INSERT INTO "HANGVECHUYENBAY" 
                ${executor(values, 'MaCB', 'MaHV', 'TongSoGhe')} RETURNING *;
            `;
            return rows;
        } catch (err) {
        throw new DBError(err.message);
        }
    },
});

export default createHangVeChuyenBayRepo;
