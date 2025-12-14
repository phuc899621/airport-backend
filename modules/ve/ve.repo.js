export default class VeRepo{
    constructor(db){
        this.db=db;
    }
    async taoVeMua(data,tx){
        const executor = tx || this.db;
        const {maVe,maChuyenBay,maHangVe,maHanhKhach,giaTien} = data;
        const rows = await executor`
            INSERT INTO "VECHUYENBAY" ("MaVe","MaCB","MaHV","MaHK","GiaTien","TrangThai")
            VALUES (${maVe},${maChuyenBay},${maHangVe},${maHanhKhach},${giaTien},'da_mua') RETURNING *;`;
        return rows[0] || null;

        }
    async taoVeDat(data,tx){
        const executor = tx || this.db;
        const {maVe,maChuyenBay,maHangVe,maHanhKhach,giaTien} = data;
        const rows = await executor`
            INSERT INTO "VECHUYENBAY" ("MaVe","MaCB","MaHV","MaHK","GiaTien","TrangThai")
            VALUES (${maVe},${maChuyenBay},${maHangVe},${maHanhKhach},${giaTien},'da_dat') RETURNING *;`;
        return rows[0] || null;

    }
    async layVe(tx){
        const executor = tx || this.db;
        const rows = await executor`
            SELECT * FROM "VECHUYENBAY" v
            JOIN "HANGVE" hv ON hv."MaHV" = v."MaHV"
            JOIN "HANHKHACH" hk ON hk."MaHK" = v."MaHK"
            ;`;
        return rows;
    }


    async laySTTVeTiepTheo(tx){
        const executor = tx || this.db;
        const rows = await executor`
            SELECT nextval('ve_seq') as next_id;`;
        return rows[0]?.next_id || null;
    }
}