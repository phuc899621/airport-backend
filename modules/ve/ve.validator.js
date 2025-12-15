import joi from "joi";
import { positiveIntMsg, stringMsg } from "../../middlewares/joi.message.js";

const createVeValidator = () => ({
    thanhToanParams: joi.object({
        maVe: joi.string().required().messages(stringMsg('Mã vé', true))
    }),
    huyVeParams: joi.object({
        maVe: joi.string().required().messages(stringMsg('Mã vé', true))
    }),
    taoVeBody: joi.object({
        maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay', true)),
        maHangVe: joi.string().required().messages(stringMsg('Mã hạng vé', true)),
        maHanhKhach: joi.string().required().messages(stringMsg('Mã hành khách', true)),
    }),
});

export default createVeValidator;