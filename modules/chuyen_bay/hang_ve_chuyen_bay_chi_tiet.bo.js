import HangVeChuyenBayBO from "./hang_ve_chuyen_bay.bo.js";
export default class HangVeChuyenBayChiTietBO extends HangVeChuyenBayBO{
    constructor({MaHV=null, TenHV=null, TongSoGhe=null,GiaVeTheoHang=null, SoGheConLai=null, HeSoGia=null}={}){
        super({MaHV, TenHV, TongSoGhe, HeSoGia});
        this.giaVeTheoHang = parseInt(GiaVeTheoHang);
        this.soGheConLai=parseInt(SoGheConLai);
    }
}