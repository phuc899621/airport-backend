import { errorHandler } from "../../core/errors/error_handler.js";

const createQuyDinhController = (quyDinhService) => ({
  capNhatQuyDinh: async (req, res, next) => {
    try {
      const { tenQuyDinh } = req.params;
      const quyDinh = await quyDinhService.capNhatQuyDinh(
        tenQuyDinh,
        req.body
      );
      res.status(200).json({
        success: true,
        message: "Cập nhật quy định thành công!",
        data: quyDinh,
      });
    } catch (err) {
      errorHandler(res, err);
    }
  },

  capNhatNhieuQuyDinh: async (req, res, next) => {
    try {
      const quyDinh = await quyDinhService.capNhatNhieuQuyDinh(req.body.quyDinhs);
      res.status(200).json({
        success: true,
        message: "Cập nhật quy định thành công!",
        data: quyDinh,
      });
    } catch (err) {
      errorHandler(res, err);
    }
  },

  layQuyDinh: async (req, res, next) => {
    try {
      const quyDinh = await quyDinhService.layQuyDinh(r);
      res.status(200).json({
        success: true,
        message: "Lấy quy định thành công!",
        data: quyDinh,
      });
    } catch (err) {
      errorHandler(res, err);
    }
  },

  layQuyDinhTheoTen: async (req, res, next) => {
    try {
      const { tenQuyDinh } = req.params;
      const quyDinh = await quyDinhService.layQuyDinhTheoTen(tenQuyDinh);
      res.status(200).json({
        success: true,
        message: "Lấy quy định theo tên thành công!",
        data: quyDinh.giaTri,
      });
    } catch (err) {
      errorHandler(res, err);
    }
  },
});

export default createQuyDinhController;
