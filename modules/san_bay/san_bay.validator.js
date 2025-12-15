import Joi from "joi";
import { stringMsg } from "../../middlewares/joi.message.js";

const createSanBayValidator = () => ({
  laySanBayParams: Joi.object({
    maSanBay: Joi.string().required().messages(stringMsg('Mã sân bay', true))
  }),

  laySanBayQuery: Joi.object({
    tenSanBay: Joi.string().optional().messages(stringMsg('Tên sân bay')),
    quocGia: Joi.string().optional().messages(stringMsg('Quốc gia'))
  }),

  taoSanBayBody: Joi.object({
    tenSanBay: Joi.string().required().messages(stringMsg('Tên sân bay', true)),
    quocGia: Joi.string().required().messages(stringMsg('Quốc gia', true))
  }),

});

export default createSanBayValidator;
