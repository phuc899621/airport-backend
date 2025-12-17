import express from "express";
import { validate } from "../../middlewares/base.validator.js";
import createAuthController from "./auth.controller.js";
import createAuthService  from "./auth.service.js";
import createAuthRepo from "./auth.repo.js";
import {createAuthValidator} from "./auth.validator.js";
import db from "../../core/config/db.js";
import { nhanVienMiddleware } from "../../middlewares/session.middlewares.js";
const router = express.Router();

const authRepo = createAuthRepo(db);
const authService = createAuthService(authRepo);
const authController = createAuthController(authService);
const authValidator = createAuthValidator();

router.post("/nhan-vien/dang-nhap", validate(authValidator.dangNhapNhanVienBody),authController.dangNhapNhanVien);
router.post("/admin/nhan-vien", validate(authValidator.taoTaiKhoanNhanVienBody),authController.taoTaiKhoanNhanVien);
router.post("/", nhanVienMiddleware,authController.kiemTraQuyenNhanVien)
export default router;