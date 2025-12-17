/**
 * @swagger
 * /hanh-khach:
 *   get:
 *     tags:
 *       - HanhKhach
 *     summary: Lấy danh sách hành khách
 *     responses:
 *       200:
 *         description: Lấy danh sách hành khách thành công
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
 *                   example: "Lấy danh sách hành khách thành công!"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/HanhKhachObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 *
 *   post:
 *     tags:
 *       - HanhKhach 
 *     summary: Tạo hành khách
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - hoTen
 *               - cmnd
 *               - dienThoai
 *               - email
 *             properties:
 *               hoTen:
 *                 type: string
 *                 example: "Nguyen Van A"
 *               cmnd:
 *                 type: string
 *                 example: "0123456789"
 *               dienThoai:
 *                 type: string
 *                 example: "0123456789"
 *               email:
 *                 type: string
 *                 example: "uqoTm@example.com"
 *     responses:
 *       201:
 *         description: Tạo hành khách thành công
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
 *                   example: "Tạo hành khách thành công!"
 *                 data:
 *                   $ref: "#/components/schemas/HanhKhachObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 * 
 * 
 */