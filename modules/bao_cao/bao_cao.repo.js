export default class BaoCaoRepo{
    constructor(db){
        this.db=db;
    }
    async layBaoCao(tx){
        const executor = tx || this.db;
        const rows = await executor`
            SELECT * FROM "BAOCAO";`;
        return rows;
    }
}