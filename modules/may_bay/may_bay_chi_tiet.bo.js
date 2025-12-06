import MayBayBO from "./may_bay.bo.js";

export default class MayBayChiTietBO extends MayBayBO{
    constructor({ TenMayBay=null, QuocGia=null, ...rest }={}) {
        super(rest);
        this.tenMayBay = TenMayBay;
        this.quocGia = QuocGia;
    }
}