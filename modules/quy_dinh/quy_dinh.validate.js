import joi from "joi";
import { positiveIntMsg, stringMsg } from "../../middlewares/joi.message.js";
export const capNhatQuyDinhParamsSchema = joi.object({
    tenQuyDinh: joi.string().required().messages(stringMsg('Tên quy định',true))
})
export const capNhatQuyDinhBodySchema = joi.object({
    giaTri: joi.number().integer().positive().required().messages(positiveIntMsg('Giá trị',true))
})