export default class SanBayTrungGianBO {
    constructor({MaSanBay=null, ThoiGianDung=null,
        ThuTuDung=null,MaChuyenBay=null,
        GhiChu=null}) {
        this.maChuyenBay = MaChuyenBay;
        this.maSanBay = MaSanBay;
        this.thoiGianDung = ThoiGianDung;
        this.thuTuDung = ThuTuDung;
        this.ghiChu = GhiChu;
    }
}