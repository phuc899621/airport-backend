import SanBayTrungGianBO from "./san_bay_trung_gian.bo.js";

export default class SanBayTrungGianChiTietBO extends SanBayTrungGianBO {
    constructor({MaSanBay=null, MaChuyenBay=null, TenSanBay=null, 
        QuocGia=null, ThoiGianDung=null,
        ThuTuDung=null,
        GhiChu=null}) {
        super({MaSanBay, MaChuyenBay, TenSanBay, 
            QuocGia, ThoiGianDung,
            ThuTuDung,MaChuyenBay,
            GhiChu});
        this.tenSanBay = TenSanBay;
        this.quocGia = QuocGia;
    }
}