import joi from "joi";
import { positiveIntMsg, stringMsg } from "../../middlewares/joi.message.js";

export const createQuyDinhValidator = () => ({
  capNhatQuyDinhParams: joi.object({
    tenQuyDinh: joi.string().required().messages(stringMsg('Tên quy định', true))
  }),

  capNhatQuyDinhBody: joi.object({
    giaTri: joi.number().integer().positive().required().messages(positiveIntMsg('Giá trị', true))
  }),
  capNhatNhieuQuyDinhBody: joi.object({
    quyDinhs: joi.array().items(joi.object({
      tenQuyDinh: joi.string().required().messages(stringMsg('Tên quy đinh', true)),
      giaTri: joi.number().integer().positive().required().messages(positiveIntMsg('Giá trị', true))
    })).min(1).required().messages({
      "any.required": "Vui lòng cung cấp danh sách quy định",
      "array.base": "Danh sách quy định phải là mảng",
      "array.min": "Danh sách quy định phải có ít nhất 1 quy định"
    })
  })
});

export default createQuyDinhValidator;
