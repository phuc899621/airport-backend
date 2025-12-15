import { DBError, NotFoundError, ValidationError } from "../../core/errors/errors.js";
import { QuyDinhMapper } from "./quy_dinh.mapper.js";

const createQuyDinhService = (quyDinhRepo) => {
  const kiemTraQuyDinhTonTai = async (tenQuyDinh) => {
    const result = await quyDinhRepo.layQuyDinhTheoTen(tenQuyDinh);
    if (!result) throw new NotFoundError("Quy định không tồn tại");
    return true;
  };

  const capNhatQuyDinh = async (tenQuyDinh, data, tx) => {
    await kiemTraQuyDinhTonTai(tenQuyDinh);
    const result = await quyDinhRepo.capNhatQuyDinh(tenQuyDinh, data, tx);
    return result ? QuyDinhMapper.toResponse(result) : null;
  };

  const capNhatNhieuQuyDinh = async (dsQuyDinh, tx) => {
    const result = await quyDinhRepo.capNhatNhieuQuyDinh(dsQuyDinh, tx);
    return result.map(QuyDinhMapper.toResponse);
  };

  const layQuyDinh = async (tx) => {
    const result = await quyDinhRepo.layQuyDinh(tx);
    return result.map(QuyDinhMapper.toResponse);
  };

  const layQuyDinhTheoTen = async (tenQuyDinh) => {
    const result = await quyDinhRepo.layQuyDinhTheoTen(tenQuyDinh);
    if (!result) throw new NotFoundError("Quy định không tồn tại");
    return QuyDinhMapper.toResponse(result);
  };
  const kiemTraThoiGianBay = async (thoiGianBay) => {
    const quyDinh = await layQuyDinhTheoTen("ThoiGianBayToiThieu");
    const thoiGianBayToiThieu = quyDinh.giaTri;
    if (!thoiGianBayToiThieu) throw new ValidationError("Không kiểm tra được thời gian bay");
    if (thoiGianBay < thoiGianBayToiThieu)
      throw new ValidationError(`Thời gian bay phải lớn hơn ${thoiGianBayToiThieu} phút`);
  };
  const kiemTraThoiGianDung = async (thoiGianDung) => {
    const thoiGianDungMinObj = await layQuyDinhTheoTen("ThoiGianDungMin");
    console.log(thoiGianDungMinObj);
    const thoiGianDungMin = thoiGianDungMinObj.giaTri;
    const thoiGianDungMaxObj = await layQuyDinhTheoTen("ThoiGianDungMax");
    const thoiGianDungMax = thoiGianDungMaxObj.giaTri;
    if (thoiGianDung && 
      (thoiGianDung < thoiGianDungMin || thoiGianDung > thoiGianDungMax))
        throw new ValidationError(`Thời gian dừng phải thuộc khoảng ${thoiGianDungMin}-${thoiGianDungMax} phút`);
  };
  const kiemTraSanBayTrungGian = async (soSanBayTrungGian) => {
    const soSanBayTrungGianToiDaObj = await layQuyDinhTheoTen("SanBayTrungGianToiDa");
    const soSanBayTrungGianToiDa = soSanBayTrungGianToiDaObj.giaTri;
    if (soSanBayTrungGian >= soSanBayTrungGianToiDa){
      throw new ValidationError(`Số lượng sân bay trung gian đã vượt quá số lượng cho phép là ${soSanBayTrungGianToiDa}`);
    }
  };
  const kiemTraKhongTheDatVe = async (ngayKhoiHanh) => {
    const thoiGianHuyObj = await layQuyDinhTheoTen("ThoiGianHuy");
    if(!thoiGianHuyObj) throw new DBError("Không kiểm tra được thời gian huy");
    const thoiGianHuyPhut = Number(thoiGianHuyObj.giaTri);
    const ngayKhoiHanhUTC = new Date(ngayKhoiHanh);
    console.log(ngayKhoiHanh);
    console.log(ngayKhoiHanhUTC);
    const thoiDiemCamDatVe=new Date(ngayKhoiHanhUTC.getTime()-thoiGianHuyPhut*60*1000);
    const thoiDiemHienTai=new Date(Date.now());
    const thoiGianHuyGio=Math.round((thoiGianHuyPhut / 60) * 10) / 10;
    if(thoiDiemHienTai>=thoiDiemCamDatVe){
      throw new ValidationError(
        `Đã quá thời hạn đặt vé. Vé phải được đặt trước ít nhất ${thoiGianHuyGio} giờ so với giờ khởi hành`);
    }
    return true;
     
  };

  return {
    capNhatQuyDinh,
    capNhatNhieuQuyDinh,
    layQuyDinh,
    layQuyDinhTheoTen,
    kiemTraQuyDinhTonTai,
    kiemTraThoiGianBay,
    kiemTraThoiGianDung,
    kiemTraSanBayTrungGian,
    kiemTraKhongTheDatVe
  };
};

export default createQuyDinhService;
