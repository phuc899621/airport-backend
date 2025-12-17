
/**
 * @swagger
 * /chuyen-bay:
 *   get:
 *     tags:
 *       - ChuyenBay 
 *     summary: Lấy lịch các chuyến bay
 *     parameters:
 *     responses:
 *       200:
 *         description: Lấy lịch chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Lấy lịch chuyến bay thành công!
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/LichChuyenBayObject"
 *
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */

/**
 * @swagger
 * /chuyen-bay/{maChuyenBay}:
 *   get:
 *     tags:
 *       - ChuyenBay 
 *     summary: Lấy thông tin một chuyến bay
 *     description: Lấy chi tiết thông tin một chuyến bay theo mã chuyến bay.
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã chuyến bay
 *         example: "CB001"
 *     responses:
 *       200:
 *         description: Lấy chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Lấy chuyến bay thành công!"
 *                 data:
 *                   $ref: "#/components/schemas/LichChuyenBayChiTietObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */
/**
 * @swagger
 * /chuyen-bay:
 *   post:
 *     tags:
 *       - ChuyenBay 
 *     summary: Tạo chuyến bay mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: 
 *               - maChuyenBay
 *               - maSanBayDi
 *               - maSanBayDen
 *               - thoiGianBay
 *               - ngayGio
 *               - giaVeCoBan
 *               - hangVes
 *             properties:
 *               maChuyenBay:
 *                 type: string
 *                 example: "CB001"
 *               maSanBayDi:
 *                 type: string
 *                 example: "SB001"
 *               maSanBayDen:
 *                 type: string
 *                 example: "SB002"
 *               thoiGianBay:
 *                 type: integer
 *                 example: 240
 *               ngayGio:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-12-02T03:30:00.000Z"
 *               giaVeCoBan:
 *                 type: integer
 *                 example: 100000
 *               sanBayTrungGians:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - maSanBay
 *                     - thoiGianDung
 *                   properties:
 *                     maSanBay:
 *                       type: string
 *                       example: "SB001"
 *                     thoiGianDung:
 *                       type: integer
 *                       example: 20
 *                     ghiChu:
 *                       type: string
 *                       example: "Ghi chú"
 *               hangVes: 
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - maHangVe
 *                     - tongSoGhe
 *                   properties:
 *                     maHangVe:
 *                       type: string
 *                       example: "HV001"
 *                     tongSoGhe:
 *                       type: integer
 *                       example: 14
 *     responses:
 *       201:
 *         description: Tạo chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Tạo chuyến bay thành công!"
 *                 data:
 *                   type: object
 *                   example: {}
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */
