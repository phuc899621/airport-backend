import joi from "joi";
import { isoDateMsg, positiveIntMsg, stringMsg } from "../../middlewares/joi.message.js";


export const layChuyenBayParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
})
export const layDanhSachSanBayTrungGianParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
})
export const laySanBayTrungGianParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true)),
    maSanBay: joi.string().required().messages(stringMsg('Mã sân bay',true))
})


export const taoChuyenBayBodySchema = joi.object({
    maSanBayDi: joi.string().required().messages(stringMsg('Mã sân bay đi',true)),
    maSanBayDen: joi.string().required().messages(stringMsg('Mã sân bay đến',true)),
    ngayGio: joi.string().isoDate().required().messages(isoDateMsg('Ngày khởi hành',true)),
    thoiGianBay: joi.number().integer().positive().required().messages(positiveIntMsg('Thoi gian bay',true)),
    giaVe: joi.number().integer().positive().required().messages(positiveIntMsg('Giá vé',true)),
    
})

export const taoSanBayTrungGianBodySchema = joi.object({
    maSanBay: joi.string().required().messages(stringMsg('Mã sân bay',true)),
    thoiGianDung: joi.number().integer().positive().required().messages(positiveIntMsg('Thời gian dừng',true)),
    ghiChu: joi.string().optional().messages(stringMsg('Ghi chú')),
})
export const taoSanBayTrungGianParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true)),
})


export const capNhatChuyenBayBodySchema = joi.object({
    maSanBayDi: joi.string().optional().messages(stringMsg('Mã sân bay đi')),
    maSanBayDen: joi.string().optional().messages(stringMsg('Mã sân bay đến')),
    ngayGio: joi.date().iso().optional().messages(isoDateMsg('Ngày khởi hành')),
    thoiGianBay: joi.number().integer().positive().optional().messages(positiveIntMsg('Thoi gian bay')),
    giaVe: joi.number().integer().positive().optional().messages(positiveIntMsg('Giá vé')),
    
})

export const capNhatChuyenBayParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
})

export const capNhatSanBayTrungGianParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages({
        "string.base": "Mã chuyến bay phải là một chuỗi",
        "any.required": "Vui lòng cung cấp mã chuyến bay",
    }),
    maSanBay: joi.string().required().messages({
        "string.base": "Mã sân bay phải là một chuỗi",
        "any.required": "Vui lòng cung cấp mã sân bay",
    })
})

export const capNhatSanBayTrungGianBodySchema = joi.object({
    thoiGianDung: joi.number().integer().positive().optional().messages(positiveIntMsg('Thời gian dừng')),
    ghiChu: joi.string().optional().messages(stringMsg('Ghi chú')),
})


export const xoaChuyenBayParamsSchema= joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
})
export const xoaSanBayTrungGianParamsSchema= joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true)),
    maSanBay: joi.string().required().messages(stringMsg('Mã sân bay',true))
})

export const layHangVeChuyenBayParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
})
export const taoHangVeChuyenBayParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
})

export const taoHangVeChuyenBayBodySchema = joi.object({
    maHangVe: joi.string().required().messages(stringMsg('Mã hạng vé',true)),
    tongSoGhe: joi.number().integer().positive().required().messages(positiveIntMsg('Tổng số ghế',true))
})
export const capNhatHangVeChuyenBayParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true)),
    maHangVe: joi.string().required().messages(stringMsg('Mã hạng vé',true)),
})
export const capNhatHangVeChuyenBayBodySchema = joi.object({
    tongSoGhe: joi.number().integer().positive().optional().messages(positiveIntMsg('Tổng số ghế'))

})
export const xoaHangVeChuyenBayTheoMaChuyenBayParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
})
export const xoaHangVeChuyenBayTheoMaHangVeParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true)),
    maHangVe: joi.string().required().messages(stringMsg('Mã hạng vé',true))
})