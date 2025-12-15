export const SanBayMapper = {
    toResponse: (row) => {
        return {
            maSanBay: row.MaSB,
            tenSanBay: row.TenSB,
            quocGia: row.QuocGia
        }
    }
}