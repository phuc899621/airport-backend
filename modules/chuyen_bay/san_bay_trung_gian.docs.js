/**
 * @swagger
 * /chuyen-bay/{maChuyenBay}/san-bay:
 *   get:
 *     tags:
 *       - ChuyenBay [SanBayTrungGian]
 *     summary: Lấy danh sách sân bay trung gian của chuyến bay
 *     description: Lấy danh sách các sân bay trung gian của chuyến bay theo maChuyenBay.
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã chuyến bay
 *         example: 10
 *     responses:
 *       200:
 *         description: Lấy sân bay trung gian thành công!
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
 *                   example: "Lấy sân bay trung gian thành công!"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/SanBayTrungGianChiTietObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */

/**
 * @swagger
 * /chuyen-bay/{maChuyenBay}/san-bay/{maSanBay}:
 *   get:
 *     tags:
 *       - ChuyenBay [SanBayTrungGian]
 *     summary: Lấy chi tiết sân bay trung gian cụ thể của chuyến bay
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã chuyến bay
 *         example: 10
 *       - in: path
 *         name: maSanBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã sân bay
 *         example: 10
 *     responses:
 *       200:
 *         description: Lấy sân bay trung gian thành công!
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
 *                   example: "Lấy sân bay trung gian thành công!"
 *                 data:
 *                   $ref: "#/components/schemas/SanBayTrungGianChiTietObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */
/**
 * @swagger
 * /chuyen-bay/{maChuyenBay}/san-bay:
 *   post:
 *     tags:
 *       - ChuyenBay [SanBayTrungGian]
 *     summary: Thêm sân bay trung gian cho chuyến bay cụ thể
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã chuyến bay
 *         example: CB001
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - maSanBay
 *               - thoiGianDung
 *             properties:
 *               maSanBay:
 *                 type: integer
 *                 example: 1
 *                 description: Mã sân bay
 *               thoiGianDung:
 *                 type: integer
 *                 example: 16
 *                 description: Thời gian dừng (tính bằng phút) nằm trong 10-20phút
 *               ghiChu:
 *                 type: string
 *                 example: ""
 *                 description: Ghi chú cho sân bay trung gian, có thể bỏ qua
 *     responses:
 *       201:
 *         description: Tạo sân bay trung gian cho chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Tạo sân bay trung gian thành công!"
 *                 data:
 *                   $ref: "#/components/schemas/SanBayTrungGianObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */

/**
 * @swagger
 * /chuyen-bay/{maChuyenBay}/san-bay/{maSanBay}:
 *   patch:
 *     tags:
 *       - ChuyenBay [SanBayTrungGian]
 *     summary: Cập nhật sân bay trung gian cho chuyến bay
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã chuyến bay
 *         example: 1
 *       - in: path
 *         name: maSanBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã sân bay
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               thoiGianDung:
 *                 type: integer
 *                 example: 20
 *                 description: Thời gian dừng (tính bằng phút) nằm trong 10-20phút
 *               ghiChu:
 *                 type: string
 *                 example: ""
 *                 description: Ghi chú cho sân bay trung gian, có thể bỏ qua
 *     responses:
 *       200:
 *         description: Cập nhật sân bay trung gian cho chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Cập nhật sân bay trung gian thành công!"
 *                 data:
 *                   $ref: "#/components/schemas/SanBayTrungGianObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */


/**
 * @swagger
 * /chuyen-bay/{maChuyenBay}/san-bay/{maSanBay}:
 *   delete:
 *     tags:
 *       - ChuyenBay [SanBayTrungGian]
 *     summary: Xóa sân bay trung gian
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã chuyến bay 
 *         example: 10
 *       - in: path
 *         name: maSanBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã sân bay 
 *         example: 10
 *     responses:
 *       200:
 *         description: Xóa sân bay trung gian thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Xóa sân bay trung gian thành công!"
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

