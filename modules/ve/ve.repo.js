
const createVeRepo = (db) => ({

    taoVeMua: async (data, tx) => {
        const executor = tx || db;
        const { maVe, maChuyenBay, maHangVe, maHanhKhach, giaTien } = data;

        const rows = await executor`
            INSERT INTO "VECHUYENBAY"
            ("MaVe","MaCB","MaHV","MaHK","GiaTien","TrangThai")
            VALUES (${maVe},${maChuyenBay},${maHangVe},${maHanhKhach},${giaTien},'da_mua')
            RETURNING *;
        `;
        return rows[0] || null;
    },

    layGiaTienDaTinh: async (maChuyenBay, maHangVe, tx) => {
        const executor = tx || db;

        const rows = await executor`
            SELECT 
                ROUND(cb."GiaVe" * hv."HeSoGia") AS "GiaTien"
            FROM "CHUYENBAY" cb
            JOIN "HANGVECHUYENBAY" hvcb 
                ON hvcb."MaCB" = cb."MaCB"
            JOIN "HANGVE" hv 
                ON hv."MaHV" = hvcb."MaHV"
            WHERE cb."MaCB" = ${maChuyenBay}
              AND hv."MaHV" = ${maHangVe}
              AND cb."DaXoa" = false
            LIMIT 1;
        `;
        return rows[0]?.GiaTien || null;
    },


    taoVeDat: async (data, tx) => {
        const executor = tx || db;
        const { maVe, maChuyenBay, maHangVe, maHanhKhach, giaTien } = data;

        const rows = await executor`
            INSERT INTO "VECHUYENBAY"
            ("MaVe","MaCB","MaHV","MaHK","GiaTien","TrangThai")
            VALUES (${maVe},${maChuyenBay},${maHangVe},${maHanhKhach},${giaTien},'da_dat')
            RETURNING *;
        `;
        return rows[0] || null;
    },

    layVe: async (tx) => {
        const executor = tx || db;
        return await executor`
            SELECT *
            FROM "VECHUYENBAY" v
            JOIN "HANGVE" hv ON hv."MaHV" = v."MaHV"
            JOIN "HANHKHACH" hk ON hk."MaHK" = v."MaHK"
            WHERE v."TrangThai" <> 'da_huy';
        `;
    },
    layVeTheoMaVe: async (maVe,tx) => {
        const executor = tx || db;
        const result= await executor`
            SELECT *
            FROM "VECHUYENBAY" v
            JOIN "HANGVE" hv ON hv."MaHV" = v."MaHV"
            JOIN "HANHKHACH" hk ON hk."MaHK" = v."MaHK"
            WHERE v."TrangThai" <> 'da_huy'
            AND v."MaVe" = ${maVe};
        `;
        return result[0] || null;
    },

    thanhToanVe: async (maVe, tx) => {
        const executor = tx || db;

        const rows = await executor`
            UPDATE "VECHUYENBAY"
            SET "TrangThai" = 'da_mua'
            WHERE "MaVe" = ${maVe}
            RETURNING *;
        `;
        return rows[0] || null;
    },

    huyVe: async (maVe, tx) => {
        const executor = tx || db;

        const rows = await executor`
            UPDATE "VECHUYENBAY"
            SET "TrangThai" = 'da_huy'
            WHERE "MaVe" = ${maVe}
            RETURNING *;
        `;
        return rows[0] || null;
    },

    laySTTTiepTheo: async (tx) => {
        const executor = tx || db;
        const rows = await executor`
            SELECT nextval('ve_seq') AS next_id;
        `;
        return rows[0]?.next_id || null;
    }

});

export default createVeRepo;
