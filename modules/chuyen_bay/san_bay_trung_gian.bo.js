export default class SanBayTrungGianBO {

    constructor({MaSB=null, ThoiGianDung=null,
        ThuTuDung=null,MaCB=null,
        GhiChu=null}) {
        this.maChuyenBay = MaCB;
        this.maSanBay = MaSB;
        this.thoiGianDung = ThoiGianDung;
        this.thuTuDung = ThuTuDung;
        this.ghiChu = GhiChu;
    }
}