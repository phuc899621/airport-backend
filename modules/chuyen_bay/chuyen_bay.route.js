import express from "express";
import * as ChuyenBayController from "./chuyen_bay.controller.js";
import { validate } from "../../middlewares/base.validator.js";
import { sessionMiddleware } from "../../middlewares/session.middlewares.js";
import * as ChuyenBayValidator from "./chuyen_bay.validate.js";
import ValidateOption from "../../middlewares/base.validator.option.js";
const router = express.Router();

router.get("/",ChuyenBayController.layLichChuyenBay); 
router.get("/:maChuyenBay", validate(ChuyenBayValidator.layChuyenBayParamsSchema,ValidateOption.PARAMS),ChuyenBayController.layLichChuyenBay);
router.get("/:maChuyenBay/san-bay", validate(ChuyenBayValidator.layDanhSachSanBayTrungGianParamsSchema,ValidateOption.PARAMS),ChuyenBayController.laySanBayTrungGian);
router.get("/:maChuyenBay/san-bay/:maSanBay", validate(ChuyenBayValidator.laySanBayTrungGianParamsSchema,ValidateOption.PARAMS),ChuyenBayController.laySanBayTrungGian);
router.get("/:maChuyenBay/hang-ve",validate(ChuyenBayValidator.layHangVeChuyenBayParamsSchema,ValidateOption.PARAMS) ,ChuyenBayController.layHangVeChuyenBay);

router.post("/", 
    validate(ChuyenBayValidator.taoChuyenBayBodySchema),ChuyenBayController.taoChuyenBay);
router.post("/:maChuyenBay/san-bay", 
    validate(ChuyenBayValidator.taoSanBayTrungGianParamsSchema,ValidateOption.PARAMS),
    validate(ChuyenBayValidator.taoSanBayTrungGianBodySchema),ChuyenBayController.taoSanBayTrungGian);
router.post("/:maChuyenBay/hang-ve", 
    validate(ChuyenBayValidator.taoHangVeChuyenBayParamsSchema,ValidateOption.PARAMS),
    validate(ChuyenBayValidator.taoHangVeChuyenBayBodySchema),ChuyenBayController.taoHangVeChuyenBay);

router.patch("/:maChuyenBay",
    validate(ChuyenBayValidator.capNhatChuyenBayParamsSchema,ValidateOption.PARAMS),
    validate(ChuyenBayValidator.capNhatChuyenBayBodySchema),ChuyenBayController.capNhatChuyenBay); 
router.patch("/:maChuyenBay/san-bay/:maSanBay",
    validate(ChuyenBayValidator.capNhatSanBayTrungGianParamsSchema,ValidateOption.PARAMS),
    validate(ChuyenBayValidator.capNhatSanBayTrungGianBodySchema),ChuyenBayController.capNhatSanBayTrungGian);
router.patch("/:maChuyenBay/hang-ve/:maHangVe",
    validate(ChuyenBayValidator.capNhatHangVeChuyenBayParamsSchema,ValidateOption.PARAMS),
    validate(ChuyenBayValidator.capNhatHangVeChuyenBayBodySchema),ChuyenBayController.capNhatHangVeChuyenBay);

router.delete("/:maChuyenBay", 
    validate(ChuyenBayValidator.xoaChuyenBayParamsSchema,ValidateOption.PARAMS),ChuyenBayController.xoaChuyenBay);
router.delete("/:maChuyenBay/san-bay/:maSanBay", 
    validate(ChuyenBayValidator.xoaSanBayTrungGianParamsSchema,ValidateOption.PARAMS),ChuyenBayController.xoaSanBayTrungGian);
router.delete("/:maChuyenBay/hang-ve",
    validate(ChuyenBayValidator.xoaHangVeChuyenBayTheoMaChuyenBayParamsSchema,ValidateOption.PARAMS),ChuyenBayController.xoaHangVeChuyenBayTheoMaChuyenBay);
    router.delete("/:maChuyenBay/hang-ve/:maHangVe", 
    validate(ChuyenBayValidator.xoaHangVeChuyenBayTheoMaHangVeParamsSchema,ValidateOption.PARAMS),
    ChuyenBayController.xoaHangVeChuyenBayTheoMaHangVe);


    export default router;