import Joi from "joi";
import {stringMsg} from "../../middlewares/joi.message.js";
export const createAuthValidator = () => ({
  dangNhapNhanVienBody: Joi.object({
    tenDangNhap: Joi.string().required().messages(stringMsg('Tên đăng nhập', true)),
    matKhau: Joi.string().required().messages(stringMsg('Mật khẩu', true))
  }),
  taoTaiKhoanNhanVienBody: Joi.object({
    tenDangNhap: Joi.string().required().messages(stringMsg('Tên đăng nhập', true)),
    matKhau: Joi.string().required().messages(stringMsg('Mật khẩu', true))
  }),
  
})
