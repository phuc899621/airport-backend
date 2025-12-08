export default class SanBayBO{
    constructor({ MaSB=null, TenSB=null, QuocGia=null }={}) {
        this.maSanBay = MaSB;
        this.tenSanBay = TenSB;
        this.quocGia = QuocGia;
    }
}