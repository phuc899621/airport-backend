export default class BaoCaoTheoThangBO {
    constructor({MaCB=null, SoVeDaBan=null, DoanhThu=null, TiLeBanVe=null} = {}) {
        this.maChuyenBay = MaCB;
        this.soVeDaBan = SoVeDaBan;
        this.doanhThu = DoanhThu;
        this.tiLeBanVe = TiLeBanVe;
    }
}