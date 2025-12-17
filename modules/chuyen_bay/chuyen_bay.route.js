import express from "express";
import { validate } from "../../middlewares/base.validator.js";
import { sessionMiddleware } from "../../middlewares/session.middlewares.js";
import ValidateOption from "../../middlewares/base.validator.option.js";
import createChuyenBayService from "./chuyen_bay.service.js";
import createChuyenBayRepo from "./chuyen_bay.repo.js";
import createChuyenBayController from "./chuyen_bay.controller.js";
import createChuyenBayValidator  from "./chuyen_bay.validator.js";
import db from "../../core/config/db.js";
import createSanBayRepo from "../san_bay/san_bay.repo.js";
import createHangVeChuyenBayRepo from "./hang_ve_chuyen_bay.repo.js";
import createHangVeRepo from "../hang_ve/hang_ve.repo.js";
import createSanBayTrungGianRepo from "./san_bay_trung_gian.repo.js";
import createSanBayService from "../san_bay/san_bay.service.js";
import createHangVeService from "../hang_ve/hang_ve.service.js";
import createQuyDinhRepo from "../quy_dinh/quy_dinh.repo.js";
import createQuyDinhService from "../quy_dinh/quy_dinh.service.js";
const chuyenBayValidator = createChuyenBayValidator();
const chuyenBayRepo = createChuyenBayRepo(db);
const sanBayRepo = createSanBayRepo(db);
const hangVeChuyenBayRepo = createHangVeChuyenBayRepo(db);
const hangVeRepo = createHangVeRepo(db);
const sanBayTrungGianRepo = createSanBayTrungGianRepo(db);
const sanBayService = createSanBayService(sanBayRepo);
const hangVeService = createHangVeService(hangVeRepo);
const quyDinhRepo= createQuyDinhRepo(db);
const quyDinhService = createQuyDinhService(quyDinhRepo);
const chuyenBayService = createChuyenBayService(
    chuyenBayRepo,sanBayTrungGianRepo,
    hangVeChuyenBayRepo,sanBayService,hangVeService,quyDinhService,db);
const chuyenBayController = createChuyenBayController(chuyenBayService);
const router = express.Router();

router.get("/",chuyenBayController.layLichChuyenBay); 
router.get("/:maChuyenBay", validate(chuyenBayValidator.layChuyenBayParams,ValidateOption.PARAMS),chuyenBayController.layLichChuyenBayTheoMaChuyenBay);
router.get("/:maChuyenBay/san-bay", validate(chuyenBayValidator.layDanhSachSanBayTrungGianParams,ValidateOption.PARAMS),chuyenBayController.laySanBayTrungGian);
router.get("/:maChuyenBay/san-bay/:maSanBay", validate(chuyenBayValidator.laySanBayTrungGianParamsSchema,ValidateOption.PARAMS),chuyenBayController.laySanBayTrungGian);
router.get("/:maChuyenBay/hang-ve",validate(chuyenBayValidator.layHangVeChuyenBayParams,ValidateOption.PARAMS) ,chuyenBayController.layHangVeChuyenBay);

router.post("/", 
    validate(chuyenBayValidator.taoChuyenBayBody),chuyenBayController.taoChuyenBay);
router.post("/:maChuyenBay/san-bay", 
    validate(chuyenBayValidator.taoSanBayTrungGianParams,ValidateOption.PARAMS),
    validate(chuyenBayValidator.taoSanBayTrungGianBody),chuyenBayController.taoSanBayTrungGian);
router.post("/:maChuyenBay/hang-ve", 
    validate(chuyenBayValidator.taoHangVeChuyenBayParams,ValidateOption.PARAMS),
    validate(chuyenBayValidator.taoHangVeChuyenBayBody),chuyenBayController.taoHangVeChuyenBay);
    export default router;