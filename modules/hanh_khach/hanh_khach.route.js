import express from "express";
import { validate } from "../../middlewares/base.validator.js";
import * as HanhKhachController from "./hanh_khach.controller.js";
import * as HanhKhachValidator from "./hanh_khach.validate.js";
import ValidateOption from "../../middlewares/base.validator.option.js";

const router = express.Router();

router.get("/",
    validate(HanhKhachValidator.layHanhKhachQuerySchema,ValidateOption.QUERY),
    HanhKhachController.layHanhKhach); 
router.get("/:maHanhKhach", 
    validate(HanhKhachValidator.layHanhKhachParamsSchema,ValidateOption.PARAMS),
    HanhKhachController.layHanhKhach);
router.get("/cmnd/:cmnd",HanhKhachController.layHanhKhachTheoCMND)
router.post("/", 
    validate(HanhKhachValidator.taoHanhKhachBodySchema),HanhKhachController.taoHanhKhach); 
router.delete("/:maHanhKhach", 
    validate(HanhKhachValidator.xoaHanhKhachParamsSchema,ValidateOption.PARAMS),HanhKhachController.xoaHanhKhach);
export default router;