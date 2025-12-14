import { NotFoundError, ServerError } from "../../core/errors/errors.js";
import { HangVeMapper } from "./hang_ve.mapper.js";

const createHangVeService = (repo) => ({
  layHangVeTheoMaHangVe: async (maHangVe) => {
    const result = await repo.layHangVeTheoMaHangVe(maHangVe);
    if (!result) throw new NotFoundError("Hạng vé không tồn tại");
    return HangVeMapper.toResponse(result);
  },

  layHangVe: async (tx) => {
    const result = await repo.layHangVe(tx);
    return result.map(HangVeMapper.toResponse);
  },

  taoMaHV: async () => {
    const stt = await repo.laySTTTiepTheo();
    if (!stt) throw new ServerError("Không thể tạo mã hạng vé");
    return `HV${String(stt).padStart(3, '0')}`;
  },

  taoHangVe: async (data) => {
    data.maHangVe = await repo.laySTTTiepTheo().then(stt => {
      if (!stt) throw new ServerError("Không thể tạo mã hạng vé");
      return `HV${String(stt).padStart(3, '0')}`;
    });
    const result = await repo.taoHangVe(data);
    return result ? HangVeMapper.toResponse(result) : null;
  }
});

export default createHangVeService;
