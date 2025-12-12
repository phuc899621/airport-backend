
import { NotFoundError } from "../../core/errors/errors.js";
import QuyDinhBO from "./quy_dinh.bo.js";

export default class QuyDinhService{
    constructor(quyDinhRepo){
        this.repo=quyDinhRepo;
    }
    async capNhatQuyDinh(tenQuyDinh,data,tx){ 
        if(!(await this.repo.layQuyDinhTheoTen(tenQuyDinh,tx))) throw new NotFoundError("Quy định không tồn tại");
        const result= await this.repo.capNhatQuyDinh(tenQuyDinh,data,tx);
        return result? new QuyDinhBO(result):null;
    }
    async capNhatNhieuQuyDinh(dsQuyDinh,tx){ 
        const result= await this.repo.capNhatNhieuQuyDinh(dsQuyDinh,tx);
        return result.map(item=>new QuyDinhBO(item));
    }
    async layQuyDinh(tx){
        const result= await this.repo.layQuyDinh(tx);
        return result.map(item=>new QuyDinhBO(item));
    }
}
