import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import ChuyenBayBO from "./chuyen_bay.bo.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export default class LichChuyenBayBO extends ChuyenBayBO{
    constructor({
        MaCB=null,
        MaSBDi=null,
        MaSBDen=null,
        ThoiGianBay=null,
        SLGheHang1=null,
        SLGheHang2=null,
        GiaVe=null,
        NgayGio=null,
        QuocGiaSBDi=null,
        QuocGiaSBDen=null,
        TenSBDi=null,
        TenSBDen=null,
        SLGheHang1ConLai=null,
        SLGheHang2ConLai=null,
        GiaVeHang1=null,
        GiaVeHang2=null,
        SanBayTrungGian=[]
    }){
        super({MaCB, MaSBDi, MaSBDen, NgayGio, ThoiGianBay, GiaVe, SLGheHang1, SLGheHang2});
        const thoiGianDi=dayjs(NgayGio);
        const thoiGianDen=thoiGianDi.add(ThoiGianBay,'m');
        this.thoiGianBay=parseInt(ThoiGianBay);
        this.quocGiaSanBayDi=QuocGiaSBDi;
        this.quocGiaSanBayDen=QuocGiaSBDen;
        this.tenSanBayDi=TenSBDi;
        this.tenSanBayDen=TenSBDen;
        this.thoiGianDi=thoiGianDi.toISOString();
        this.thoiGianDen=thoiGianDen.toISOString();
        this.slGheHang1ConLai=parseInt(SLGheHang1ConLai);
        this.slGheHang2ConLai=parseInt(SLGheHang2ConLai);
        this.giaVeHang1=GiaVeHang1;
        this.giaVeHang2=GiaVeHang2;
        this.sanBayTrungGian=SanBayTrungGian;
    }
    themSanBayTrungGian(maChuyenBay,sanBayTrungGian){
        if(!maChuyenBay||maChuyenBay!==this.maChuyenBay) return;
        const thoiGianDi=dayjs(this.thoiGianDi);
        const thoiGianDen=thoiGianDi.add(sanBayTrungGian.thoiGianDung,'m');
        this.thoiGianDen=thoiGianDen;
        this.sanBayTrungGian.push(sanBayTrungGian);
    }
}