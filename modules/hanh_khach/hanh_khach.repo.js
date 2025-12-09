export default class HanhKhachRepo {
    constructor(db) {
        this.db = db;
    }
    async laySTTHanhKhachTiepTheo(){
        const rows= await this.db`
            SELECT nextval('hanhkhach_seq') as next_id;
        `;
        console.log(rows);
        return rows[0]?.next_id;
    }
    async layHanhKhach(filter={},tx){
        const executor = tx || this.db;
        const { maHanhKhach, hoTen, cmnd, dienThoai, email} = filter;
        const rows = await executor`
            SELECT * FROM "HANHKHACH"
            WHERE 1=1
            ${maHanhKhach ? executor`AND "MaHK" = ${maHanhKhach}`:executor``}
            ${hoTen ? executor`AND "HoTen" ILIKE ${'%' + hoTen+'%'}`:executor``}
            ${cmnd ? executor`AND "CMND" ILIKE ${'%' + cmnd+'%'}`:executor``}
            ${dienThoai ? executor`AND "DienThoai" ILIKE ${'%' + dienThoai+'%'}`:executor``}
            ${email ? executor`AND "Email" ILIKE ${'%' + email+'%'}`:executor``}
            AND "DaXoa" = false
        `;
        return rows;
    }
    async layHanhKhachTheoMaHanhKhach(maHanhKhach, tx) {
        const executor = tx || this.db;
        const rows = await executor`
            SELECT * FROM "HANHKHACH"
            WHERE "MaHK" = ${maHanhKhach} AND "DaXoa" = false
            LIMIT 1;
        `;
        return rows[0] || null;
    }
    async layHanhKhachTheoCMND(cmnd, tx) {
        const executor = tx || this.db;
        const rows = await executor`
            SELECT * FROM "HANHKHACH"
            WHERE "CMND" = ${cmnd} AND "DaXoa" = false
            LIMIT 1;
        `;
        return rows[0] || null;
    }
    async layHanhKhachTheoSDT(dienThoai, tx) {
        const executor = tx || this.db;
        const rows = await executor`
            SELECT * FROM "HANHKHACH"
            WHERE "DienThoai" = ${dienThoai} AND "DaXoa" = false
            LIMIT 1;
        `;
        return rows[0] || null;
    }
    async layHanhKhachTheoEmail(email, tx) {
        const executor = tx || this.db;
        const rows = await executor`
            SELECT * FROM "HANHKHACH"
            WHERE "Email" = ${email} AND "DaXoa" = false
            LIMIT 1;
        `;
        return rows[0] || null;
    }
    async taoHanhKhach(data, tx) {
        const {maHanhKhach ,cmnd, email, dienThoai, hoTen } = data;
        const executor = tx || this.db;
        const rows = await executor`
            INSERT INTO "HANHKHACH" ("MaHK","HoTen", "CMND","Email","DienThoai")
            VALUES (${maHanhKhach},${hoTen}, ${cmnd}, ${email}, ${dienThoai}) RETURNING *;
        `;
        return rows[0]??null;
    }
    async xoaHanhKhach(maHanhKhach, tx){
        const executor = tx || this.db;
        const rows = await executor`
            UPDATE "HANHKHACH"
            SET "DaXoa" = true
            WHERE "MaHK" = ${maHanhKhach};
        `;
        return rows[0];
    }
    
}