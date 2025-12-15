// ve.controller.js
import { errorHandler } from "../../core/errors/error_handler.js";

const createVeController = (veService) => ({
    muaVe: async (req, res) => {
        try {
            const result = await veService.muaVe(req.body);
            res.status(201).json({
                success: true,
                message: "Mua vé thành công!",
                data: result
            });
        } catch (err) {
            errorHandler(res, err);
        }
    },

    datVe: async (req, res) => {
        try {
            const result = await veService.datVe(req.body);
            res.status(201).json({
                success: true,
                message: "Đặt vé thành công!",
                data: result
            });
        } catch (err) {
            errorHandler(res, err);
        }
    },

    layVe: async (req, res) => {
        try {
            const result = await veService.layVe();
            res.status(200).json({
                success: true,
                message: "Lấy vé thành công!",
                data: result
            });
        } catch (err) {
            errorHandler(res, err);
        }
    },

    thanhToanVe: async (req, res) => {
        try {
            const result = await veService.thanhToanVe(req.params.maVe);
            res.status(200).json({
                success: true,
                message: "Thanh toán vé thành công!",
                data: result
            });
        } catch (err) {
            errorHandler(res, err);
        }
    },

    huyVe: async (req, res) => {
        try {
            const result = await veService.huyVe(req.params.maVe);
            res.status(200).json({
                success: true,
                message: "Hủy vé thành công!",
                data: result
            });
        } catch (err) {
            errorHandler(res, err);
        }
    }
});

export default createVeController;
