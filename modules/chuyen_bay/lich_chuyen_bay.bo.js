import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export default class LichChuyenBayBO{
    constructor({
        MaChuyenBay=null,
        MaSanBayDi=null,
        MaSanBayDen=null,
        QuocGiaSanBayDi=null,
        QuocGiaSanBayDen=null,
        TenSanBayDi=null,
        TenSanBayDen=null,
        MaMayBay=null,
        LoaiMayBay=null,
        ThoiGianBay=null,
        SLGheHang1=null,
        SLGheHang2=null,
        SLGheHang1ConLai=null,
        SLGheHang2ConLai=null,
        NgayGio=null,
        MaHienThi=null,
        GiaVe=null,
        GiaVeHang1=null,
        GiaVeHang2=null,
        SanBayTrungGian=[]
    }){
        const thoiGianDi=dayjs(NgayGio);
        const thoiGianDen=thoiGianDi.add(ThoiGianBay,'m');
        this.maChuyenBay=MaChuyenBay;
        this.maSanBayDi=MaSanBayDi;
        this.maSanBayDen=MaSanBayDen;
        this.thoiGianBay=ThoiGianBay;
        this.quocGiaSanBayDi=QuocGiaSanBayDi;
        this.quocGiaSanBayDen=QuocGiaSanBayDen;
        this.tenSanBayDi=TenSanBayDi;
        this.tenSanBayDen=TenSanBayDen;
        this.maMayBay=MaMayBay;
        this.loaiMayBay=LoaiMayBay;
        this.thoiGianDi=thoiGianDi.toISOString();
        this.thoiGianDen=thoiGianDen.toISOString();
        this.slGheHang1=SLGheHang1;
        this.slGheHang2=SLGheHang2;
        this.slGheHang1ConLai=SLGheHang1ConLai;
        this.slGheHang2ConLai=SLGheHang2ConLai;
        this.ngayGio=NgayGio;
        this.maHienThi=MaHienThi;
        this.giaVe=GiaVe;
        this.giaVeHang1=GiaVeHang1;
        this.giaVeHang2=GiaVeHang2;
        this.sanBayTrungGian=SanBayTrungGian;
    }
    themSanBayTrungGian(maChuyenBay,sanBayTrungGian){
        if(!maChuyenBay||maChuyenBay!==this.maChuyenBay) return;
        this.sanBayTrungGian.push(sanBayTrungGian);
    }
}