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
 *   patch:
 *     tags: 
 *       - QuyDinh 
 *     summary: Cập nhật danh sách các quy định 
 *     description: | 
 *         Cập nhật danh sách quy định gửi lên
 *         Các quy định có thể cập nhật gồm: ThoiGianHuy, ThoiGianDungMin, ThoiGianDungMax,
 *          ThoiGianBayToiThieu, SanBayTrungGianToiDa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quyDinhs
 *             properties:
 *               quyDinhs:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - tenQuyDinh
 *                     - giaTri
 *                   properties:
 *                     tenQuyDinh:
 *                       type: string
 *                       example: ThoiGianHuy
 *                     giaTri:
 *                       type: integer
 *                       example: 60
 *     responses:
 *       200:
 *         description: Cập nhật các quy định thành công
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
 *                   example: "Cập nhật các quy định thành công!"
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
 *   get:
 *     tags:
 *       - QuyDinh 
 *     summary: Lấy giá trị của quy định theo tên
 *     description: | 
 *         Các quy định có thể lấy giá trị gồm: ThoiGianHuy, ThoiGianDungMin, ThoiGianDungMax,
 *          ThoiGianBayToiThieu, SanBayTrungGianToiDa
 *     parameters:
 *       - in: path
 *         name: tenQuyDinh
 *         required: true
 *         schema:
 *           type: string
 *         example: ThoiGianHuy
 *         description: Tên quy định cần lấy giá trị
 *     responses:
 *       200:
 *         description: Lấy quy định theo tên thành công
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
 *                   example: "Lấy quy định theo tên thành công!"
 *                 data: 
 *                   type: integer
 *                   example: 60
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
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
 *         description: Cập nhật quy định thành công
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
 *                   example: "Cập nhật quy định thành công!"
 *                 data: 
 *                   $ref: "#/components/schemas/QuyDinhObject"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 * 
 * */
