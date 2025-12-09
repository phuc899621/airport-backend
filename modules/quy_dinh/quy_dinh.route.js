import express from "express";
import * as QuyDinhController from "./quy_dinh.controller.js";
import { validate } from "../../middlewares/base.validator.js";
import * as QuyDinhValidator from "./quy_dinh.validate.js";
import ValidateOption from "../../middlewares/base.validator.option.js";
const router = express.Router();

router.get("/",QuyDinhController.layQuyDinh);
router.put("/:tenQuyDinh",
    validate(QuyDinhValidator.capNhatQuyDinhParamsSchema,ValidateOption.PARAMS),
    validate(QuyDinhValidator.capNhatQuyDinhBodySchema),QuyDinhController.capNhatQuyDinh);
export default router;