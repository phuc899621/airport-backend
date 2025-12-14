import BaoCaoTheoNamBO from "./bao_cao_theo_nam.bo.js";
import BaoCaoTheoThangBO from "./bao_cao_theo_thang.bo.js";

export default class BaoCaoService{
    constructor(baoCaoRepo){
        this.repo=baoCaoRepo;
    }
    async layBaoCao(query){
        const {nam, thang}=query;
        if(nam&&thang){
            const start = new Date(nam, thang - 1, 1); 
            const end   = new Date(nam, thang, 1);     
            const result= await this.repo.layBaoCao(start,end);
            return result.map(item=>new BaoCaoTheoThangBO(item));
        }
        if(nam){
            const start = new Date(nam, 0, 1); 
            const end  = new Date(parseInt(nam) + 1, 0, 1);     
            const result= await this.repo.layBaoCaoTheoNam(start,end);
            return result.map(item=>new BaoCaoTheoNamBO(item));
        }
        return null;
        

    }
}