import express from "express";
import * as VeController from "./ve.controller.js";
import { validate } from "../../middlewares/base.validator.js";

const router = express.Router();

router.post("/",VeController.muaVe);

export default router;