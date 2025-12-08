import express from "express";
import * as ChuyenBayController from "./chuyen_bay.controller.js";
import { validate } from "../../middlewares/base.validator.js";
import { sessionMiddleware } from "../../middlewares/session.middlewares.js";
import * as ChuyenBayValidator from "./chuyen_bay.validate.js";
import ValidateOption from "../../middlewares/base.validator.option.js";
const router = express.Router();

router.get("/",validate(ChuyenBayValidator.layLichChuyenBayQuerySchema,ValidateOption.QUERY),ChuyenBayController.layLichChuyenBay); 
router.get("/:maChuyenBay", validate(ChuyenBayValidator.layChuyenBayParamsSchema,ValidateOption.PARAMS),ChuyenBayController.layChuyenBay);
router.get("/:maChuyenBay/san-bay", validate(ChuyenBayValidator.layDanhSachSanBayTrungGianParamsSchema,ValidateOption.PARAMS),ChuyenBayController.laySanBayTrungGian);
router.get("/:maChuyenBay/san-bay/:maSanBay", validate(ChuyenBayValidator.laySanBayTrungGianParamsSchema,ValidateOption.PARAMS),ChuyenBayController.laySanBayTrungGian);

router.post("/", 
    validate(ChuyenBayValidator.taoChuyenBayBodySchema),ChuyenBayController.taoChuyenBay);
router.post("/:maChuyenBay/san-bay", 
    validate(ChuyenBayValidator.taoSanBayTrungGianParamsSchema,ValidateOption.PARAMS),
    validate(ChuyenBayValidator.taoSanBayTrungGianBodySchema),ChuyenBayController.taoSanBayTrungGian);

router.patch("/:maChuyenBay",
    validate(ChuyenBayValidator.capNhatChuyenBayParamsSchema,ValidateOption.PARAMS),
    validate(ChuyenBayValidator.capNhatChuyenBayBodySchema),ChuyenBayController.capNhatChuyenBay); 
router.patch("/:maChuyenBay/san-bay/:maSanBay",
    validate(ChuyenBayValidator.capNhatSanBayTrungGianParamsSchema,ValidateOption.PARAMS),
    validate(ChuyenBayValidator.capNhatSanBayTrungGianBodySchema),ChuyenBayController.capNhatSanBayTrungGian);

router.delete("/:maChuyenBay", 
    validate(ChuyenBayValidator.xoaChuyenBayParamsSchema,ValidateOption.PARAMS),ChuyenBayController.xoaChuyenBay);
router.delete("/:maChuyenBay/san-bay/:maSanBay", 
    validate(ChuyenBayValidator.xoaSanBayTrungGianParamsSchema,ValidateOption.PARAMS),ChuyenBayController.xoaSanBayTrungGian);
export default router;