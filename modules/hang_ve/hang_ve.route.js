import express from "express";
import db from "../../core/config/db.js";
import createHangVeRepo from "./hang_ve.repo.js";
import createHangVeService from "./hang_ve.service.js";
import createHangVeController from "./hang_ve.controller.js";
import { validate } from "../../middlewares/base.validator.js";
import { createHangVeValidator } from "./hang_ve.validator.js";
import ValidateOption from "../../middlewares/base.validator.option.js";
import { nhanVienMiddleware } from "../../middlewares/session.middlewares.js";
const hangVeValidator=createHangVeValidator();
const hangVeRepo = createHangVeRepo(db);
const hangVeService = createHangVeService(hangVeRepo);
const hangVeController = createHangVeController(hangVeService);
const router = express.Router();

router.get("/",hangVeController.layHangVe);
router.get("/:maHangVe",validate(hangVeValidator.layHangVeParams,ValidateOption.PARAMS), hangVeController.layHangVeTheoMaHangVe); 
router.post("/",validate(hangVeValidator.taoHangVeBody),hangVeController.taoHangVe); 

export default router;