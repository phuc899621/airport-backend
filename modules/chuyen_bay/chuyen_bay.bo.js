export default class ChuyenBayBO {
    constructor({ MaCB=null,  
        MaSBDi=null, MaSBDen=null, NgayGio=null, 
        ThoiGianBay=null, GiaVe=null, SLGheHang1=null, SLGheHang2=null }={}) {
        this.maChuyenBay = MaCB;
        this.maSanBayDi = MaSBDi;
        this.maSanBayDen = MaSBDen;
        this.ngayGio = NgayGio;
        this.thoiGianBay = ThoiGianBay;
        this.giaVe = parseInt(GiaVe);
        this.slGheHang1 = parseInt(SLGheHang1);
        this.slGheHang2 = parseInt(SLGheHang2);
    }
}