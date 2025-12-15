import { ValidationError, NotFoundError, ServerError } from "../../core/errors/errors.js";
import { SanBayMapper } from "./san_bay.mapper.js";

const createSanBayService = (sanBayRepo) => {

  const laySanBay = async (maSanBay, filter) => {
    if (maSanBay) {
      const sanBayRaw = await sanBayRepo.laySanBayTheoMaSanBay(maSanBay);
      return sanBayRaw ? SanBayMapper.toResponse(sanBayRaw) : null;
    }
    const dsSanBay = await sanBayRepo.laySanBay(filter);
    return dsSanBay.filter(s => s).map(SanBayMapper.toResponse);
  };

  const taoMaSB = async () => {
    const next_id = await sanBayRepo.laySTTTiepTheo();
    console.log(next_id);
    if (!next_id) throw new ServerError("Không thể tạo mã sân bay");
    return `SB${String(next_id).padStart(3, '0')}`;
  };
  const taoSanBay = async ({ tenSanBay, quocGia }) => {
    const maSanBay = await taoMaSB();
    const sanBayRaw = await sanBayRepo.taoSanBay({ maSanBay, tenSanBay, quocGia });
    return sanBayRaw ? SanBayMapper.toResponse(sanBayRaw) : null;
  };
  const kiemTraSanBayTonTai = async (maSanBay) => {
    const sanBayRaw = await sanBayRepo.laySanBayTheoMaSanBay(maSanBay);
    if (!sanBayRaw) throw new NotFoundError("Sân bay không tồn tại");
  };

  return {
    taoSanBay,
    laySanBay,
    taoMaSB,
    kiemTraSanBayTonTai
  };
};

export default createSanBayService;
