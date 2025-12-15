import { NotFoundError, ServerError } from "../../core/errors/errors.js";
import { HangVeMapper } from "./hang_ve.mapper.js";

const createHangVeService = (repo) => {
  const layHangVeTheoMaHangVe = async (maHangVe) => {
    const result = await repo.layHangVeTheoMaHangVe(maHangVe);
    if (!result) throw new NotFoundError("Hạng vé không tồn tại");
    return HangVeMapper.toResponse(result);
  };
  const kiemTraHangVeKhongTonTai = async (maHangVe) => {
    const result = await repo.layHangVeTheoMaHangVe(maHangVe);
    if (!result) throw new NotFoundError("Hạng vé không tồn tại");
    return true;
  };

  const layHangVe = async (tx) => {
    const result = await repo.layHangVe(tx);
    return result.map(HangVeMapper.toResponse);
  };

  const taoMaHV = async () => {
    const stt = await repo.laySTTTiepTheo();
    if (!stt) throw new ServerError("Không thể tạo mã hạng vé");
    return `HV${String(stt).padStart(3, '0')}`;
  };

  const taoHangVe = async (data) => {
    data.maHangVe = await taoMaHV();
    const result = await repo.taoHangVe(data);
    return result ? HangVeMapper.toResponse(result) : null;
  };

  return {
    layHangVeTheoMaHangVe,
    layHangVe,
    taoMaHV,
    taoHangVe,
    kiemTraHangVeKhongTonTai
  };
};

export default createHangVeService;
