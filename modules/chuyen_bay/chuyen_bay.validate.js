import joi from "joi";

export const layLichChuyenBayQuerySchema = joi.object({
    maSanBayDi: joi.string().optional().messages({
      "string.base": "Mã sân bay đi phải là số nguyên dương",
    }),
    maSanBayDen: joi.string().optional().messages({
        "string.base": "Mã sân bay đến phải là số nguyên dương",
    }),
    tenSanBayDi: joi.string().optional().messages({
        "string.base": "Tên sân bay đi phải là một chuỗi",
    }),
    tenSanBayDen: joi.string().optional().messages({
        "string.base": "Tên sân bay đến phải là một chuỗi",
    }),

})

export const layChuyenBayParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages({
        "string.base": "Mã chuyến bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã chuyến bay",
    })
    
})
export const layDanhSachSanBayTrungGianParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages({
        "string.base": "Mã chuyến bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã chuyến bay",
    })
})
export const laySanBayTrungGianParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages({
        "string.base": "Mã chuyến bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã chuyến bay",
    }),
    maSanBay: joi.string().required().messages({
        "string.base": "Mã sân bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã sân bay",
    })
})


export const taoChuyenBayBodySchema = joi.object({
    maSanBayDi: joi.string().required().messages({
        "string.base": "Mã sân bay đi phải là một chuỗi",
        "any.required": "Vuiý cung cấp mã sân bay đi",
    }),
    maSanBayDen: joi.string().required().messages({
        "string.base": "Mã sân bay đến phải là một chuỗi",
        "any.required": "Vuiý cung cấp má sân bay đến",
    }),
    ngayGio: joi.date().iso().required().messages({
        "date.base": "Ngày giờ bay phải là kiểu ngày hợp lệ",
        "date.iso": "Ngày giờ bay phải đúng chuẩn ISO",
        "any.required": "Vui lòng cung cấp ngày giờ bay",
    }),
    thoiGianBay: joi.number().integer().positive().required().messages({
        "number.base": "Thời gian bay phải là số nguyên dương",
        "number.integer": "Thời gian bay phải là số nguyên dương",
        "number.positive": "Thời gian bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp thời gian bay",
    }),
    giaVe: joi.number().integer().positive().required().messages({
        "number.base": "Giá vé phải là số nguyên dương",
        "number.integer": "Giá vé phải là số nguyên dương",
        "number.positive": "Giá vé phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp giá vé",
    }),
    slGheHang1: joi.number().integer().positive().required().messages({
        "number.base": "Số lần ghe hàng 1 phải là số nguyên dương",
        "number.integer": "Số lần ghe hàng 1 phải là số nguyên dương",
        "number.positive": "Số lần ghe hàng 1 phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp số lượng ghế hạng 1",
    }),
    slGheHang2: joi.number().integer().positive().required().messages({
        "number.base": "Số lần ghe hàng 2 phải là số nguyên dương",
        "number.integer": "Số lần ghe hàng 2 phải là số nguyên dương",
        "number.positive": "Số lần ghe hàng 2 phải là số nguyên dương",
        "any.required": "Vuiź cung cấp số lượng ghế hạng 2",
    })

})

export const taoSanBayTrungGianBodySchema = joi.object({
    maSanBay: joi.string().required().messages({
        "string.base": "Mã sân bay phải là một chuỗi",
        "any.required": "Vuiý cung cấp má sân bay",
    }),
    thoiGianDung: joi.number().integer().positive().required().messages({
        "number.base": "Thời gian dùng phải là số nguyên dương",
        "number.integer": "Thời gian dùng phải là số nguyên dương",
        "number.positive": "Thời gian dùng phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp thời gian dừng",
    }),
    ghiChu: joi.string().optional().messages({
        "string.base": "Ghi chú phải là một chuỗi",
    })
})
export const taoSanBayTrungGianParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages({
        "string.base": "Mã chuyến bay phải là một chuỗi",
        "any.required": "Vuiý cung cấp má chuyến bay",
    })
})


export const capNhatChuyenBayBodySchema = joi.object({
    maSanBayDi: joi.string().optional().messages({
        "string.base": "Mã sân bay đi phải là số nguyên dương",
    }),
    maSanBayDen: joi.string().optional().messages({
        "string.base": "Mã sân bay đến phải là số nguyên dương",
    }),
    ngayGio: joi.date().iso().optional().messages({
        "date.base": "Ngày giờ bay phải là kiểu ngày hợp lệ",
        "date.iso": "Ngày giờ bay phải đúng chuẩn ISO",
    }),
    thoiGianBay: joi.number().integer().positive().optional().messages({
        "number.base": "Thoi gian bay phai la so nguyen duong",
        "number.integer": "Thoi gian bay phai la so nguyen duong",
        "number.positive": "Thoi gian bay phai la so nguyen duong",
    }),
    giaVe: joi.number().integer().positive().optional().messages({
        "number.base": "Giá vé phải là số nguyên dương",
        "number.integer": "Giá vé phải là số nguyên dương",
        "number.positive": "Giá vé phải là số nguyên dương",
    }),
    slGheHang1: joi.number().integer().positive().optional().messages({
        "number.base": "Số lần ghe hàng 1 phải là số nguyên dương",
        "number.integer": "Số lần ghe hàng 1 phải là số nguyên dương",
        "number.positive": "Số lần ghe hàng 1 phải là số nguyên dương",
    }),
    slGheHang2: joi.number().integer().positive().optional().messages({
        "number.base": "Số lần ghe hàng 2 phải là số nguyên dương",
        "number.integer": "Số lần ghe hàng 2 phải là số nguyên dương",
        "number.positive": "Số lần ghe hàng 2 phải là số nguyên dương",
    })
})

export const capNhatChuyenBayParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages({
        "string.base": "Mã chuyến bay phải là một chuỗi",
        "any.required": "Vui lòng cung cấp mã chuyến bay",
    })
})

export const capNhatSanBayTrungGianParamsSchema = joi.object({
    maChuyenBay: joi.string().required().messages({
        "string.base": "Mã chuyến bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã chuyến bay",
    }),
    maSanBay: joi.string().required().messages({
        "string.base": "Mã sân bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã sân bay",
    })
})

export const capNhatSanBayTrungGianBodySchema = joi.object({
    thoiGianDung: joi.number().integer().positive().optional().messages({
        "number.base": "Thời gian dừng phải là số nguyên dương",
        "number.integer": "Thời gian dừng phải là số nguyên dương",
        "number.positive": "Thời gian dừng phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp thời gian dừng",
    }),
    ghiChu: joi.string().optional().messages({
        "string.base": "Ghi chú phải là một chuỗi",
    })
})


export const xoaChuyenBayParamsSchema= joi.object({
    maChuyenBay: joi.string().required().messages({
        "string.base": "Mã chuyến bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã chuyến bay",
    })
})
export const xoaSanBayTrungGianParamsSchema= joi.object({
    maChuyenBay: joi.string().required().messages({
        "string.base": "Mã chuyến bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã chuyến bay",
    }),
    maSanBay: joi.string().required().messages({
        "string.base": "Mã sân bay phải là số nguyên dương",
        "any.required": "Vui lòng cung cấp mã sân bay",
    })
})