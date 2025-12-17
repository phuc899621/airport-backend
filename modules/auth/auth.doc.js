/**
 * @swagger
 * /auth/nhan-vien/dang-nhap:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Đăng nhập tài khoản nhân viên
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tenDangNhap
 *               - matKhau
 *             properties:
 *               tenDangNhap:
 *                 type: string
 *                 example: "nv001nhp"
 *               matKhau:
 *                 type: string
 *                 example: "123"
 *     responses:
 *       201:
 *         description: Đăng nhập tài khoản nhân viên thành công
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
 *                   example: "Đăng nhập tài khoản nhân viên thành công!"
 *                 data:
 *                   type: object
 *                   example: {}
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 * */
