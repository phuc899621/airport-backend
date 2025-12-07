export default class HanhKhachBO{
    constructor({MaHanhKhach, HoTen, CMND, DienThoai, Email}={}){
        this.maHanhKhach = MaHanhKhach;
        this.hoTen = HoTen;
        this.cmnd = CMND;
        this.dienThoai = DienThoai;
        this.email = Email;
    }
}