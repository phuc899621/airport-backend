/**
 * @swagger
 * components:
 *   schemas:
 *     SanBayTrungGianChiTietObject:
 *       type: object
 *       properties:
 *         maChuyenBay:
 *           type: string
 *           description: Mã chuyến bay
 *           example: "CB001"
 *         maSanBay:
 *           type: string
 *           description: Mã sân bay thuộc chuyến bay
 *           example: "SB001"
 *         tenSanBay:
 *           type: string
 *           description: Tên sân bay thuộc sân bay trung gian của chuyến bay
 *           example: "Sân bay Quốc tế Nội Bài"
 *         quocGia:
 *           type: string
 *           description: Quốc gia sân bay thuộc sân bay trung gian của chuyến bay
 *           example: "Việt Nam"
 *         thuTuDung:
 *           type: integer
 *           description: Thứ tự dừng sân bay trong chuyến bay (thường chỉ có 1 và 2)
 *           example: 1
 *         thoiGianDung:
 *           type: integer
 *           description: Thời gian dừng sân bay trong chuyến bay (tính bằng phút)
 *           example: 20
 *         ghiChu:
 *           type: string
 *           example: ""
 *     SanBayTrungGianObject:
 *       type: object
 *       properties:
 *         maChuyenBay:
 *           type: string
 *           description: Mã chuyến bay
 *           example: "CB001"
 *         maSanBay:
 *           type: string
 *           description: Mã sân bay thuộc chuyến bay
 *           example: "SB001"
 *         thuTuDung:
 *           type: integer
 *           description: Thứ tự dừng sân bay trong chuyến bay (thường chỉ có 1 và 2)
 *           example: 1
 *         thoiGianDung:
 *           type: integer
 *           description: Thời gian dừng sân bay trong chuyến bay (tính bằng phút)
 *           example: 20
 * 
 *     LichChuyenBayChiTietObject:
 *       type: object
 *       properties:
 *         maChuyenBay:
 *           type: string
 *           description: Mã chuyến bay
 *           example: "CB001"
 *         maSanBayDi:
 *           type: string
 *           description: Mã sân bay đi
 *           example: "SB001"
 *         maSanBayDen:
 *           type: string
 *           description: Mã sân bay đến
 *           example: "SB002"
 *         tenSanBayDi:
 *           type: string
 *           description: Tên sân bay đi
 *           example: "Sân bay Quốc tế Nội Bài"
 *         tenSanBayDen:
 *           type: string
 *           description: Tên sân bay đến
 *           example: "Sân bay Quốc tế Hà Nội"
 *         thoiGianBay:
 *           type: integer
 *           description: Thời gian bay chuyến bay (tính bằng phút)
 *           example: 240
 *         giaVeCoBan:
 *           type: integer
 *           description: Gia ve cơ bản
 *           example: 100000
 *         ngayGio:
 *           type: string
 *           format: date-time
 *           description: "Thời gian khởi hành"
 *           example: "2025-12-02T03:30:00.000Z"
 *         tongSoGhe:
 *           type: integer
 *           example: 50
 *         tongSoGheDaDat:
 *           type: integer
 *           example: 0
 *         tongSoGheConLai:
 *           type: integer
 *           example: 50
 *         hangVeChuyenBay:
 *           type: array
 *           items:
 *             $ref: "#/components/schemas/HangVeChuyenBayChiTietObject"
 *         sanBayTrungGian:
 *           type: array
 *           items:
 *             $ref: "#/components/schemas/SanBayTrungGianChiTietObject"
 *     
 *     LichChuyenBayObject:
 *       type: object
 *       properties:
 *         maChuyenBay:
 *           type: string
 *           description: Mã chuyến bay
 *           example: "CB001"
 *         maSanBayDi:
 *           type: string
 *           description: Mã sân bay đi
 *           example: "SB001"
 *         maSanBayDen:
 *           type: string
 *           description: Mã sân bay đến
 *           example: "SB002"
 *         tenSanBayDi:
 *           type: string
 *           description: Tên sân bay đi
 *           example: "Sân bay Quốc tế Nội Bài"
 *         tenSanBayDen:
 *           type: string
 *           description: Tên sân bay đến
 *           example: "Sân bay Quốc tế Hà Nội"
 *         thoiGianBay:
 *           type: integer
 *           description: Thời gian bay chuyến bay (tính bằng phút)
 *           example: 240
 *         giaVeCoBan:
 *           type: integer
 *           description: Gia ve cơ bản
 *           example: 100000
 *         ngayGio:
 *           type: string
 *           format: date-time
 *           description: "Thời gian khởi hành"
 *           example: "2025-12-02T03:30:00.000Z"
 *         tongSoGhe:
 *           type: integer
 *           example: 50
 *         tongSoGheDaDat:
 *           type: integer
 *           example: 0
 *         tongSoGheConLai:
 *           type: integer
 *           example: 50
 * 
 *     ChuyenBayObject:
 *       type: object
 *       properties:
 *         maChuyenBay:
 *           type: string
 *           example: "CB001"
 *         maSanBayDi:
 *           type: string
 *           example: "SB001"
 *         maSanBayDen:
 *           type: string
 *           example: "SB002"
 *         giaVe:
 *           type: integer
 *           example: 1500000
 *         ngayGio:
 *           type: string
 *           format: date-time
 *           description: "Thời gian khỏi hành"
 *           example: "2025-12-02T03:30:00.000Z"
 *         thoiGianBay:
 *           type: integer
 *           example: 180

 *     HangVeChuyenBayChiTietObject:
 *       type: object
 *       properties:
 *         maHangVe:
 *           type: string
 *           example: "HV001"
 *         tenHangVe:
 *           type: string
 *           example: "Hạng nhất"
 *         heSoGia:
 *           type: integer
 *           example: 1
 *         giaVeTheoHang:
 *           type: integer
 *           example: 1500000
 *         tongSoGhe:
 *           type: integer
 *           example: 14
 *         soGheConLai:
 *           type: integer
 *           example: 14

 *     HangVeChuyenBayObject:
 *       type: object
 *       properties:
 *         maHangVe:
 *           type: string
 *           example: "HV001"
 *         tenHangVe:
 *           type: string
 *           example: "Hạng nhất"
 *         heSoGia:
 *           type: integer
 *           example: 1
 *         tongSoGhe:
 *           type: integer
 *           example: 14


 */


