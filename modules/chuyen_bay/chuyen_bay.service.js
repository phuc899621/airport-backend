import { ConflictError, NotFoundError, ServerError, ValidationError } from "../../core/errors/errors.js";
import { ChuyenBayMapper } from "./chuyen_bay.mapper.js";
const createChuyenBayService = (
  chuyenBayRepo,
  sanBayTrungGianRepo,
  hangVeChuyenBayRepo,
  sanBayService,
  hangVeService,
  quyDinhService,
  db
) => {
    const kiemTraChuyenBayKhongTonTai = async (maChuyenBay) => {
        const result=await chuyenBayRepo.layChuyenBayTheoMaChuyenBay(maChuyenBay);
        if (!result){
            throw new NotFoundError("Chuyến bay không tồn tại");
        }
        return result;
    }
    const kiemTraChuyenBayDaBay= async (maChuyenBay) => {
        const result = await chuyenBayRepo.layChuyenBayTheoMaChuyenBay(maChuyenBay);
        const thoiGianKhoiHanh=new Date(result.NgayGio);
        console.log(thoiGianKhoiHanh);
        const thoiGianHienTai=new Date(Date.now());
        console.log(thoiGianHienTai);
        if(thoiGianKhoiHanh<=thoiGianHienTai){
            throw new ValidationError("Chuyến bay đã bay hoặc đã kết thúc, không thể mua hoặc hủy vé");
        }
    }
    const kiemTraSanBayTrungGianDaTonTai = async (maChuyenBay, maSanBay) => {
        if (await sanBayTrungGianRepo.laySanBayTrungGian(maChuyenBay, maSanBay)){
            throw new ValidationError("Sân bay trung gian đã tồn tại");
        }
        return true;
    }
    const kiemTraHetCho = async (maChuyenBay, maHangVe) => {
        const soGheConLai = await chuyenBayRepo.laySoGheConLai(maChuyenBay, maHangVe);
        if(soGheConLai === 0) throw new ValidationError(`Hạng vé ${maHangVe} của chuyến bay ${maChuyenBay} đã hết chỗ`);
    }
    const kiemTraHangVeChuyenBayDaTonTai = async (maChuyenBay, maHangVe) => {
        if (await hangVeChuyenBayRepo.layHangVeChuyenBay(maChuyenBay, maHangVe)){
            throw new ValidationError("Hạng vé chuyến bay đã tồn tại");
        }
        return true;
    }
    const layLichChuyenBay = async (maChuyenBay, filter) => {
        const result = await chuyenBayRepo.layLichChuyenBay(maChuyenBay, filter);
        return ChuyenBayMapper.toLichChuyenBayList(result, maChuyenBay);
    };

    const layLichChuyenBayTheoMaChuyenBay = async (maChuyenBay) => {
        const result = await chuyenBayRepo.layLichChuyenBayTheoMaChuyenBay(maChuyenBay);
        console.log(result);
        const lichChuyenBayMap = ChuyenBayMapper.toLichChiTietMap(result);
        if (maChuyenBay) {
            const lichChuyenBay= lichChuyenBayMap.get(maChuyenBay);
            if (!lichChuyenBay){
                throw new NotFoundError("Lịch chuyến bay không tồn tại");
            }
        }
        return ChuyenBayMapper.toArray(lichChuyenBayMap);
    };

    const taoChuyenBay = async (data) => {
        await db.begin(async (tx) => {
            const { maSanBayDi, maSanBayDen, 
                thoiGianBay, giaVeCoBan, sanBayTrungGians, hangVes } = data;
            await sanBayService.kiemTraSanBayTonTai(maSanBayDi);
            await sanBayService.kiemTraSanBayTonTai(maSanBayDen);
            await quyDinhService.kiemTraThoiGianBay(thoiGianBay);

            data.maChuyenBay = await taoMaCB();
            const result = await chuyenBayRepo.taoChuyenBay(data, tx);
            if(!result||!result.MaCB){
                throw new ServerError("Tạo chuyến bay thất bại");
            }
            const maChuyenBay= result.MaCB;
            if(sanBayTrungGians&&sanBayTrungGians.length>0){
                for(const sbtg of sanBayTrungGians){
                    await sanBayService.kiemTraSanBayTonTai(sbtg.maSanBay);
                    await quyDinhService.kiemTraThoiGianDung(sbtg.thoiGianDung);
                }
                await sanBayTrungGianRepo.taoNhieuSanBayTrungGian({maChuyenBay,sanBayTrungGians },tx)
            }
            for(const hv of hangVes){
                await hangVeService.kiemTraHangVeKhongTonTai(hv.maHangVe);
                await kiemTraHangVeChuyenBayDaTonTai(maChuyenBay, hv.maHangVe);
            }
            await hangVeChuyenBayRepo.taoNhieuHangVeChuyenBay({maChuyenBay,hangVes },tx);
            
        });
    };
    

    const taoMaCB = async () => {
        const next_id = await chuyenBayRepo.laySTTTiepTheo();
        if (!next_id) throw new ServerError("Không thể tạo mã chuyển bay");
        return `CB${String(next_id).padStart(3, "0")}`;
    };
    const laySanBayTrungGian = async (maChuyenBay, maSanBay) => {
        await kiemTraChuyenBayKhongTonTai(maChuyenBay);

        if (maSanBay) {
            const sbRaw = await sanBayTrungGianRepo.laySanBayTrungGian(maChuyenBay, maSanBay);
            if(!sbRaw) throw new NotFoundError("Sân bay trung gian không tồn tại");
            return ChuyenBayMapper.toSanbayTrungGianChiTietResponse(sbRaw);
        }
        const dsRaw = await sanBayTrungGianRepo.laySanBayTrungGianTheoMaChuyenBay(maChuyenBay);
        return dsRaw.map(ChuyenBayMapper.toSanbayTrungGianChiTietResponse);
    };0


    const taoSanBayTrungGian = async (data) => {
        const { maChuyenBay, maSanBay, thoiGianDung } = data;

        await kiemTraChuyenBayKhongTonTai(maChuyenBay);
        await sanBayService.kiemTraSanBayTonTai(maSanBay);
        await kiemTraSanBayTrungGianDaTonTai(maChuyenBay, maSanBay);
        await quyDinhService.kiemTraThoiGianDung(thoiGianDung);

        const sanBayTrungGianHienTai = await sanBayTrungGianRepo.laySanBayTrungGianTheoMaChuyenBay(maChuyenBay);
        await quyDinhService.kiemTraSanBayTrungGian(sanBayTrungGianHienTai.length);

        const result = await sanBayTrungGianRepo.taoSanBayTrungGian(data);
        return result ? ChuyenBayMapper.toSanBayTrungGianResponse(result) : null;
    };
    const layHangVeChuyenBayTheoMaChuyenBay = async (maChuyenBay) => {
        await kiemTraChuyenBayKhongTonTai(maChuyenBay);
        const result = await hangVeChuyenBayRepo.layHangVeChuyenBayTheoMaChuyenBay(maChuyenBay);
        return result.map(ChuyenBayMapper.toHangVeChuyenBayResponse);
    }
    const taoHangVeChuyenBay = async (data) => {
        const { maChuyenBay, maHangVe } = data;
        await kiemTraChuyenBayKhongTonTai(maChuyenBay);
        await hangVeService.kiemTraHangVeKhongTonTai(maHangVe);
        await kiemTraHangVeChuyenBayDaTonTai(maChuyenBay, maHangVe);
        const result = await hangVeChuyenBayRepo.taoHangVeChuyenBay(data);
        return result ? ChuyenBayMapper.toHangVeChuyenBayResponse(result) : null;
    };

  return {
    kiemTraChuyenBayKhongTonTai,
    layLichChuyenBay,
    layLichChuyenBayTheoMaChuyenBay,
    layHangVeChuyenBayTheoMaChuyenBay,
    taoChuyenBay,
    taoMaCB,
    laySanBayTrungGian,
    taoSanBayTrungGian,
    taoHangVeChuyenBay,
    kiemTraHetCho,
    kiemTraChuyenBayDaBay
  };
};

export default createChuyenBayService;
