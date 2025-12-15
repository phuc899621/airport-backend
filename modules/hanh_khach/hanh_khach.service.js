import { ConflictError, NotFoundError, ServerError, ValidationError } from "../../core/errors/errors.js";
import { HanhKhachMapper } from "./hanh_khach.mapper.js";

const createHanhKhachService = (hanhKhachRepo) => {
    const kiemTraCMND = async (cmnd) => {
        const hanhKhachs=await hanhKhachRepo.layHanhKhach({cmnd});
        if(hanhKhachs && hanhKhachs.length>0) throw new ConflictError("CMND đã tồn tại");
        return true;
    }
    const kiemTraEmail = async (email) => {
        const hanhKhachs=await hanhKhachRepo.layHanhKhach({email});
        if(hanhKhachs && hanhKhachs.length>0) throw new ConflictError("Email đã tồn tại");
        return true;
    }
    const layHanhKhach = async (maHanhKhach, filter) => {
        if (maHanhKhach) {
            const hanhKhachRaw = await hanhKhachRepo.layHanhKhachTheoMaHanhKhach(maHanhKhach);
            if (!hanhKhachRaw) throw new NotFoundError("Không tìm thấy hành khách");
            return HanhKhachMapper.toResponse(hanhKhachRaw);
        }
        const dsHanhKhachRaw = await hanhKhachRepo.layHanhKhach(filter);
        return dsHanhKhachRaw.map(HanhKhachMapper.toResponse);
    };
  

  const taoMaHK = async () => {
    const next_id = await hanhKhachRepo.laySTTTiepTheo();
    console.log(next_id);
    if (!next_id) throw new ServerError("Không thể tạo mã hành khách");
    return `HK${String(next_id).padStart(3, '0')}`;
  };

  const taoHanhKhach = async (data) => {
    await kiemTraCMND(data.cmnd);
    await kiemTraEmail(data.email);
    data.maHanhKhach = await taoMaHK();
    const hanhKhachRaw = await hanhKhachRepo.taoHanhKhach(data);
    return hanhKhachRaw ? HanhKhachMapper.toResponse(hanhKhachRaw) : null;
  };
  

  return {
    layHanhKhach,
    taoHanhKhach,
    taoMaHK,
  };
};

export default createHanhKhachService;
