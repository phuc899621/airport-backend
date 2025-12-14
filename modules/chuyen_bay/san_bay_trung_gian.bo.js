export default class SanBayTrungGianBO {

    constructor({MaSB=null, ThoiGianDung=null,
        ThuTuDung=null,MaCB=null, TenSB=null,
        GhiChu=null}) {
        this.maChuyenBay = MaCB;
        this.maSanBay = MaSB;
        this.tenSanBay = TenSB;
        this.thoiGianDung = parseInt(ThoiGianDung);
        this.thuTuDung = parseInt(ThuTuDung);
        this.ghiChu = GhiChu;
    }
}