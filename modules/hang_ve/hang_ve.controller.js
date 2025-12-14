
import { errorHandler } from "../../core/errors/error_handler.js";

const createHangVeController = (hangVeService) => ({

  layHangVeTheoMaHangVe: async (req, res, next) => {
    try {
      const { maHangVe } = req.params;
      const result = await hangVeService.layHangVeTheoMaHangVe(maHangVe);
      return res.status(200).json({
        success: true,
        message: "Lấy hạng vé theo mã hạng vé thành công!",
        data: result
      });
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  layHangVe: async (req, res, next) => {
    try {
      const result = await hangVeService.layHangVe();
      return res.status(200).json({
        success: true,
        message: "Lấy hạng vé thành công!",
        data: result
      });
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  taoHangVe: async (req, res, next) => {
    try {
      const data = req.body;
      const result = await hangVeService.taoHangVe(data);
      return res.status(201).json({
        success: true,
        message: "Tạo hạng vé thành công!",
        data: result
      });
    } catch (error) {
      return errorHandler(res, error);
    }
  }

});

export default createHangVeController;
