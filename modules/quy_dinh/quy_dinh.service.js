import { NotFoundError } from "../../core/errors/errors.js";
import QuyDinhBO from "./quy_dinh.bo.js";
import { QuyDinhMapper } from "./quy_dinh.mapper.js";

const createQuyDinhService = (quyDinhRepo) => ({
  capNhatQuyDinh: async (tenQuyDinh, data, tx) => {
    await this.kiemTraQuyDinhTonTai(tenQuyDinh);

    const result = await quyDinhRepo.capNhatQuyDinh(tenQuyDinh, data, tx);
    return result ? QuyDinhMapper.toResponse(result) : null;
  },

  capNhatNhieuQuyDinh: async (dsQuyDinh, tx) => {
    const result = await quyDinhRepo.capNhatNhieuQuyDinh(dsQuyDinh, tx);
    return result.map(QuyDinhMapper.toResponse);
  },

  layQuyDinh: async (tx) => {
    const result = await quyDinhRepo.layQuyDinh(tx);
    return result.map(QuyDinhMapper.toResponse);
  },

  layQuyDinhTheoTen: async (tenQuyDinh) => {
    const result = await quyDinhRepo.layQuyDinhTheoTen(tenQuyDinh);
    if (!result) throw new NotFoundError("Quy định không tồn tại");
    return QuyDinhMapper.toResponse(result);
  },
  kiemTraQuyDinhTonTai: async (tenQuyDinh) => {
    const result = await quyDinhRepo.layQuyDinhTheoTen(tenQuyDinh);
    if (!result) throw new NotFoundError("Quy định không tồn tại");
    return true;
  }
});

export default createQuyDinhService;
