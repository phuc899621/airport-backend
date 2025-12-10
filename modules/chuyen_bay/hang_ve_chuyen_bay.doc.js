
/**
 * @swagger
 *  /chuyen-bay/{maChuyenBay}/hang-ve:
 *   get:
 *     tags:
 *       - ChuyenBay [HangVeChuyenBay]
 *     summary: Lấy danh sách hạng vé của chuyến bay cụ thể
 *     responses:
 *       200:
 *         description: Lấy danh sách hạng vé của chuyến bay cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Lấy hạng vé chuyến bay thành công!"
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: "#/components/schemas/HangVeChuyenBayObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */


/**
 * @swagger
 *  /chuyen-bay/{maChuyenBay}/hang-ve:
 *   post:
 *     tags:
 *       - ChuyenBay [HangVeChuyenBay]
 *     summary: Tạo hạng vé chuyến bay mới cho chuyến bay cụ thể
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
 *               - maHangVe
 *             properties:
 *               maHangVe:
 *                 type: string
 *                 example: "HV001"
 *                 description: Mã hạng vé
 *               tongSoGhe:
 *                 type: integer
 *                 example: 14
 *     responses:
 *       201:
 *         description: Tạo hạng vé chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Tạo hạng vé chuyến bay thành công!"
 *                 data:
 *                   $ref: "#/components/schemas/HangVeChuyenBayObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */

/**
 * @swagger
 *  /chuyen-bay/{maChuyenBay}/hang-ve/{maHangVe}:
 *   patch:
 *     tags:
 *       - ChuyenBay [HangVeChuyenBay]
 *     summary: Cập nhật hạng vé chuyến bay
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã chuyến bay
 *         example: CB001
 *       - in: path
 *         name: maHangVe
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã hạng vé
 *         example: HV001
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tongSoGhe:
 *                 type: integer
 *                 example: 14
 *     responses:
 *       200:
 *         description: Cập nhật hạng vé chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Cập nhật hạng vé chuyến bay thành công!"
 *                 data:
 *                   $ref: "#/components/schemas/HangVeChuyenBayObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */

/**
 * @swagger
 *  /chuyen-bay/{maChuyenBay}/hang-ve:
 *   delete:
 *     tags:
 *       - ChuyenBay [HangVeChuyenBay]
 *     summary: Xóa tất cả hạng vé chuyến bay của 1 chuyến bay cụ thể
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã chuyến bay
 *         example: CB001
 *     responses:
 *       200:
 *         description: Xóa tất cả hạng vé chuyến bay của 1 chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Xóa tất cả hạng vé chuyến bay của 1 chuyến bay thành công!"
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

/**
 * @swagger
 *  /chuyen-bay/{maChuyenBay}/hang-ve/{maHangVe}:
 *   delete:
 *     tags:
 *       - ChuyenBay [HangVeChuyenBay]
 *     summary: Xóa 1 hạng vé chuyến bay của 1 chuyến bay cụ thể
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã chuyến bay
 *         example: CB001
 *       - in: path
 *         name: maHangVe
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã hạng vé
 *         example: HV001
 *     responses:
 *       200:
 *         description: Xóa 1 hạng vé chuyến bay của 1 chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Xóa 1 hạng vé chuyến bay của 1 chuyến bay thành công!"
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

