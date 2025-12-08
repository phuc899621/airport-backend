import { errorHandler } from '../../core/errors/error_handler.js';

import ChuyenBayRepo from './chuyen_bay.repo.js';
import SanBayRepo from '../san_bay/san_bay.repo.js';
import ChuyenBayService from './chuyen_bay.service.js';
import db from '../../core/config/db.js';
import SanBayTrungGianRepo from './san_bay_trung_gian.repo.js';

const chuyenBayRepo=new ChuyenBayRepo(db);
const sanBayRepo=new SanBayRepo(db);
const sanBayTrungGianRepo=new SanBayTrungGianRepo(db);
const chuyenBayService=new ChuyenBayService(
    chuyenBayRepo,sanBayRepo,sanBayTrungGianRepo);

export const layLichChuyenBay = async (req, res) => {
    try{
        const lichChuyenBayMap=await chuyenBayService.layLichChuyenBay(req.query);
        res.status(200).json({
            success: true,
            message: "Lấy lịch chuyến bay thành công!",
            data: Array.from(lichChuyenBayMap.values())
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

export const layChuyenBay = async (req, res) => {
    try{
        const {maChuyenBay}=req.params;
        const chuyenBay=await chuyenBayService.layChuyenBay(maChuyenBay,req.query);
        res.status(200).json({
            success: true,
            message: "Lấy chuyến bay thành công!",
            data: chuyenBay
        }); 
    }catch(err){
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