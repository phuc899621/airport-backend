import express from "express";
import { validate } from "../../middlewares/base.validator.js";
import ValidateOption from "../../middlewares/base.validator.option.js";
import createSanBayService from "./san_bay.service.js";
import createSanBayRepo from "./san_bay.repo.js";
import createSanBayController from "./san_bay.controller.js";
import createSanBayValidator  from "./san_bay.validator.js";
import db from "../../core/config/db.js";
import { nhanVienMiddleware } from "../../middlewares/session.middlewares.js";

const sanBayRepo = createSanBayRepo(db);
const sanBayService = createSanBayService(sanBayRepo);
const sanBayController = createSanBayController(sanBayService);
const sanBayValidator = createSanBayValidator();
const router = express.Router();

router.get("/",validate(sanBayValidator.laySanBayQuery,ValidateOption.QUERY),sanBayController.laySanBay); 
router.get("/:maSanBay", validate(sanBayValidator.laySanBayParams,ValidateOption.PARAMS),sanBayController.laySanBay);
router.post("/",validate(sanBayValidator.taoSanBayBody),sanBayController.taoSanBay); 

export default router;