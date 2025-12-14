import BaoCaoTheoNamBO from "./bao_cao_theo_nam.bo.js";
import BaoCaoTheoThangBO from "./bao_cao_theo_thang.bo.js";

export default class BaoCaoService{
    constructor(baoCaoRepo){
        this.repo=baoCaoRepo;
    }
    async layBaoCaoTheoNam(nam){
        if(nam){
            const start = new Date(nam, 0, 1); 
            const end  = new Date(parseInt(nam) + 1, 0, 1);     
            const result= await this.repo.layBaoCaoTheoNam(start,end);
            return result.map(item=>new BaoCaoTheoNamBO(item));
        }
        return null;
        

    }
    async layBaoCaoTheoThang(nam){
        if (!nam) return null;

        const start = new Date(nam, 0, 1);
        const end   = new Date(parseInt(nam) + 1, 0, 1);
        const dsBaoCaoTheoCB = await this.repo.layBaoCaoTheoThang(start, end);

        const grouped = {};
        for (let m = 1; m <= 12; m++) {
            grouped[m] = [];
        }

        dsBaoCaoTheoCB.forEach(cb => {
            const thang = parseInt(cb.Thang);
            grouped[thang].push(new BaoCaoTheoThangBO(cb));
        });

        return grouped;

    }
}