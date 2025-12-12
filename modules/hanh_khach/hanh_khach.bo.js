export default class HanhKhachBO{
    constructor({MaHK, HoTen, CMND, DienThoai,Email}={}){
        this.maHanhKhach = MaHK;
        this.hoTen = HoTen;
        this.cmnd = CMND;
        this.dienThoai = DienThoai;
        this.email=Email;
    }
}