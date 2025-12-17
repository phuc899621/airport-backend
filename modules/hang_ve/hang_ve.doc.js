/**
 * @swagger
 * /hang-ve:
 *   get:
 *     tags:
 *       - HangVe
 *     summary: Lấy danh sách các hạng vé
 *     responses:
 *       200:
 *         description: Lấy danh sách hạng vé thành công
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
 *                   example: "Lấy danh sách hạng vé thành công!"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/HangVeObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 *   post:
 *     tags: 
 *       - HangVe 
 *     summary: Thêm hạng vé mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tenHangVe
 *               - heSoGia
 *             properties:
 *               tenHangVe:
 *                 type: string
 *                 example: 'Hạng nhất'
 *               heSoGia:
 *                 type: integer
 *                 example: 1.25
 *     responses:
 *       200:
 *         description: Thêm hạng vé mới thành công
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
 *                   example: "Tạo hạng vé mới thành công!"
 *                 data: 
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/HangVeObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 *
 * /hang-ve/{maHangVe}:
 *   get:
 *     tags:
 *       - HangVe 
 *     summary: Lấy hạng vé theo mã hạng vé
 *     parameters:
 *       - in: path
 *         name: maHangVe
 *         required: true
 *         schema:
 *           type: string
 *         example: HV001
 *     responses:
 *       200:
 *         description: Lấy hạng vé theo mã hạng vé thành công
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
 *                   example: "Lấy hạng vé theo mã hạng vé thành công!"
 *                 data: 
 *                   $ref: "#/components/schemas/HangVeObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 * */
