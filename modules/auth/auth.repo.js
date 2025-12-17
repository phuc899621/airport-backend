const createAuthRepo = (db) => ({
    laySTTNhanVienTiepTheo: async (tx) => {
        const executor = tx || db;
        const rows = await executor`
          SELECT nextval('nhanvien_seq') AS next_id;
        `;
        return rows[0]?.next_id || null;
    },
    layTaiKhoanTheoMaTaiKhoan: async (maTaiKhoan, tx) => {
        const executor = tx || db;
        const rows = await executor`
          SELECT * FROM "TAIKHOAN"
          WHERE "MaTK" = ${maTaiKhoan}
          LIMIT 1;
        `;
        return rows[0] || null;
    },
    layTaiKhoanNhanVienTheoTenDangNhap: async (tenDangNhap, tx) => {
        const executor = tx || db;
        const rows = await executor`
          SELECT * FROM "TAIKHOAN"
          WHERE "TenDangNhap" = ${tenDangNhap}
          AND "VaiTro" = 'nhan_vien'
          LIMIT 1;
        `;
        return rows[0] || null;
    },
    taoTaiKhoanNhanVien: async (data, tx) => {
        const executor = tx || db;
        const { maTaiKhoan, tenDangNhap, matKhau } = data;
        const rows = await executor`
          INSERT INTO "TAIKHOAN" ("MaTK", "TenDangNhap", "MatKhau", "VaiTro")
          VALUES (${maTaiKhoan}, ${tenDangNhap}, ${matKhau}, 'nhan_vien')
        `;
        return;
    },
});

export default createAuthRepo;