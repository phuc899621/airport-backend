export const HanhKhachMapper = {
    toResponse: (row) => {
        return {
            maHanhKhach: row.MaHK,
            hoTen: row.HoTen,
            cmnd: row.CMND,
            dienThoai: row.DienThoai,
            email: row.Email
        }
    }
}