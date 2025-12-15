import { errorHandler } from "../../core/errors/error_handler.js";


const createSanBayController = (service) => ({
  taoSanBay: async (req, res, next) => {
    try {
      const sanBay = await service.taoSanBay(req.body);
      res.status(201).json({
        success: true,
        message: "Tạo sân bay thành công!",
        data: sanBay
      });
    } catch (err) {
      errorHandler(res, err);
    }
  },

  laySanBay: async (req, res, next) => {
    try {
      const { maSanBay } = req.params;
      const sanBay = await service.laySanBay(maSanBay, req.query);
      res.status(200).json({
        success: true,
        message: "Lấy sân bay thành công!",
        data: sanBay
      });
    } catch (err) {
      errorHandler(res, err);
    }
  },

  
});

export default createSanBayController;
