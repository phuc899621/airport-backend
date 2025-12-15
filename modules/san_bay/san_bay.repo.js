import { DBError } from "../../core/errors/errors.js";

const createSanBayRepo = (db) => ({
  laySTTTiepTheo: async () => {
    const rows = await db`
      SELECT nextval('sanbay_seq') as next_id;
    `;
    console.log(rows);
    return rows[0]?.next_id;
  },

  taoSanBay: async ({ maSanBay, tenSanBay, quocGia }, tx) => {
    try {
      const executor = tx || db;
      const rows = await executor`
        INSERT INTO "SANBAY" ("MaSB","TenSB", "QuocGia")
        VALUES (${maSanBay}, ${tenSanBay}, ${quocGia})
        RETURNING *;
      `;
      console.log("SanBay vua tao", rows);
      return rows[0] || null;
    } catch (err) {
      throw new DBError(err.message);
    }
  },

  laySanBayTheoMaSanBay: async (maSanBay, tx) => {
    try {
      const executor = tx || db;
      const rows = await executor`
        SELECT * FROM "SANBAY"
        WHERE "MaSB" = ${maSanBay}
        AND "DaXoa" = false;
      `;
      return rows[0] || null;
    } catch (err) {
      throw new DBError(err.message);
    }
  },

  laySanBay: async (filter = {}, tx) => {
    try {
      const executor = tx || db;
      const { tenSanBay, quocGia } = filter;
      const rows = await executor`
        SELECT * FROM "SANBAY"
        WHERE 1=1
        ${tenSanBay ? executor`AND "TenSB" ILIKE ${'%' + tenSanBay + '%'}` : executor``}
        ${quocGia ? executor`AND "QuocGia" ILIKE ${'%' + quocGia + '%'}` : executor``}
        AND "DaXoa" = false
        ORDER BY "MaSB";
      `;
      return rows;
    } catch (err) {
      throw new DBError(err.message);
    }
  },

  capNhatSanBay: async (maSanBay, data, tx) => {
    try {
      const executor = tx || db;
      const columns = Object.keys(data);
      const rows = await executor`
        UPDATE "SANBAY"
        SET ${executor(data, columns)}
        WHERE "MaSB" = ${maSanBay}
        RETURNING *;
      `;
      return rows[0] || null;
    } catch (err) {
      throw new DBError(err.message);
    }
  },
});

export default createSanBayRepo;
