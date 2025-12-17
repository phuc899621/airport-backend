
import { errorHandler } from "../../core/errors/error_handler.js";


const createAuthController = (service) => ({
    dangNhapNhanVien: async (req, res) => {
        try {
            const token = await service.dangNhapNhanVien(req.body);
            req.session.token = token;
            res.status(201).json({
                success: true,
                message: 'Đăng nhập thành công',
                data: {}
            });
        } catch (err) {
            errorHandler(res, err);
        }
    },
    taoTaiKhoanNhanVien: async (req, res) => {
        try {
            await service.taoTaiKhoanNhanVien(req.body);
            res.status(201).json({
                success: true,
                message: 'Tạo tài khoản nhân viên thành công',
                data: {}
            });
        } catch (err) {
            errorHandler(res, err);
        }
    },
    kiemTraQuyenNhanVien: async (req, res) => {
        try {
            res.status(201).json({
                success: true,
                message: 'Kiểm tra quyền',
                data: {
                    maTaiKhoan: req.maTaiKhoan,
                    quyen: req.vaiTro
                }
            });
        } catch (err) {
            errorHandler(res, err);
        }
    }
});

export default createAuthController;