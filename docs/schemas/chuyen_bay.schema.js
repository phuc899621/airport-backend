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
 * 
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
 *           description: Thứ tự dừng sân bay trong chuyến bay 
 *           example: 1
 *         thoiGianDung:
 *           type: integer
 *           description: Thời gian dừng sân bay trong chuyến bay (tính bằng phút)
 *           example: 20
 *         ghiChu:
 *           type: string
 *           example: ""
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
 *         quocGiaSanBayDi:
 *           type: string
 *           description: Quốc gia sân bay đi
 *           example: "Việt Nam"
 *         quocGiaSanBayDen:
 *           type: string
 *           description: Quốc gia sân bay đến
 *           example: "Anh"    
 *         tenSanBayDi:
 *           type: string
 *           description: Tên sân bay đi
 *           example: "Sân bay Quốc tế Nội Bài"
 *         tenSanBayDen:
 *           type: string
 *           description: Tên sân bay đến
 *           example: "Melbourne Airport"
 *         thoiGianBay:
 *           type: integer
 *           example: 240
 *         slGheHang1:
 *           type: integer
 *           example: 14
 *         slGheHang2:
 *           type: integer
 *           example: 86
 *         slGheHang1ConLai:
 *           type: integer
 *           example: 14
 *         slGheHang2ConLai:
 *           type: integer
 *           example: 86
 *         ngayGio:
 *           type: string
 *           format: date-time
 *           description: "Thời gian khỏi hành"
 *           example: "2025-12-01T11:40:52.000Z"
 *         giaVe:
 *           type: integer
 *           example: 700000
 *         giaVeHang1:
 *           type: integer
 *           example: 735000
 *         giaVeHang2:
 *           type: integer
 *           example: 700000
 *         thoiGianDi:
 *           type: string
 *           format: date-time
 *           description: "Thời điểm khỏi hành"
 *           example: "2025-12-01T11:40:52.000Z"
 *         thoiGianDen:
 *           type: string
 *           format: date-time
 *           description: "Thời gian đến dự kiên khi cộng thoiGianDi, thoiGianBay, thoiGianDung"
 *           example: "2025-12-01T15:40:52.000Z"
 *         SanBayTrungGian:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/SanBayTrungGianChiTietObject'
 * 
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
 *         slGheHang1:
 *           type: integer
 *           example: 14
 *         slGheHang2:
 *           type: integer
 *           example: 86
 * 
 *     TaoChuyenBayDto:
 *       type: object
 *       required:
 *         - maSanBayDi
 *         - maSanBayDen
 *         - ngayGio
 *         - giaVe
 *         - thoiGianBay
 *         - slGheHang1
 *         - slGheHang2
 *       properties:
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
 *           example: "2025-12-02T03:30:00.000Z"
 *         thoiGianBay:
 *           type: integer
 *           example: 180
 *         slGheHang1:
 *           type: integer
 *           example: 14
 *         slGheHang2:
 *           type: integer
 *           example: 86
 * 
 * 
 *     CapNhatChuyenBayDto:
 *       type: object
 *       properties:
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
 *           example: "2025-12-02T03:30:00.000Z"
 *         thoiGianBay:
 *           type: integer
 *           example: 180
 *         slGheHang1:
 *           type: integer
 *           example: 14
 *         slGheHang2:
 *           type: integer
 *           example: 86
 */


