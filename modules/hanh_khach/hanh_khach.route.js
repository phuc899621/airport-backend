import express from "express";
import { validate } from "../../middlewares/base.validator.js";
import ValidateOption from "../../middlewares/base.validator.option.js";
import createHanhKhachValidator from "./hanh_khach.validate.js";
import createHanhKhachRepo from "./hanh_khach.repo.js";
import createHanhKhachService from "./hanh_khach.service.js";
import createHanhKhachController from "./hanh_khach.controller.js";
import db from "../../core/config/db.js";
import { nhanVienMiddleware } from "../../middlewares/session.middlewares.js";
const hanhKhachValidator=createHanhKhachValidator();
const hanhKhachRepo = createHanhKhachRepo(db);
const hanhKhachService = createHanhKhachService(hanhKhachRepo);
const hanhKhachController = createHanhKhachController(hanhKhachService);
const router = express.Router();

router.get("/",
    validate(hanhKhachValidator.layHanhKhachQuery,ValidateOption.QUERY),
    hanhKhachController.layHanhKhach); 
router.get("/:maHanhKhach",
    validate(hanhKhachValidator.layHanhKhachParams,ValidateOption.PARAMS),
    hanhKhachController.layHanhKhach);
router.post("/",
    validate(hanhKhachValidator.taoHanhKhachBody),hanhKhachController.taoHanhKhach); 
export default router;