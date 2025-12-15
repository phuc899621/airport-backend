import joi from "joi";
import { isoDateMsg, positiveIntMsg, stringMsg } from "../../middlewares/joi.message.js";
const createChuyenBayValidator = () => ({
    layChuyenBayParams: joi.object({
        maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
    }),
    layDanhSachSanBayTrungGianParams: joi.object({
        maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
    }),
    laySanBayTrungGianParams: joi.object({
        maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true)),
        maSanBay: joi.string().required().messages(stringMsg('Mã sân bay',true))
    }),
    taoChuyenBayBody: joi.object({
        maSanBayDi: joi.string().required().messages(stringMsg('Mã sân bay đi',true)),
        maSanBayDen: joi.string().required().messages(stringMsg('Mã sân bay đến',true)),
        ngayGio: joi.string().isoDate().required().messages(isoDateMsg('Ngày khởi hành',true)),
        thoiGianBay: joi.number().integer().positive().required().messages(positiveIntMsg('Thời gian bay',true)),
        giaVeCoBan: joi.number().integer().positive().required().messages(positiveIntMsg('Giá vé cơ bản',true)),
        sanBayTrungGians: joi.array().items(joi.object({
            maSanBay: joi.string().required().messages(stringMsg('Mã sân bay',true)),
            thoiGianDung: joi.number().integer().positive().required().messages(positiveIntMsg('Thời gian dừng',true)),
            ghiChu: joi.string().messages(stringMsg('Ghi chú')).optional(),
        })).unique('maSanBay').messages({
            "array.base": "Danh sách sân bay trung gian phải là mảng",
            "array.unique": "Các mã sân bay trung gian phải khác nhau"
        }).optional(),
        hangVes: joi.array().items(joi.object({
            maHangVe: joi.string().required().messages(stringMsg('Mã hạng vé',true)),
            tongSoGhe: joi.number().integer().positive().required().messages(positiveIntMsg('Tổng số ghế',true))
        })).min(1).unique('maHangVe').required().messages({
            "any.required": "Vui lòng cung cấp danh sách hạng vé cho chuyến bay",
            "array.min": "Vui lòng cung cấp ít nhất 1 hạng vé chuyến bay",
            "array.base": "Danh sách hạng vé phải là mảng",
            "array.unique": "Các hạng vé phải khác nhau",
            
        })
    }).custom((value, helpers) => {
        //Không cho sân bay trung gian trùng sân bay đi / đến 
        if (value.sanBayTrungGians) {
            for (const sbtg of value.sanBayTrungGians) {
                if (
                    sbtg.maSanBay === value.maSanBayDi ||
                    sbtg.maSanBay === value.maSanBayDen
                ) {
                    return helpers.message(
                        'Sân bay trung gian không được trùng sân bay đi hoặc sân bay đến'
                    );
                }
            }
        }
        return value;
    }),
    taoSanBayTrungGianBody: joi.object({
        maSanBay: joi.string().required().messages(stringMsg('Mã sân bay',true)),
        thoiGianDung: joi.number().integer().positive().required().messages(positiveIntMsg('Thời gian dừng',true)),
        ghiChu: joi.string().optional().messages(stringMsg('Ghi chú')),
    }),
    taoSanBayTrungGianParams: joi.object({
        maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true)),
    }),
    taoHangVeChuyenBayBody: joi.object({
        maHangVe: joi.string().required().messages(stringMsg('Mã hạng vé',true)),
        tongSoGhe: joi.number().integer().positive().required().messages(positiveIntMsg('Tổng số ghế',true))
    }),
    taoHangVeChuyenBayParams: joi.object({
        maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
    }),
    layHangVeChuyenBayParams: joi.object({
        maChuyenBay: joi.string().required().messages(stringMsg('Mã chuyến bay',true))
    })

});

export default createChuyenBayValidator;