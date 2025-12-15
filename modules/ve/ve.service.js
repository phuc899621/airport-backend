// ve.service.js
import { DBError, NotFoundError, ServerError, ValidationError } from "../../core/errors/errors.js";
import { VeMapper } from "./ve.mapper.js";

const createVeService = (veRepo, chuyenBayService, hangVeService,quyDinhService) => {

    const kiemTraVeChuaTonTai = async (maVe) => {
        const result = await veRepo.layVeTheoMaVe(maVe);
        if(!result) throw new NotFoundError("Vé không tồn tại");
        return result;
    }
    const layVe = async () => {
        const result = await veRepo.layVe();
        console.log(result);
        return result.map(VeMapper.toResponse);
    };

    const thanhToanVe = async (maVe) => {
        await kiemTraVeChuaTonTai(maVe);
        const result = await veRepo.thanhToanVe(maVe);
        return result ? VeMapper.toResponse(result) : null;
    };

    const huyVe = async (maVe) => {
        const veRaw= await kiemTraVeChuaTonTai(maVe);
        console.log(veRaw);
        if(veRaw.TrangThai === "da_mua") throw new ValidationError("Vé đã mua, không thể hủy");
        await chuyenBayService.kiemTraChuyenBayDaBay(veRaw.MaCB);
        const result = await veRepo.huyVe(maVe);
        console.log(result);

        return result ? VeMapper.toResponse(result) : null;
    };

    const muaVe = async (data) => {
        const { maChuyenBay, maHangVe } = data;
        await chuyenBayService.kiemTraChuyenBayKhongTonTai(maChuyenBay);
        await hangVeService.kiemTraHangVeKhongTonTai(maHangVe);
        await chuyenBayService.kiemTraHetCho(maChuyenBay, maHangVe);
        await chuyenBayService.kiemTraChuyenBayDaBay(maChuyenBay);

        const giaTienDaTinh= await veRepo.layGiaTienDaTinh(maChuyenBay, maHangVe);
        if(!giaTienDaTinh) throw new DBError("Không lấy được giá tiền");
        console.log(giaTienDaTinh);
        data.giaTien = giaTienDaTinh;
        const maVe = await taoMaVe();
        data.maVe = maVe;

        const result = await veRepo.taoVeMua(data);
        return result ? VeMapper.toResponse(result) : null;
    };

    const datVe = async (data) => {
        const { maChuyenBay, maHangVe } = data;
        const chuyenBay= await chuyenBayService.kiemTraChuyenBayKhongTonTai(maChuyenBay);
        await hangVeService.kiemTraHangVeKhongTonTai(maHangVe);
        await chuyenBayService.kiemTraHetCho(maChuyenBay, maHangVe);
        await chuyenBayService.kiemTraChuyenBayDaBay(maChuyenBay);

        const ngayKhoiHanh=chuyenBay.NgayGio;
        await quyDinhService.kiemTraKhongTheDatVe(ngayKhoiHanh);
        const giaTienDaTinh= await veRepo.layGiaTienDaTinh(maChuyenBay, maHangVe);
        if(!giaTienDaTinh) throw new DBError("Không lấy được giá tiền");

        data.giaTien = giaTienDaTinh;
        const maVe = await taoMaVe();
        data.maVe = maVe;
        const result = await veRepo.taoVeDat(data);
        return result ? VeMapper.toResponse(result) : null;
    };

    const taoMaVe = async () => {
        const next_id = await veRepo.laySTTTiepTheo();
        console.log(next_id);

        if (!next_id)
            throw new ServerError("Không thể tạo mã hành khách");

        return `VB${String(next_id).padStart(3, '0')}`;
    };

    return {
        layVe,
        thanhToanVe,
        huyVe,
        muaVe,
        datVe,
        taoMaVe
    };
};

export default createVeService;
