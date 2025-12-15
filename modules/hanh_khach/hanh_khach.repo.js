const createHanhKhachRepo = (db) => ({
  laySTTTiepTheo: async () => {
    const rows = await db`
      SELECT nextval('hanhkhach_seq') as next_id;
    `;
    console.log(rows);
    return rows[0]?.next_id;
  },

  layHanhKhach: async (filter = {}, tx) => {
    const executor = tx || db;
    const { maHanhKhach, hoTen, cmnd, dienThoai, email } = filter;
    const rows = await executor`
      SELECT * FROM "HANHKHACH"
      WHERE 1=1
      ${maHanhKhach ? executor`AND "MaHK" = ${maHanhKhach}` : executor``}
      ${hoTen ? executor`AND "HoTen" ILIKE ${'%' + hoTen + '%'}` : executor``}
      ${cmnd ? executor`AND "CMND" ILIKE ${'%' + cmnd + '%'}` : executor``}
      ${dienThoai ? executor`AND "DienThoai" ILIKE ${'%' + dienThoai + '%'}` : executor``}
      ${email ? executor`AND "Email" ILIKE ${'%' + email + '%'}` : executor``}
      AND "DaXoa" = false
    `;
    return rows;
  },

  layHanhKhachTheoMaHanhKhach: async (maHanhKhach, tx) => {
    const executor = tx || db;
    const rows = await executor`
      SELECT * FROM "HANHKHACH"
      WHERE "MaHK" = ${maHanhKhach} AND "DaXoa" = false
      LIMIT 1;
    `;
    return rows[0] || null;
  },

  taoHanhKhach: async (data, tx) => {
    const { maHanhKhach, cmnd, email, dienThoai, hoTen } = data;
    const executor = tx || db;
    const rows = await executor`
      INSERT INTO "HANHKHACH" ("MaHK","HoTen", "CMND","Email","DienThoai")
      VALUES (${maHanhKhach}, ${hoTen}, ${cmnd}, ${email}, ${dienThoai})
      RETURNING *;
    `;
    return rows[0] ?? null;
  },
});
export default createHanhKhachRepo;
