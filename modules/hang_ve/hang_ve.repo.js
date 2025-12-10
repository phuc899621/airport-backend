export default class HangVeRepo{
    constructor(db){
        this.db = db
    }
    async layHangVeTheoMaHangVe(maHangVe, tx){
        const executor = tx || this.db;
        const rows = await executor`
            SELECT * FROM "HANGVE"
            WHERE "MaHV" = ${maHangVe}
            LIMIT 1;
        `;
        return rows[0] || null;
    }
}