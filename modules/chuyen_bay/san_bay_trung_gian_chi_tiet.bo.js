import SanBayTrungGianBO from "./san_bay_trung_gian.bo.js";

export default class SanBayTrungGianChiTietBO extends SanBayTrungGianBO {
    constructor({MaSB=null, MaCB=null, TenSB=null, 
        QuocGia=null, ThoiGianDung=null,
        ThuTuDung=null,
        GhiChu=null}) {
        super({MaCB, MaSB, TenSB, 
            QuocGia, ThoiGianDung,
            ThuTuDung,
            GhiChu});
        this.tenSanBay = TenSB;
        this.quocGia = QuocGia;
    }
}