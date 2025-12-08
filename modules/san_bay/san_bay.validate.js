import Joi from "joi";

export const laySanBayParamsSchema = Joi.object({
    maSanBay: Joi.string().required().messages({
        "string.base": "Mã sân bay phải là chuỗi",
        "any.required": "Vui lòng cung cấp mã sân bay",
    })
});
export const laySanBayQuerySchema = Joi.object({
    tenSanBay: Joi.string().optional(),
    quocGia: Joi.string().optional(),
});

export const taoSanBayBodySchema = Joi.object({
  tenSanBay: Joi.string().required(),
  quocGia: Joi.string().required(),
});
export const capNhatSanBayBodySchema = Joi.object({
  tenSanBay: Joi.string().optional(),
  quocGia: Joi.string().optional(),
});
export const capNhatSanBayParamsSchema = Joi.object({
  maSanBay: Joi.string().required().messages({
        "string.base": "Mã sân bay phải là chuỗi",
        "any.required": "Vui lòng cung cấp mã sân bay",
    })
});

export const xoaSanbayParamsSchema = Joi.object({
  maSanBay: Joi.string().required().messages({
        "string.base": "Mã sân bay phải là chuỗi",
        "any.required": "Vui lòng cung cấp mã sân bay",
    })
})
