export const QuyDinhMapper = {
    toResponse: (row) => {
        return {
            tenQuyDinh:row.TenTS,
            giaTri:row.GiaTri
        }
    }
}