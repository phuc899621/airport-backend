export default class ChuyenBayBO {
    constructor({ MaCB=null,  
        MaSBDi=null, MaSBDen=null, NgayGio=null, 
        ThoiGianBay=null, GiaVe=null }={}) {
        this.maChuyenBay = MaCB;
        this.maSanBayDi = MaSBDi;
        this.maSanBayDen = MaSBDen;
        this.ngayGio = NgayGio;
        this.thoiGianBay = parseInt(ThoiGianBay);
        this.giaVe = parseInt(GiaVe);
    }
}