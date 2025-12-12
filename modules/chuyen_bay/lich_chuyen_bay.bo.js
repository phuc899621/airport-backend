import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import ChuyenBayBO from "./chuyen_bay.bo.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export default class LichChuyenBayBO{
    constructor({
        MaCB=null,
        MaSBDi=null,
        MaSBDen=null,
        TenSBDi=null,
        TenSBDen=null,
        ThoiGianBay=null,
        GiaVeCoBan=null,
        NgayGio=null,
        TongSoGhe=null,
        TongSoGheDaDat=null,
        TongSoGheConLai=null,

    }){
        this.maChuyenBay=MaCB,
        this.maSanBayDi=MaSBDi,
        this.maSanBayDen=MaSBDen,
        this.tenSanBayDi=TenSBDi,
        this.tenSanBayDen=TenSBDen,
        this.thoiGianBay=ThoiGianBay,
        this.giaVeCoBan=GiaVeCoBan,
        this.ngayGio=NgayGio,
        this.tongSoGhe=TongSoGhe,
        this.tongSoGheDaDat=TongSoGheDaDat,
        this.tongSoGheConLai=TongSoGheConLai
    }
}