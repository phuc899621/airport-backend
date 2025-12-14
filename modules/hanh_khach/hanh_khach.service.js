import { NotFoundError, ValidationError } from "../../core/errors/errors.js";
import HanhKhachBO from "./hanh_khach.bo.js";

export default class HanhKhachService {
    constructor(hanhKhachRepository) {
        this.repo = hanhKhachRepository;
    }
    async layHanhKhach(maHanhKhach,filter){
        if(maHanhKhach){
            const hanhKhachRaw= await this.repo.layHanhKhachTheoMaHanhKhach(maHanhKhach);
            if(!hanhKhachRaw) throw new NotFoundError("Không tìm thấy hành khách"); 
            return new HanhKhachBO(hanhKhachRaw);
        }
        const dsHanhKhachRaw=await this.repo.layHanhKhach(filter);
        return dsHanhKhachRaw.map(hanhKhachRaw=>new HanhKhachBO(hanhKhachRaw));
    }
    
    async layHanhKhachTheoCMND(cmnd){
        const hanhKhachRaw=await this.repo.layHanhKhachTheoCMND(cmnd);
        if(!hanhKhachRaw) throw new NotFoundError("Không tìm thấy hành khách");
        return new HanhKhachBO(hanhKhachRaw);
    }
    async taoHanhKhach(data){
        if(data.cmnd&&(await this.repo.layHanhKhachTheoCMND(data.cmnd))) throw new ValidationError("CMND đã tồn tại");
        if(data.email&&(await this.repo.layHanhKhachTheoEmail(data.email))) throw new ValidationError("Email đã tồn tại");
        data.maHanhKhach=await this.taoMaHK();
        const hanhKhachRaw=await this.repo.taoHanhKhach(data);
        return hanhKhachRaw? new HanhKhachBO(hanhKhachRaw):null;
    }
    async xoaHanhKhach(maHanhKhach){
        if(maHanhKhach && !(await this.repo.layHanhKhachTheoMaHanhKhach(maHanhKhach))) throw new ValidationError("Không tìm thấy hành khách");
        const hanhKhachRaw=await this.repo.xoaHanhKhach(maHanhKhach);
        return new HanhKhachBO(hanhKhachRaw);
    }
    async taoMaHK(){
        const next_id=await this.repo.laySTTHanhKhachTiepTheo();
        console.log(next_id);
        if(!next_id) throw new ServerError("Không thể tạo mã hành khách");
        return `HK${String(next_id).padStart(3, '0')}`;
    }

}