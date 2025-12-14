export default class BaoCaoRepo{
    constructor(db){
        this.db=db;
    }
    async layBaoCao(start,end,tx){
        const executor = tx || this.db;
        const rows = await executor`
            SELECT
                cb."MaCB",
                COUNT(v."MaVe") AS "SoVeDaBan",
                COALESCE(SUM(hvcb."TongSoGhe"), 0) AS "TongSoGhe",
                COALESCE(SUM(v."GiaTien"), 0) AS "DoanhThu",
                ROUND(
                    COUNT(v."MaVe") * 1.0
                    / NULLIF(SUM(hvcb."TongSoGhe"), 0),
                    2
                ) AS "TiLeBanVe"
            FROM "CHUYENBAY" cb
            JOIN "HANGVECHUYENBAY" hvcb
                ON hvcb."MaCB" = cb."MaCB"

            -- Vé đã bán
            LEFT JOIN "VECHUYENBAY" v
                ON v."MaCB" = cb."MaCB"
            AND v."TrangThai" <> 'da_huy'

            WHERE cb."DaXoa" = false
            AND cb."NgayGio" >= ${start}
            AND cb."NgayGio" <  ${end}

            GROUP BY cb."MaCB"

            ORDER BY cb."MaCB";
            `;
        return rows;
    }
    async layBaoCaoTheoNam(start,end,tx){
        const executor = tx || this.db;
        const rows = await executor`
            SELECT
                m.thang AS "Thang",
                COALESCE(d."SoChuyenBay", 0) AS "SoChuyenBay",
                COALESCE(d."DoanhThu", 0) AS "DoanhThu",
                CASE
                    WHEN COALESCE(d."TongSoGhe", 0) = 0 THEN 0
                    ELSE ROUND(
                        d."SoVeDaBan" * 1.0 / d."TongSoGhe",
                        2
                    )
                END AS "TiLeBanVe"
            FROM (
                SELECT generate_series(1, 12) AS thang
            ) m
            LEFT JOIN (
                SELECT
                    EXTRACT(MONTH FROM cb."NgayGio")::int AS thang,
                    COUNT(DISTINCT cb."MaCB") AS "SoChuyenBay",
                    COUNT(v."MaVe") AS "SoVeDaBan",
                    SUM(hvcb."TongSoGhe") AS "TongSoGhe",
                    SUM(v."GiaTien") AS "DoanhThu"
                FROM "CHUYENBAY" cb
                JOIN "HANGVECHUYENBAY" hvcb
                    ON hvcb."MaCB" = cb."MaCB"
                LEFT JOIN "VECHUYENBAY" v
                    ON v."MaCB" = cb."MaCB"
                AND v."TrangThai" <> 'da_huy'
                WHERE cb."DaXoa" = false
                AND cb."NgayGio" >= ${start}
                AND cb."NgayGio" <  ${end}
                GROUP BY EXTRACT(MONTH FROM cb."NgayGio")
            ) d
            ON d.thang = m.thang
            ORDER BY m.thang;
            `;
        return rows;
    }
}