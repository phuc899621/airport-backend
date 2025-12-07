import { ValidationError } from "../../core/errors/errors.js";
import HanhKhachBO from "./hanh_khach.bo.js";

export default class HanhKhachService {
    constructor(hanhKhachRepository) {
        this.repo = hanhKhachRepository;
    }
    async layHanhKhach(maHanhKhach,filter){
        if(maHanhKhach){
            const hanhKhachRaw= this.repo.layHanhKhachTheoMaHanhKhach(maHanhKhach);
            return hanhKhachRaw?new HanhKhachBO(hanhKhachRaw):null;
        }
        const dsHanhKhachRaw=await this.repo.layHanhKhach(filter);
        return dsHanhKhachRaw.map(hanhKhachRaw=>new HanhKhachBO(hanhKhachRaw));
    }
    async taoHanhKhach(data){
        if(data.cmnd&&(await this.repo.layHanhKhachTheoCMND(data.cmnd))) throw new ValidationError("CMND đã tồn tại");
        if(data.email&&(await this.repo.layHanhKhachTheoEmail(data.email))) throw new ValidationError("Email đã tồn tại");
        const hanhKhachRaw=await this.repo.taoHanhKhach(data);
        return new HanhKhachBO(hanhKhachRaw);
    }
    async xoaHanhKhach(maHanhKhach){
        if(maHanhKhach && !(await this.repo.layHanhKhachTheoMaHanhKhach(maHanhKhach))) throw new ValidationError("Không tìm thấy hành khách");
        const hanhKhachRaw=await this.repo.xoaHanhKhach(maHanhKhach);
        return new HanhKhachBO(hanhKhachRaw);
    }

}