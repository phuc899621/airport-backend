import { DBError } from "../../core/errors/errors.js";

const createQuyDinhRepo = (db) => ({
  capNhatQuyDinh: async (tenQuyDinh, data, tx) => {
    try {
      const executor = tx || db;
      const { giaTri } = data;
      const rows = await executor`
        UPDATE "THAMSO"
        SET "GiaTri" = ${giaTri} 
        WHERE "TenTS" = ${tenQuyDinh}
        RETURNING *;
      `;
      return rows[0] || null;
    } catch (err) {
      throw new DBError(err.message);
    }
  },

  capNhatNhieuQuyDinh: async (quyDinhs, tx) => {
    try {
      const executor = tx || db;
      const rows = await executor`
        UPDATE "THAMSO" AS ts
        SET "GiaTri" = v."GiaTri"::bigint
        FROM (
          VALUES ${executor(quyDinhs.map(q => [q.tenQuyDinh, q.giaTri]))}
        ) AS v("TenTS", "GiaTri")
        WHERE ts."TenTS" = v."TenTS"
        RETURNING ts.*;
      `;
      return rows;
    } catch (err) {
      throw new DBError(err.message);
    }
  },

  layQuyDinhTheoTen: async (tenQuyDinh, tx) => {
    try {
      const executor = tx || db;
      const rows = await executor`
        SELECT * FROM "THAMSO"
        WHERE "TenTS" = ${tenQuyDinh}
        LIMIT 1;
      `;
      return rows[0] || null;
    } catch (err) {
      throw new DBError(err.message);
    }
  },

  layQuyDinh: async (tx) => {
    try {
      const executor = tx || db;
      const rows = await executor`
        SELECT * FROM "THAMSO"
      `;
      return rows;
    } catch (err) {
      throw new DBError(err.message);
    }
  }
});

export default createQuyDinhRepo;
