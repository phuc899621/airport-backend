export default class VeBO {
    constructor({ MaVe=null, MaCB=null, TenHV=null, GiaTien=null, TrangThai=null, MaHK=null, CMND=null, DienThoai=null, NgayVe=null } = {}) {
        this.maVe=MaVe;
        this.maChuyenBay=MaCB;
        this.tenHangVe=TenHV;
        this.giaTien=GiaTien;
        this.trangThai=TrangThai;
        this.maHanhKhach=MaHK;
        this.cmnd=CMND;
        this.dienThoai=DienThoai;
        this.ngayVe=NgayVe;
    }
}