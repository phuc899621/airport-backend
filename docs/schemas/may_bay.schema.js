/**
 * @swagger
 * components:
 *   schemas:
 *     MayBayObject:
 *       type: object
 *       properties:
 *         maMayBay:
 *           type: integer
 *           example: 1
 *         maSanBay:
 *           type: integer
 *           example: 1
 *         loaimayBay:
 *           type: string
 *           example: Boeing 747
 *         slGheHang1:
 *           type: integer
 *           example: 32
 *         slGheHang2:
 *           type: integer
 *           example: 100
 * 
 *     MayBayChiTietObject:
 *       type: object
 *       properties:
 *         maMayBay:
 *           type: integer
 *           example: 1
 *         maSanBay:
 *           type: integer
 *           example: 1
 *         tenSanBay:
 *           type: string
 *           example: "Sân bay Quốc tế Nội Bài"
 *         quocGia:
 *           type: string
 *           example: "Việt Nam"
 *         loaimayBay:
 *           type: string
 *           example: Boeing 747
 *         slGheHang1:
 *           type: integer
 *           example: 32
 *         slGheHang2:
 *           type: integer
 *           example: 100
 * 
 *     TaoMayBayDto:
 *       type: object
 *       required:
 *         - maSanBay
 *         - loaimayBay
 *         - slGheHang1
 *         - slGheHang2
 *       properties:
 *         maSanBay:
 *           type: integer
 *           example: 1
 *         loaimayBay:
 *           type: string
 *           example: Boeing 747
 *         slGheHang1:
 *           type: integer
 *           example: 32
 *         slGheHang2:
 *           type: integer
 *           example: 100
 *  
 *     CapNhatMayBayDto:
 *       type: object
 *       required:
 *         - maMayBay
 *       properties:
 *         maMayBay:
 *           type: integer
 *           example: 1
 *         maSanBay:
 *           type: integer
 *           example: 1
 *         loaimayBay:
 *           type: string
 *           example: Boeing 747
 *         slGheHang1:
 *           type: integer
 *           example: 32
 *         slGheHang2:
 *           type: integer
 *           example: 100
 */
