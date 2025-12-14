export const HangVeMapper = {
    toResponse: (row) => {
        return {
            maHangVe: row.MaHV,
            tenHangVe: row.TenHV,
            heSoGia: row.HeSoGia
        }
    }
}