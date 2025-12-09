/**
 * @swagger
 * /hanh-khach:
 *   get:
 *     tags:
 *       - HanhKhach
 *     summary: Lấy danh sách hành khách
 *     parameters:
 *       - in: query
 *         name: hoTen
 *         schema:
 *           type: string
 *         example: "Nguyen Van A"
 *       - in: query
 *         name: cmnd
 *         schema:
 *           type: string
 *         description: Lọc hành khách theo CMND 
 *         example: "0123456789"
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Lọc hành khách theo email
 *         example: "uqoTm@example.com"
 *       - in: query
 *         name: dienThoai
 *         schema:
 *           type: string
 *         description: Lọc hành khách theo số điện thoại
 *         example: "0123456789"
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
 *                   example: "Lấy sân bay thành công!"
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
 * /hanh-khach/{maHanhKhach}:
 *   get:
 *     tags:
 *       - HanhKhach 
 *     summary: Lấy 1 hành khách theo maHanhKhach
 *     parameters:
 *       - in: path
 *         name: maHanhKhach
 *         required: true
 *         schema:
 *           type: string
 *         example: "HK001"
 *     responses:
 *       200:
 *         description: Lấy 1 hành khách theo maHanhKhach
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
 *                   example: "Lấy hành khách thành công!"
 *                 data: 
 *                   $ref: "#/components/schemas/HanhKhachObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"

 *   delete:
 *     tags:
 *       - HanhKhach 
 *     summary: Xóa 1 hành khách theo maHanhKhach
 *     parameters:
 *       - in: path
 *         name: maHanhKhach
 *         required: true
 *         schema:
 *           type: string
 *         example: "HK001"
 *     responses:
 *       200:
 *         description: Xóa 1 hành khách theo maHanhKhach
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
 *                   example: "Xóa hành khách thành công!"
 *                 data: 
 *                   type: object
 *                   example: {}
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 * 
 */