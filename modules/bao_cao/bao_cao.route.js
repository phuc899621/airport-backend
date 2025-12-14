import express from "express";
import * as BaoCaoController from "./bao_cao.controller.js";
import { validate } from "../../middlewares/base.validator.js";

const router = express.Router();

router.get("/",BaoCaoController.layBaoCao);
export default router;