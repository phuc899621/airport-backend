import Joi from "joi";
import { stringMsg } from "../../middlewares/joi.message.js";

export const laySanBayParamsSchema = Joi.object({
    maSanBay: Joi.string().required().messages(stringMsg('Mã sân bay',true))
});
export const laySanBayQuerySchema = Joi.object({
    tenSanBay: Joi.string().optional().messages(stringMsg('Tên sân bay')),
    quocGia: Joi.string().optional().messages(stringMsg('Quốc gia')),
});

export const taoSanBayBodySchema = Joi.object({
  tenSanBay: Joi.string().required().messages(stringMsg('Tên sân bay',true)),
  quocGia: Joi.string().required().messages(stringMsg('Quốc gia',true)),
});
export const capNhatSanBayBodySchema = Joi.object({
  tenSanBay: Joi.string().optional().messages(stringMsg('Tên sân bay')),
  quocGia: Joi.string().optional().messages(stringMsg('Quốc gia')),
});
export const capNhatSanBayParamsSchema = Joi.object({
  maSanBay: Joi.string().required().messages(stringMsg('Mã sân bay',true))
});

export const xoaSanbayParamsSchema = Joi.object({
  maSanBay: Joi.string().required().messages(stringMsg('Mã sân bay',true))
})
