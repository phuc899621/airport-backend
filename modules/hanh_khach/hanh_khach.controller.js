import { errorHandler } from "../../core/errors/error_handler.js";

 const createHanhKhachController = (hanhKhachService) => ({
  layHanhKhach: async (req, res) => {
    try {
      const { maHanhKhach } = req.params;
      const hanhKhach = await hanhKhachService.layHanhKhach(maHanhKhach, req.query);
      res.status(200).json({
        success: true,
        message: "Lấy hành khách thành công!",
        data: hanhKhach,
      });
    } catch (err) {
      errorHandler(res, err);
    }
  },

  taoHanhKhach: async (req, res) => {
    try {
      const hanhKhach = await hanhKhachService.taoHanhKhach(req.body);
      res.status(201).json({
        success: true,
        message: "Tạo hành khách thành công!",
        data: hanhKhach,
      });
    } catch (err) {
      errorHandler(res, err);
    }
  },
});

export default createHanhKhachController;