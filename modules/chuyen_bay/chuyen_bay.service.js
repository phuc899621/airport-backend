import { ConflictError, NotFoundError, ValidationError } from "../../core/errors/errors.js";
import ChuyenBayBO from "./chuyen_bay.bo.js";
import LichChuyenBayBO from "./lich_chuyen_bay.bo.js";
import SanBayTrungGianBO from "./san_bay_trung_gian.bo.js";
import LichSanBayTrungGianBO from "./san_bay_trung_gian.bo.js";
import SanBayTrungGianChiTietBO from "./san_bay_trung_gian_chi_tiet.bo.js";

export default class ChuyenBayService{
    constructor(chuyenBayRepo, sanBayRepo, mayBayRepo,sanBayTrungGianRepo){
        this.repo=chuyenBayRepo;
        this.sanBayRepo=sanBayRepo;
        this.mayBayRepo=mayBayRepo;
        this.sanBayTrungGianRepo=sanBayTrungGianRepo
    }
    async layLichChuyenBay(filter) {
        const result = await this.repo.layLichChuyenBay(filter);
        const lichChuyenBayMap=new Map();   
        console.log(result);
        for(const cb of result){
            const maChuyenBay=cb.MaChuyenBay;
            if(!lichChuyenBayMap.has(maChuyenBay)){
                lichChuyenBayMap.set(maChuyenBay,
                new LichChuyenBayBO(cb));
            }
            if(cb.MaSanBay){
                lichChuyenBayMap.get(maChuyenBay).themSanBayTrungGian(maChuyenBay,new SanBayTrungGianBO(cb));
            }
        }
        console.log(lichChuyenBayMap); 
        return lichChuyenBayMap;
    }
    async taoChuyenBay(data){
        const {maSanBayDi, maSanBayDen, maMayBay}=data;
        const sanBayDiRaw=await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBayDi);
        const sanBayDenRaw=await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBayDen);
        const mayBayRaw=await this.mayBayRepo.layMayBayTheoMaMayBay(maMayBay);
        if(!sanBayDiRaw) throw new NotFoundError("Mã sân bay đi không tồn tại");
        if(!sanBayDenRaw) throw new NotFoundError("Mã sân bay đến không tồn tại");
        if(!mayBayRaw) throw new NotFoundError("Mã máy bay không tồn tại");
        return new ChuyenBayBO(await this.repo.taoChuyenBay(data));
    }
    async layChuyenBay(maChuyenBay){
        if(maChuyenBay) {
            const chuyenBayRaw=await this.repo.layChuyenBayTheoMaChuyenBay(maChuyenBay);
            return chuyenBayRaw? new ChuyenBayBO(chuyenBayRaw):null;
        }
        return null;
    }
    async laySanBayTrungGian(maChuyenBay, maSanBay) {
        if(!(await this.repo.layChuyenBayTheoMaChuyenBay(maChuyenBay))) throw new NotFoundError("Chuyến bay không tồn tại");
        if(maSanBay) {
            const sanBayTrungGianRaw=await this.sanBayTrungGianRepo.laySanBayTrungGian(maChuyenBay,maSanBay);
            return sanBayTrungGianRaw? new SanBayTrungGianChiTietBO(sanBayTrungGianRaw):null;
        }
        const dsSanBayTrungGianRaw=await this.sanBayTrungGianRepo.laySanBayTrungGianTheoMaChuyenBay(maChuyenBay);
        return dsSanBayTrungGianRaw.map(sanBayTrungGianRaw=>new SanBayTrungGianChiTietBO(sanBayTrungGianRaw));
    }
    async taoSanBayTrungGian(maChuyenBay,data){
        if(!(await this.repo.layChuyenBayTheoMaChuyenBay(maChuyenBay))) throw new NotFoundError("Chuyến bay không tồn tại");
        if(!(await this.sanBayRepo.laySanBayTheoMaSanBay(data.maSanBay))) throw new NotFoundError("Sân bay không tồn tại");
        if(data.thoiGianDung&&(data.thoiGianDung<10||data.thoiGianDung>20)) throw new ValidationError("Thời gian dừng chỉ thuộc khoảng 10-20 phút");
        const sanBayTrungGianHienTai=await this.sanBayTrungGianRepo.laySanBayTrungGianTheoMaChuyenBay(maChuyenBay);
        if(sanBayTrungGianHienTai.length>=2) throw new ValidationError("Số lượng sân bay trung gian đã đặt tối đa");
        if(sanBayTrungGianHienTai.length==1&&(sanBayTrungGianHienTai[0].maSanBay==data.maSanBay)) throw new ConflictError("Chuyến bay không thể có 2 sân bay trung gian giống nhau");
        return new SanBayTrungGianBO(await this.sanBayTrungGianRepo.taoSanBayTrungGian(maChuyenBay,data));
    }
    async capNhatSanBayTrungGian(maChuyenBay,maSanBay,update){
        if(update.thoiGianDung&&(update.thoiGianDung<10||update.thoiGianDung>20)) throw new ValidationError("Thời gian dừng chỉ thuộc khoảng 10-20 phút");
        const fieldMap={
            thoiGianDung:"ThoiGianDung",
            ghiChu:"GhiChu"
        }
        const data={};
        if(maChuyenBay&&!(await this.repo.layChuyenBayTheoMaChuyenBay(maChuyenBay))) {
            throw new NotFoundError("Chuyến bay không tồn tại");
        }
        if(maSanBay&&!(await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBay))) {
            throw new NotFoundError("Sân bay không tồn tại");
        }
        for (const [key,column] of Object.entries(fieldMap)) {
            if (update[key] !== undefined) {
                console.log("capnhat:",key,column,update[key]);
                data[column]=update[key];
            }
        }
        if(Object.keys(data).length===0) throw new ValidationError("Vui lòng gửi trường để cập nhật");
        return new SanBayTrungGianBO(await this.sanBayTrungGianRepo.capNhatSanBayTrungGian(maChuyenBay,maSanBay, data));
    }



    async capNhatChuyenBay(maChuyenBay, update={}){
        const {maSanBayDi, maSanBayDen, maMayBay, ngayGio, maHienThi }=update;
        const fieldMap={
            maSanBayDi:'MaSanBayDi',
            maSanBayDen:'MaSanBayDen',
            maMayBay:'MaMayBay',
            ngayGio:'NgayGio',
            maHienThi:'MaHienThi',
            giaVe:'GiaVe',
            thoiGianBay:'ThoiGianBay'
        }
        const data={};
        if(maSanBayDi&&!(await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBayDi))) {
            throw new NotFoundError("Sân bay đi không tồn tại");
        }
        if(maSanBayDen&&!(await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBayDen))) {
            throw new NotFoundError("Sân bay đến không tồn tại");
        }
        if(maMayBay&&!(await this.mayBayRepo.layMayBayTheoMaMayBay(maMayBay))) {
            throw new NotFoundError("Mã máy bay không tồn tại");
        }
        for (const [key,column] of Object.entries(fieldMap)) {
            if (update[key] !== undefined) {
                console.log("capnhat:",key,column,update[key]);
                data[column]=update[key];
            }
        }
        if(Object.keys(data).length===0) throw new ValidationError("Vui lòng gửi trường để update");
        return new ChuyenBayBO(await this.repo.capNhatChuyenBay(maChuyenBay, data));
    }
    async xoaChuyenBay(maChuyenBay){
        return new ChuyenBayBO(await this.repo.xoaChuyenBay(maChuyenBay));
    }
    async xoaSanBayTrungGian(maChuyenBay,maSanBay){
        if(!(await this.sanBayTrungGianRepo.laySanBayTrungGian(maChuyenBay,maSanBay))) throw new NotFoundError("Sân bay trung gian không tồn tại");
        this.sanBayTrungGianRepo.xoaSanBayTrungGian(maChuyenBay,maSanBay);
    }
}