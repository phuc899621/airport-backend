export const VeMapper = {
    toResponse: (row) => {
        return {
            maVe: row.MaVe,
            maChuyenBay: row.MaCB,
            tenHangVe: row.TenHV,
            giaTien: row.GiaTien,
            trangThai: row.TrangThai,
            maHanhKhach: row.MaHK,
            cmnd: row.cmnd,
            dienThoai: row.DienThoai,
            ngayVe: row.NgayVe
        }
    }
}

