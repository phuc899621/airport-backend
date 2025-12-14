import express from "express";
import * as VeController from "./ve.controller.js";
import { validate } from "../../middlewares/base.validator.js";

const router = express.Router();

router.post("/dat-ve",VeController.datVe);
router.post("/mua-ve",VeController.muaVe);
router.get("/",VeController.layVe);

export default router;