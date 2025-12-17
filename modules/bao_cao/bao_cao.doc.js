
/**
 * @swagger
 * /bao-cao/thang/{nam}:
 *   get:
 *     tags:
 *       - BaoCao 
 *     summary: Lấy báo cáo của từng tháng trong năm
 *     parameters:
 *       - in: path
 *         name: nam
 *         schema:
 *           type: string
 *         required: true
 *         description: Năm
 *         example: 2023
 * 
 *     responses:
 *       200:
 *         description: Lấy báo cáo theo tháng thành công
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
 *                   example: Lấy báo cáo theo tháng thành công!
 *                 data:
 *                   $ref: "#/components/schemas/BaoCao12ThangObject"
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
 * /bao-cao/nam/{nam}:
 *   get:
 *     tags:
 *       - BaoCao 
 *     summary: Lấy báo cáo theo năm
 *     parameters:
 *       - in: path
 *         name: nam
 *         schema:
 *           type: string
 *         required: true
 *         description: Năm
 *         example: 2023
 * 
 *     responses:
 *       200:
 *         description: Lấy báo cáo theo năm thành công
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
 *                   example: Lấy báo cáo theo năm thành công!
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/BaoCaoNamObject"
 *
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BaseError"
 */

