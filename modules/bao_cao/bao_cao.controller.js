import db from "../../core/config/db.js";
import { errorHandler } from "../../core/errors/error_handler.js";
import BaoCaoRepo from "./bao_cao.repo.js";
import BaoCaoService from "./bao_cao.service.js";

const baoCaoService = new BaoCaoService(new BaoCaoRepo(db));

export const layBaoCao = async (req, res, next) => {
    try {
        const baoCao = await baoCaoService.layBaoCao(req.query); 
        res.status(200).json({
            success: true,
            message: "Lay bao cao thanh cong!",
            data: baoCao
        }); 
    } catch (err) {
        errorHandler(res, err);
    }
}