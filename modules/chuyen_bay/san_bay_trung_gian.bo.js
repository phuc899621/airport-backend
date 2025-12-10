export default class SanBayTrungGianBO {

    constructor({MaSB=null, ThoiGianDung=null,
        ThuTuDung=null,MaCB=null,
        GhiChu=null}) {
        this.maChuyenBay = MaCB;
        this.maSanBay = MaSB;
        this.thoiGianDung = parseInt(ThoiGianDung);
        this.thuTuDung = parseInt(ThuTuDung);
        this.ghiChu = GhiChu;
    }
}