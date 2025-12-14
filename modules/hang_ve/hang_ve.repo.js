
const createHangVeRepo = (db) => ({
  laySTTTiepTheo: async (tx) => {
    const executor = tx || db;
    const rows = await executor`
      SELECT nextval('hangve_seq') AS next_id;
    `;
    return rows[0]?.next_id || null;
  },

  layHangVeTheoMaHangVe: async (maHangVe, tx) => {
    const executor = tx || db;
    const rows = await executor`
      SELECT * FROM "HANGVE"
      WHERE "MaHV" = ${maHangVe}
      LIMIT 1;
    `;
    return rows[0] || null;
  },

  layHangVe: async (tx) => {
    const executor = tx || db;
    const rows = await executor`
      SELECT * FROM "HANGVE";
    `;
    return rows;
  },

  taoHangVe: async (data, tx) => {
    const executor = tx || db;
    const { maHangVe, tenHangVe, heSoGia } = data;
    const rows = await executor`
      INSERT INTO "HANGVE" ("MaHV","TenHV","HeSoGia")
      VALUES (${maHangVe}, ${tenHangVe}, ${heSoGia})
      RETURNING *;
    `;
    return rows[0] || null;
  }
});
export default createHangVeRepo;
