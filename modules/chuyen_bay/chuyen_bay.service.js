import { ConflictError, NotFoundError, ValidationError } from "../../core/errors/errors.js";
import ChuyenBayBO from "./chuyen_bay.bo.js";
import LichChuyenBayBO from "./lich_chuyen_bay.bo.js";
import SanBayTrungGianBO from "./san_bay_trung_gian.bo.js";
import LichSanBayTrungGianBO from "./san_bay_trung_gian.bo.js";
import SanBayTrungGianChiTietBO from "./san_bay_trung_gian_chi_tiet.bo.js";

export default class ChuyenBayService{
    constructor(chuyenBayRepo, sanBayRepo,sanBayTrungGianRepo){
        this.repo=chuyenBayRepo;
        this.sanBayRepo=sanBayRepo;
        this.sanBayTrungGianRepo=sanBayTrungGianRepo
    }
    async layLichChuyenBay(filter) {
        const result = await this.repo.layLichChuyenBay(filter);
        const lichChuyenBayMap=new Map();   
        console.log(result);
        for(const cb of result){
            const maChuyenBay=cb.MaCB;
            if(!lichChuyenBayMap.has(maChuyenBay)){
                lichChuyenBayMap.set(maChuyenBay,
                new LichChuyenBayBO(cb));
            }
            if(cb.MaSB){
                lichChuyenBayMap.get(maChuyenBay).themSanBayTrungGian(maChuyenBay,new SanBayTrungGianBO(cb));
            }
        }
        console.log(lichChuyenBayMap); 
        return lichChuyenBayMap;
    }
    async taoChuyenBay(data){
        const {maSanBayDi, maSanBayDen,thoiGianBay}=data;
        const sanBayDiRaw=await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBayDi);
        const sanBayDenRaw=await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBayDen);
        if(!sanBayDiRaw) throw new NotFoundError("Mã sân bay đi không tồn tại");
        if(!sanBayDenRaw) throw new NotFoundError("Mã sân bay đến không tồn tại");
        const thoiGianBayToiThieu = await this.repo.layThoiGianBayToiThieu();
        if(!thoiGianBayToiThieu) throw new ValidationError("Không kiểm tra được thời gian bay");
        if(thoiGianBay<thoiGianBayToiThieu) throw new ValidationError(`Thời gian bay phải lớn hơn ${thoiGianBayToiThieu} phút`);
        const result=  await this.repo.taoChuyenBay(data);
        return result? new ChuyenBayBO(result):null;
    }
    async layChuyenBay(maChuyenBay){
        if(maChuyenBay) {
            const chuyenBayRaw=await this.repo.layLichChuyenBayTheoMaChuyenBay(maChuyenBay);
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
    async taoSanBayTrungGian(data){
        const {maChuyenBay, maSanBay}=data;
        //Kiem tra maChuyenBay, maSanBay hop le
        if(!(await this.repo.layChuyenBayTheoMaChuyenBay(maChuyenBay))) throw new NotFoundError("Chuyến bay không tồn tại");
        if(!(await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBay))) throw new NotFoundError("Sân bay không tồn tại");
        if(await this.sanBayTrungGianRepo.laySanBayTrungGian(maChuyenBay,maSanBay)) throw new ValidationError("Sân bay trung gian đã tồn tại");
        //Kiem tra thoi gian dung va san bay toi da
        const tgdMin=await this.sanBayTrungGianRepo.layThoiGianDungToiThieu();
        const tgdMax=await this.sanBayTrungGianRepo.layThoiGianDungToiDa();
        if(!tgdMin||!tgdMax) throw new ValidationError("Không kiểm tra được thời gian dừng");
        if(data.thoiGianDung&&(data.thoiGianDung<tgdMin||data.thoiGianDung>tgdMax)) throw new ValidationError("Thời gian dừng chỉ thuộc khoảng 10-20 phút");
        const soLuongSBTGToiDa=await this.sanBayTrungGianRepo.laySanBayTrungGianToiDa();
        if(!soLuongSBTGToiDa) throw new ValidationError("Không kiểm tra được số lượng sân bay trung gian");
        const sanBayTrungGianHienTai=await this.sanBayTrungGianRepo.laySanBayTrungGianTheoMaChuyenBay(maChuyenBay);
        if(sanBayTrungGianHienTai.length>=soLuongSBTGToiDa) throw new ValidationError("Số lượng sân bay trung gian đã đặt tối đa");
        if(sanBayTrungGianHienTai.length==1&&(sanBayTrungGianHienTai[0].maSanBay==maSanBay)) throw new ConflictError("Chuyến bay không thể có 2 sân bay trung gian giống nhau");
        const result=  await this.sanBayTrungGianRepo.taoSanBayTrungGian(data);
        return result? new SanBayTrungGianBO(result):null;
    }
    async capNhatSanBayTrungGian(maChuyenBay,maSanBay,update){
         //Kiem tra thoi gian dung va san bay toi da
        const tgdMin=await this.sanBayTrungGianRepo.layThoiGianDungToiThieu();
        const tgdMax=await this.sanBayTrungGianRepo.layThoiGianDungToiDa();
        if(!tgdMin||!tgdMax) throw new ValidationError("Không kiểm tra được thời gian dừng");
        if(update.thoiGianDung&&(update.thoiGianDung<tgdMin||update.thoiGianDung>tgdMax)) throw new ValidationError("Thời gian dừng chỉ thuộc khoảng 10-20 phút");
        const fieldMap={
            thoiGianDung:"ThoiGianDung",
            ghiChu:"GhiChu"
        }
        const data={};
        if(maChuyenBay&&maSanBay&&!(await this.sanBayTrungGianRepo.laySanBayTrungGian(maChuyenBay,maSanBay))) {
            throw new NotFoundError("Sân bay trung gian không tồn tại");
        }
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
        const {maSanBayDi, maSanBayDen, ngayGio, giaVe, thoiGianBay, slGheHang1, slGheHang2 }=update;
        const fieldMap={
            maSanBayDi:'MaSBDi',
            maSanBayDen:'MaSBDen',
            ngayGio:'NgayGio',
            giaVe:'GiaVe',
            thoiGianBay:'ThoiGianBay',
            slGheHang1:'SLGheHang1',
            slGheHang2:'SLGheHang2'
        }
        const data={};
        if(maChuyenBay&&!(await this.repo.layChuyenBayTheoMaChuyenBay(maChuyenBay))) {
            throw new NotFoundError("Chuyến bay không tồn tại");
        }
        if(maSanBayDi&&!(await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBayDi))) {
            throw new NotFoundError("Sân bay đi không tồn tại");
        }
        if(maSanBayDen&&!(await this.sanBayRepo.laySanBayTheoMaSanBay(maSanBayDen))) {
            throw new NotFoundError("Sân bay đến không tồn tại");
        }
        const thoiGianBayToiThieu = await this.repo.layThoiGianBayToiThieu();
        if(!thoiGianBayToiThieu) throw new ValidationError("Không kiểm tra được thời gian bay");
        if(thoiGianBay&&thoiGianBay<thoiGianBayToiThieu) throw new ValidationError(`Thời gian bay phải lớn hơn ${thoiGianBayToiThieu} phút`);
        for (const [key,column] of Object.entries(fieldMap)) {
            if (update[key] !== undefined) {
                console.log("capnhat:",key,column,update[key]);
                data[column]=update[key];
            }
        }
        if(Object.keys(data).length===0) throw new ValidationError("Vui lòng gửi trường để update");
        const result= await this.repo.capNhatChuyenBay(maChuyenBay, data);
        return result? new ChuyenBayBO(result):null;
    }
    async xoaChuyenBay(maChuyenBay){
        if(!(await this.repo.layChuyenBayTheoMaChuyenBay(maChuyenBay))) throw new NotFoundError("Chuyến bay không tồn tại");
        await this.repo.xoaChuyenBay(maChuyenBay);
    }
    async xoaSanBayTrungGian(maChuyenBay,maSanBay){
        if(!(await this.sanBayTrungGianRepo.laySanBayTrungGian(maChuyenBay,maSanBay))) throw new NotFoundError("Sân bay trung gian không tồn tại");
        this.sanBayTrungGianRepo.xoaSanBayTrungGian(maChuyenBay,maSanBay);
    }
}