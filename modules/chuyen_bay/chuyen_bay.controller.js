import { errorHandler } from '../../core/errors/error_handler.js';

const createChuyenBayController = (chuyenBayService) => ({
    layLichChuyenBay: async (req, res) => {
        try{
            const {maChuyenBay}=req.params;
            const result=await chuyenBayService.layLichChuyenBay(maChuyenBay,req.query);
            res.status(200).json({
                success: true,
                message: "Lấy lịch chuyến bay thành công!",
                data: result
            });
        } catch (err) {
            errorHandler(res, err);
        }
    },
    layLichChuyenBayTheoMaChuyenBay: async (req, res)=> {
        try{
            const {maChuyenBay}=req.params;
            const result=await chuyenBayService.layLichChuyenBayTheoMaChuyenBay(maChuyenBay,req.query);
            res.status(200).json({
                success: true,
                message: "Lấy lịch chuyến bay cụ thể thành công!",
                data: result
            });
        } catch (err) {
            errorHandler(res, err);
        }
    },
    laySanBayTrungGian: async (req, res) => {
        try{
            const {maChuyenBay,maSanBay}=req.params;
            const sanBayTrungGian=await chuyenBayService.laySanBayTrungGian(maChuyenBay,maSanBay);
            res.status(200).json({
                success: true,
                message: "Lấy sân bay trung gian thành công!",
                data: sanBayTrungGian
            }); 
        }catch(err){
            errorHandler(res, err);
        }
    },
    layHangVeChuyenBay: async (req, res) => {
        try{
            const {maChuyenBay}=req.params;
            const hangVeChuyenBay=await chuyenBayService.layHangVeChuyenBayTheoMaChuyenBay(maChuyenBay);
            res.status(200).json({
                success: true,
                message: "Lấy hạng vé chuyến bay thành công!",
                data: hangVeChuyenBay
            }); 
        }catch(err){
            errorHandler(res, err);
        }
    },
    taoSanBayTrungGian: async (req, res) => {
        try{
            const {maChuyenBay}=req.params;
            const sanBayTrungGian=await chuyenBayService.taoSanBayTrungGian({...req.body,maChuyenBay});
            res.status(201).json({
                success: true,
                message: "Tạo sân bay trung gian thành công!",
                data: sanBayTrungGian
            }); 
        }catch(err){
            errorHandler(res, err);
        }
    },
    taoChuyenBay: async (req, res) => {
        try{
            const chuyenBay=await chuyenBayService.taoChuyenBay(req.body);
            res.status(201).json({
                success: true,
                message: "Tạo chuyến bay thành công!",
                data: {}
            }); 
        }catch(err){
            errorHandler(res, err);
        }
    },
    taoHangVeChuyenBay: async (req, res) => {
        try{
            const {maChuyenBay}=req.params;
            const hangVeChuyenBay=await chuyenBayService.taoHangVeChuyenBay({...req.body,maChuyenBay});
            res.status(201).json({
                success: true,
                message: "Tạo hạng vé chuyến bay thành công!",
                data: hangVeChuyenBay
            }); 
        }catch(err){
            errorHandler(res, err);
        }
    }
});

export default createChuyenBayController;