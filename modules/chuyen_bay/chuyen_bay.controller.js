import { errorHandler } from '../../core/errors/error_handler.js';

import ChuyenBayRepo from './chuyen_bay.repo.js';
import SanBayRepo from '../san_bay/san_bay.repo.js';
import ChuyenBayService from './chuyen_bay.service.js';
import db from '../../core/config/db.js';
import SanBayTrungGianRepo from './san_bay_trung_gian.repo.js';
import HangVeChuyenBayRepo from './hang_ve_chuyen_bay.repo.js';
import HangVeRepo from '../hang_ve/hang_ve.repo.js';

const hangVeRepo=new HangVeRepo(db);

const chuyenBayRepo=new ChuyenBayRepo(db);
const hangVeChuyenBayRepo=new HangVeChuyenBayRepo(db);
const sanBayRepo=new SanBayRepo(db);
const sanBayTrungGianRepo=new SanBayTrungGianRepo(db);
const chuyenBayService=new ChuyenBayService(
    chuyenBayRepo,sanBayRepo,sanBayTrungGianRepo, hangVeChuyenBayRepo,hangVeRepo);

export const layLichChuyenBay = async (req, res) => {
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
};
export const layLichChuyenBayTheoMaChuyenBay = async (req, res) => {
    try{
        const {maChuyenBay}=req.params;
        const result=await chuyenBayService.layLichChuyenBayTheoMaChuyenBay(maChuyenBay,req.query);
        res.status(200).json({
            success: true,
            message: "Lấy lịch chuyến bay thành công!",
            data: result
        });
    } catch (err) {
        errorHandler(res, err);
    }
};
export const laySanBayTrungGian = async (req, res) => {
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
}
export const layHangVeChuyenBay = async (req, res) => {
    try{
        const {maChuyenBay}=req.params;
        const hangVeChuyenBay=await chuyenBayService.layHangVeChuyenBay(maChuyenBay);
        res.status(200).json({
            success: true,
            message: "Lấy hạng vé chuyến bay thành công!",
            data: hangVeChuyenBay
        }); 
    }catch(err){
        errorHandler(res, err);
    }
}
export const taoSanBayTrungGian = async (req, res) => {
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
}
export const capNhatSanBayTrungGian = async (req, res) => {
    try{
        const {maChuyenBay,maSanBay}=req.params;
        const sanBayTrungGian=await chuyenBayService.capNhatSanBayTrungGian(maChuyenBay,maSanBay,req.body);
        res.status(200).json({
            success: true,
            message: "Cập nhật sân bay trung gian thành công!",
            data: sanBayTrungGian
        }); 
    }catch(err){
        errorHandler(res, err);
    }
}

export const taoChuyenBay = async (req, res) => {
    try{
        const chuyenBay=await chuyenBayService.taoChuyenBay(req.body);
        res.status(201).json({
            success: true,
            message: "Tạo chuyến bay thành công!",
            data: chuyenBay
        }); 
    }catch(err){
        errorHandler(res, err);
    }
};
export const taoHangVeChuyenBay = async (req, res) => {
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
};

export const capNhatChuyenBay = async (req, res) => {
    try{
        const {maChuyenBay}=req.params;
        const chuyenBay=await chuyenBayService.capNhatChuyenBay(maChuyenBay,req.body);
        res.status(200).json({
            success: true,
            message: "Cập nhật chuyến bay thành công!",
            data: chuyenBay
        }); 
    }catch(err){
        errorHandler(res, err);
    }
};
export const capNhatHangVeChuyenBay = async (req, res) => {
    try{
        const {maChuyenBay,maHangVe}=req.params;
        const hangVeChuyenBay=await chuyenBayService.capNhatHangVeChuyenBay(maChuyenBay,maHangVe,req.body);
        res.status(200).json({
            success: true,
            message: "Cập nhật hạng vé chuyến bay thành công!",
            data: hangVeChuyenBay
        }); 
    }catch(err){
        errorHandler(res, err);
    }
}

export const xoaChuyenBay = async (req, res) => {
    try{
        const {maChuyenBay}=req.params;
        await chuyenBayService.xoaChuyenBay(maChuyenBay);
        res.status(200).json({
            success: true,
            message: "Xóa chuyến bay thành công!",
            data: {}
        }); 
    }catch(err){
        errorHandler(res, err);
    }
};
export const xoaSanBayTrungGian = async (req, res) => {
    try{
        const {maChuyenBay,maSanBay}=req.params;
        await chuyenBayService.xoaSanBayTrungGian(maChuyenBay,maSanBay);
        res.status(200).json({
            success: true,
            message: "Xóa sân bay trung gian thành công!",
            data: {}
        }); 
    }catch(err){
        errorHandler(res, err);
    }
};

export const xoaHangVeChuyenBayTheoMaChuyenBay = async (req, res) => {
    try{
        const {maChuyenBay}=req.params;
        await chuyenBayService.xoaHangVeChuyenBayTheoMaChuyenBay(maChuyenBay);
        res.status(200).json({
            success: true,
            message: "Xóa các hạng vé thuộc mã chuyến bay thành công!",
            data: {}
        }); 
    }catch(err){
        errorHandler(res, err);
    }
};
export const xoaHangVeChuyenBayTheoMaHangVe = async (req, res) => {
    try{
        const {maHangVe, maChuyenBay}=req.params;
        await chuyenBayService.xoaHangVeChuyenBayTheoMaHangVe(maChuyenBay,maHangVe);
        res.status(200).json({
            success: true,
            message: "Xóa 1 hạng vé chuyến bay cụ thể thành công!",
            data: {}
        }); 
    }catch(err){
        errorHandler(res, err);
    }
}