import express from "express";
import { validate } from "../../middlewares/base.validator.js";
const router = express.Router();
import db from "../../core/config/db.js";
import createChuyenBayRepo from "../chuyen_bay/chuyen_bay.repo.js";
import createSanBayRepo from "../san_bay/san_bay.repo.js";
import createHangVeChuyenBayRepo from "../chuyen_bay/hang_ve_chuyen_bay.repo.js";
import createHangVeRepo from "../hang_ve/hang_ve.repo.js";
import createSanBayTrungGianRepo from "../chuyen_bay/san_bay_trung_gian.repo.js";
import createSanBayService from "../san_bay/san_bay.service.js";
import createHangVeService from "../hang_ve/hang_ve.service.js";
import createQuyDinhRepo from "../quy_dinh/quy_dinh.repo.js";
import createQuyDinhService from "../quy_dinh/quy_dinh.service.js";
import createChuyenBayService from "../chuyen_bay/chuyen_bay.service.js";
import createVeRepo from "./ve.repo.js";
import createVeService from "./ve.service.js";
import createVeController from "./ve.controller.js";
import createVeValidator from "./ve.validator.js";
import ValidateOption from "../../middlewares/base.validator.option.js";


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
const veRepo = createVeRepo(db);
const veService = createVeService(veRepo,chuyenBayService,hangVeService,quyDinhService);
const veController = createVeController(veService);
const veValidator = createVeValidator();

router.post("/dat-ve",validate(veValidator.taoVeBody),veController.datVe);
router.post("/mua-ve",validate(veValidator.taoVeBody),veController.muaVe);
router.get("/",veController.layVe);
router.patch("/:maVe/thanh-toan",validate(veValidator.thanhToanParams,ValidateOption.PARAMS),veController.thanhToanVe);
router.delete("/:maVe",validate(veValidator.huyVeParams,ValidateOption.PARAMS),veController.huyVe);
export default router;