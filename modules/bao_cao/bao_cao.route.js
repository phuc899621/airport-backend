import express from "express";
import * as BaoCaoController from "./bao_cao.controller.js";
import { validate } from "../../middlewares/base.validator.js";
import { nhanVienMiddleware } from "../../middlewares/session.middlewares.js";

const router = express.Router();

router.get("/thang/:nam",nhanVienMiddleware,BaoCaoController.layBaoCaoTheoThang);
router.get("/nam/:nam",nhanVienMiddleware,BaoCaoController.layBaoCaoTheoNam);
export default router;