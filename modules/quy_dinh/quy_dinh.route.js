import express from "express";
import { validate } from "../../middlewares/base.validator.js";
import ValidateOption from "../../middlewares/base.validator.option.js";
import createQuyDinhRepo from "./quy_dinh.repo.js";
import createQuyDinhService from "./quy_dinh.service.js";
import createQuyDinhController from "./quy_dinh.controller.js";
import createQuyDinhValidator from "./quy_dinh.validate.js";
import db from "../../core/config/db.js";
const quyDinhRepo = createQuyDinhRepo(db);
const quyDinhService = createQuyDinhService(quyDinhRepo);
const quyDinhController = createQuyDinhController(quyDinhService);
const quyDinhValidator = createQuyDinhValidator();
const router = express.Router();

router.get("/",quyDinhController.layQuyDinh);
router.get("/:tenQuyDinh", quyDinhController.layQuyDinhTheoTen);
router.put("/:tenQuyDinh",
    validate(quyDinhValidator.capNhatQuyDinhParams,ValidateOption.PARAMS),
    validate(quyDinhValidator.capNhatQuyDinhBody),quyDinhController.capNhatQuyDinh);
router.patch("/",quyDinhController.capNhatNhieuQuyDinh)
export default router;