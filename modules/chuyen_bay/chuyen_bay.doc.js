
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
 *           type: integer
 *         description: Mã chuyến bay
 *         example: 10
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
 *                   $ref: "#/components/schemas/LichChuyenBayObject"
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
 *             $ref: "#/components/schemas/TaoChuyenBayDto"
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
 *                   $ref: "#/components/schemas/ChuyenBayObject"
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
 *   patch:
 *     tags:
 *       - ChuyenBay 
 *     summary: Cập nhật thông tin chuyến bay
 *     description: API cập nhật thông tin chi tiết của một chuyến bay.
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã chuyến bay cần cập nhật
 *         example: 10
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CapNhatChuyenBayDto"
 *     responses:
 *       200:
 *         description: Cập nhật chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Cập nhật chuyến bay thành công!"
 *                 data:
 *                   $ref: "#/components/schemas/ChuyenBayObject"

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
 *   delete:
 *     tags:
 *       - ChuyenBay
 *     summary: Xóa chuyến bay
 *     description: API xóa một chuyến bay theo mã chuyến bay.
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
 *         description: Xóa chuyến bay thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Xóa chuyến bay thành công!"
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
