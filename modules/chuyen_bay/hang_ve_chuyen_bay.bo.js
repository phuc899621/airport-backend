export default class HangVeChuyenBayBO{
    constructor({MaHV=null, TenHV=null, TongSoGhe=null, HeSoGia=null}={}){
        this.maHangVe = MaHV;
        this.tenHangVe = TenHV;
        this.heSoGia = parseFloat(HeSoGia);
        this.tongSoGhe=parseInt(TongSoGhe);
    }
}