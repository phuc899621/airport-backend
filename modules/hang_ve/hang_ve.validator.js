import Joi from "joi";
import { stringMsg, positiveFloatMsg } from "../../middlewares/joi.message.js";

export const createHangVeValidator = () => ({
  layHangVeParams: Joi.object({
    maHangVe: Joi.string().required().messages(stringMsg('Mã hạng vé', true))
  }),
  taoHangVeBody: Joi.object({
    tenHangVe: Joi.string().required().messages(stringMsg('Tên hạng vé', true)),
    heSoGia: Joi.number().positive().required().messages(positiveFloatMsg('Hệ số giá', true))
  })
});