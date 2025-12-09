/**
 * @swagger
 * /quy-dinh:
 *   get:
 *     tags:
 *       - QuyDinh
 *     summary: Lấy danh sách các quy định
 *     responses:
 *       200:
 *         description: Lấy danh sách quy định thành công
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
 *                   example: "Lấy danh sách quy định thành công!"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/QuyDinhObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 *
 * /quy-dinh/{tenQuyDinh}:
 *   put:
 *     tags:
 *       - QuyDinh 
 *     summary: Cập nhật quy định 
 *     description: | 
 *         Cập nhật quy định theo tên quy định
 *         Các quy định có thể cập nhật gồm: ThoiGianHuy, ThoiGianDungMin, ThoiGianDungMax,
 *          ThoiGianBayToiThieu, SanBayTrungGianToiDa
 *     parameters:
 *       - in: path
 *         name: tenQuyDinh
 *         required: true
 *         schema:
 *           type: string
 *         example: ThoiGianHuy
 *         description: Tên quy định cần cập nhật
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - giaTri
 *             properties:
 *               giaTri:
 *                 type: integer
 *                 example: 60
 *     responses:
 *       200:
 *         description: Thông tin số lượng sân bay
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
 *                   type: integer
 *                   example: 20
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 * 
 * /san-bay/{maSanBay}:
 *   get:
 *     tags:
 *       - SanBay 
 *     summary: Lấy thông tin sân bay theo maSanBay
 *     parameters:
 *       - in: path
 *         name: maSanBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã sân bay
 *         example: 1
 *     responses:
 *       200:
 *         description: Thông tin sân bay
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
 *                   $ref: "#/components/schemas/SanBayObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 *
 *   patch:
 *     tags:
 *       - SanBay 
 *     summary: Cập nhật sân bay
 *     parameters:
 *       - in: path
 *         name: maSanBay
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã sân bay cần cập nhật
 *         example: SB001
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CapNhatSanBayDto"
 *     responses:
 *       200:
 *         description: Cập nhật sân bay thành công
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
 *                   example: "Sân bay được cập nhật thành công"
 *                 data:
 *                   $ref: "#/components/schemas/SanBayObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 *
 *   delete:
 *     tags:
 *       - SanBay 
 *     summary: Xóa sân bay
 *     parameters:
 *       - in: path
 *         name: maSanBay
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã sân bay cần xóa
 *         example: SB001
 *     responses:
 *       200:
 *         description: Xóa sân bay thành công
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
 *                   example: "Xóa sân bay thành công"
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
