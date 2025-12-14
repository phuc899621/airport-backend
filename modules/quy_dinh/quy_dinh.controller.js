import db from "../../core/config/db.js";
import QuyDinhRepo from "./quy_dinh.repo.js";
import QuyDinhService from "./quy_dinh.service.js";
import {errorHandler} from "../../core/errors/error_handler.js";
const quyDinhService = new QuyDinhService(new QuyDinhRepo(db));
export const capNhatQuyDinh = async (req, res, next) => {
    try {
        const {tenQuyDinh}=req.params;
        const quyDinh=await quyDinhService.capNhatQuyDinh(tenQuyDinh,req.body,db.tx);
        res.status(200).json({
            success: true,
            message: "Cập nhật quy định thành công!",
            data: quyDinh
        }); 
    } catch (err) {
        errorHandler(res, err);
    }
}
export const capNhatNhieuQuyDinh = async (req, res, next) => {
    try {
        const quyDinh=await quyDinhService.capNhatNhieuQuyDinh(req.body.quyDinhs);
        res.status(200).json({
            success: true,
            message: "Cập nhật quy định thành công!",
            data: quyDinh
        }); 
    } catch (err) {
        errorHandler(res, err);
    }
}
export const layQuyDinh = async (req, res, next) => {
    try {
        const quyDinh=await quyDinhService.layQuyDinh(db.tx);
        res.status(200).json({
            success: true,
            message: "Lấy quy định thành công!",
            data: quyDinh
        }); 
    } catch (err) {
        errorHandler(res, err);
    }
}
export const layQuyDinhTheoTen = async (req, res, next) => {
    try {
        const {tenQuyDinh}=req.params;
        const quyDinh=await quyDinhService.layQuyDinhTheoTen(tenQuyDinh,db.tx);
        res.status(200).json({
            success: true,
            message: "Lấy quy định theo tên thành công!",
            data: quyDinh
        }); 
    } catch (err) {
        errorHandler(res, err);
    }
}
