import db from "../../core/config/db.js";
import { errorHandler } from "../../core/errors/error_handler.js";
import ChuyenBayRepo from "../chuyen_bay/chuyen_bay.repo.js";
import ChuyenBayService from "../chuyen_bay/chuyen_bay.service.js";
import HangVeChuyenBayRepo from "../chuyen_bay/hang_ve_chuyen_bay.repo.js";
import SanBayTrungGianRepo from "../chuyen_bay/san_bay_trung_gian.repo.js";
import HangVeRepo from "../hang_ve/hang_ve.repo.js";
import SanBayRepo from "../san_bay/san_bay.repo.js";
import VeRepo from "./ve.repo.js";
import { VeService } from "./ve.service.js";
const chuyenBayService=new ChuyenBayService(
    new ChuyenBayRepo(db),
    new SanBayRepo(db),
    new SanBayTrungGianRepo(db),
    new HangVeChuyenBayRepo(db),
    new HangVeRepo(db)
);
const veService=new VeService(new VeRepo(db), chuyenBayService,new HangVeRepo(db));

export const muaVe = async (req, res, next) => {
    try{
        const data=req.body;
        const result=await veService.muaVe(data);
        res.status(201).json({
            success: true,
            message: "Mua vé thành công!",
            data: result
        }); 
    }catch(err){
        errorHandler(res, err);
    }
}
export const datVe = async (req, res, next) => {
    try{
        const data=req.body;
        const result=await veService.datVe(data);
        res.status(201).json({
            success: true,
            message: "Dat vé thành công!",
            data: result
        }); 
    }catch(err){
        errorHandler(res, err);
    }
}
export const layVe = async (req, res, next) => {
    try{
        const result=await veService.layVe();
        res.status(200).json({
            success: true,
            message: "Lay vé thành công!",
            data: result
        }); 
    }catch(err){
        errorHandler(res, err);
    }
}
export const thanhToanVe = async (req, res, next) =>{
    try{
        const {maVe}=req.params ;
        const result=await veService.thanhToanVe(maVe);
        res.status(200).json({
            success: true,
            message: "Thanh toán vé thành công!",
            data: result
        }); 
    }catch(err){
        errorHandler(res, err);
    }
}
export const huyVe = async (req, res, next) =>{
    try{
        const {maVe}=req.params ;
        const result=await veService.huyVe(maVe);
        res.status(200).json({
            success: true,
            message: "Huy vé thành công!",
            data: result
        }); 
    }catch(err){
        errorHandler(res, err);
    }
}