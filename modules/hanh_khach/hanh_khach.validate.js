import Joi from "joi";
export const layHanhKhachParamsSchema = Joi.object({
    maHanhKhach: Joi.number().integer().positive().required().messages({
        "number.base": "Mã hành khách phải là số nguyên dương",
        "number.integer": "Mã hành khách phải là số nguyên dương",
        "number.positive": "Mã hành khách phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã hành khách",
    })
});
export const layHanhKhachQuerySchema = Joi.object({
    hoTen: Joi.string().optional().messages({
        "string.base": "Họ tên phải là chuỗi",
    }),
    cmnd: Joi.string().pattern(/^(?:\d{9}|\d{12})$/).optional().messages({
        "string.base": "CMND phải là chuỗi",
        "string.pattern.base": "CMND phải có 9 hoặc 12 số",
    }),
    dienThoai: Joi.string().length(10).optional().messages({
        "string.base": "Số điện thoại phải là chuỗi",
        "string.length": "Số điện thoại phải có 10 số",
    }),
    email: Joi.string().email().optional().messages({
        "string.base": "Email phải là chuỗi",
        "string.email": "Email không hợp lệ",
    })
});
export const  taoHanhKhachBodySchema = Joi.object({
    hoTen: Joi.string().required().messages({
        "string.base": "Họ tên phải là chuỗi",
        "any.required": "Vui lòng cung cấp họ tên",
    }),
    cmnd: Joi.string().pattern(/^(?:\d{9}|\d{12})$/).required().messages({
        "string.base": "CMND phải là chuỗi",
        "string.pattern.base": "CMND phải có 9 hoặc 12 số",
        "any.required": "Vui lòng cung cấp CMND",
    }),
    dienThoai: Joi.string().length(10).required().messages({
        "string.base": "Số điện thoại phải là chuỗi",
        "string.length": "Số điện thoại phải có 10 số",
        "any.required": "Vui lòng cung cấp số điện thoại",
    }),
    email: Joi.string().email().required().messages({
        "string.base": "Email phải là chuỗi",
        "string.email": "Email không hợp lệ",
        "any.required": "Vui lòng cung cấp email",
    })

})

export const xoaHanhKhachParamsSchema = Joi.object({
    maHanhKhach: Joi.number().integer().positive().required().messages({
        "number.base": "Mã hành khách phải là số nguyên dương",
        "number.integer": "Mã hành khách phải là số nguyên dương",
        "number.positive": "Mã hành khách phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã hành khách",
    })
});
