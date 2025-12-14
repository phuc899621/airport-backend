import { NotFoundError, ServerError } from "../../core/errors/errors.js";

export class VeService {
    constructor(veRepo, chuyenBayService, hangVeRepo) {
        this.repo = veRepo;
        this.chuyenBayService = chuyenBayService;
        this.hangVeRepo = hangVeRepo;
    }

    async muaVe(data) {
        const { maChuyenBay } = data;
        console.log(maChuyenBay);
        const chuyenBay = await this.chuyenBayService.layLichChuyenBayTheoMaChuyenBay(maChuyenBay);
        if (!chuyenBay) throw new NotFoundError("Không tìm thấy chuyen bay");
        console.log(chuyenBay);
        const dsHangVe=chuyenBay.hangVeChuyenBay || [];
        if(dsHangVe.length===0) throw new NotFoundError("Không tìm thấy hạng vé");
        const hv=dsHangVe.find(hv=>hv.maHangVe===data.maHangVe);
        const giaVe=chuyenBay.giaVeCoBan*hv.heSoGia;
        console.log(hv);
        console.log(giaVe);
        data.giaTien=giaVe;
        const maVe=await this.taoMaVe();
        data.maVe=maVe;
        const result = await this.repo.taoVeMua(data);
        return result;
    }
    async taoMaVe(){
        const next_id= await this.repo.laySTTVeTiepTheo();
        console.log(next_id);
        if(!next_id) throw new ServerError("Không thể tạo mã hành khách");
        return `VB${String(next_id).padStart(3, '0')}`;
    }
}