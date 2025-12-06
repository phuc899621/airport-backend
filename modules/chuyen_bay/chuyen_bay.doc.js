
/**
 * @swagger
 * /chuyen-bay:
 *   get:
 *     tags:
 *       - ChuyenBay 
 *     summary: Lấy lịch các chuyến bay
 *     description: | 
 *         Trả về danh sách lịch chuyến bay theo sân bay đi, sân bay đến và ngày.
 *         Có thể lọc theo mã sân bay đi và đến, mã máy bay, ngày giờ bay, 
 *         tên sân bay đi và đến, loại máy bay, mã chuyến bay hiển thị
 *     parameters:
 *       - in: query
 *         name: maSanBayDi
 *         schema:
 *           type: integer
 *         description: Lọc theo mã sân bay đi
 *         example: 1
 *       - in: query
 *         name: maSanBayDen
 *         schema:
 *           type: integer
 *         description: Lọc theo mã sân bay đến
 *         example: 7
 *       - in: query
 *         name: maMayBay
 *         schema:
 *           type: integer
 *         description: Lọc theo máy bay
 *         example: 1
 *       - in: query
 *         name: loaiMayBay
 *         schema:
 *           type: string
 *         description: Lọc theo loại máy bay
 *         example: Boeing 747
 *       - in: query
 *         name: tenSanBayDi
 *         schema:
 *           type: string
 *         description: Lọc theo tên sân bay đi
 *         example: Sân bay Nội Bài
 *       - in: query
 *         name: tenSanBayDen
 *         schema:
 *           type: string
 *         description: Lọc theo tên sân bay đến
 *         example: Sân bay Hà Nội
 *       - in: query
 *         name: maHienThi
 *         schema:
 *           type: string
 *         description: Lọc theo mã chuyến bay hiển thị
 *         example: VN123
 *       - in: query
 *         name: ngayGio
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Lọc theo thời gian khởi hành
 *         example: "2025-12-01T11:40:52.000Z"
 *
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
 * /chuyen-bay/{maChuyenBay}/san-bay:
 *   get:
 *     tags:
 *       - ChuyenBay 
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
 *       - ChuyenBay 
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
 * /chuyen-bay:
 *   post:
 *     tags:
 *       - ChuyenBay [Admin]
 *     summary: Tạo chuyến bay mới
 *     description: API dùng để tạo một chuyến bay mới.
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
 * /chuyen-bay/{maChuyenBay}/san-bay:
 *   post:
 *     tags:
 *       - ChuyenBay [Admin]
 *     summary: Thêm sân bay trung gian cho chuyến bay cụ thể
 *     parameters:
 *       - in: path
 *         name: maChuyenBay
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã chuyến bay
 *         example: 1
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
 *                 example: 20
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
 * /chuyen-bay/{maChuyenBay}:
 *   patch:
 *     tags:
 *       - ChuyenBay [Admin]
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
 * /chuyen-bay/{maChuyenBay}/san-bay/{maSanBay}:
 *   patch:
 *     tags:
 *       - ChuyenBay [Admin]
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
 * /chuyen-bay/{maChuyenBay}:
 *   delete:
 *     tags:
 *       - ChuyenBay [Admin]
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

/**
 * @swagger
 * /chuyen-bay/{maChuyenBay}/san-bay/{maSanBay}:
 *   delete:
 *     tags:
 *       - ChuyenBay [Admin]
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
