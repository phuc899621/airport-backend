// lich_chuyen_bay.mapper.js
import dayjs from "dayjs";
export const ChuyenBayMapper = {
    toLichResponse: ({
        MaCB = null,
        MaSBDi = null,
        MaSBDen = null,
        TenSBDi = null,
        TenSBDen = null,
        ThoiGianBay = null,
        GiaVeCoBan = null,
        NgayGio = null,
        TongSoGhe = null,
        TongSoGheDaDat = null,
        TongSoGheConLai = null
    }) => ({
        maChuyenBay: MaCB,
        maSanBayDi: MaSBDi,
        maSanBayDen: MaSBDen,
        tenSanBayDi: TenSBDi,
        tenSanBayDen: TenSBDen,
        thoiGianBay: ThoiGianBay,
        giaVeCoBan: GiaVeCoBan,
        ngayGio: NgayGio,
        tongSoGhe: TongSoGhe,
        tongSoGheDaDat: TongSoGheDaDat,
        tongSoGheConLai: TongSoGheConLai
    }),
    toLichChuyenBayList: (list, maChuyenBay = null) => {
        const map = new Map();
        for (const cb of list) {
            const maCB = cb.MaCB;
            if (!map.has(maCB)) {
                map.set(maCB, ChuyenBayMapper.toLichResponse(cb));
            }
        }
        if (maChuyenBay) {
        return map.size ? map.get(maChuyenBay) ?? null : null;
        }
        return Array.from(map.values());
    },
    toLichChiTietMap: (rawList) => {
        const map = new Map();

        for (const cb of rawList) {
            const maCB = cb.MaCB;

            if (!map.has(maCB)) {
                map.set(maCB, {
                    maChuyenBay: maCB,
                    maSanBayDi: cb.MaSBDi,
                    maSanBayDen: cb.MaSBDen,
                    tenSanBayDi: cb.TenSBDi,
                    tenSanBayDen: cb.TenSBDen,
                    thoiGianBay: Number(cb.ThoiGianBay),
                    giaVeCoBan: Number(cb.GiaVeCoBan),
                    ngayGio: cb.NgayGio,
                    tongSoGhe: Number(cb.TongSoGhe),
                    tongSoGheDaDat: Number(cb.TongSoGheDaDat),
                    tongSoGheConLai: Number(cb.TongSoGheConLai),
                    sanBayTrungGian: [],
                    hangVeChuyenBay: [],
                    _sbTGSet: new Set(),
                    _hangVeSet: new Set()
                });
            }

            const item = map.get(maCB);

            if (cb.MaSB) {
                const key = `${maCB}_${cb.MaSB}`;
                if (!item._sbTGSet.has(key)) {
                    item._sbTGSet.add(key);
                    item.sanBayTrungGian.push(
                        ChuyenBayMapper.toSanBayTrungGianChiTietResponse(cb)
                    );
                }
            }

            if (cb.MaHV) {
                if (!item._hangVeSet.has(cb.MaHV)) {
                    item._hangVeSet.add(cb.MaHV);
                    item.hangVeChuyenBay.push(
                        ChuyenBayMapper.toHangVeChuyenBayChiTietResponse(cb)
                    );
                }
            }
        }

        for (const v of map.values()) {
            delete v._sbTGSet;
            delete v._hangVeSet;
        }

        return map;
    },
    toArray: (map) => Array.from(map.values()),
    toSanBayTrungGianResponse: (row) => ({
        maChuyenBay: row.MaCB,
        maSanBay: row.MaSB,
        thoiGianDung: Number(row.ThoiGianDung),
        thuTuDung: Number(row.ThuTuDung),
        ghiChu: row.GhiChu
    }),
    toHangVeChuyenBayResponse: (row) => ({
        maChuyenBay: row.MaCB,
        maHangVe: row.MaHV,
        tenHangVe: row.TenHV,
        heSoGia: Number(row.HeSoGia),
        tongSoGhe: Number(row.TongSoGhe)
    }),
    toResponse: (row) => ({
        maChuyenBay: row.MaCB,
        maSanBayDi: row.MaSBDi,
        maSanBayDen: row.MaSBDen,
        ngayGio: row.NgayGio,
        thoiGianBay: Number(row.ThoiGianBay),
        giaVe: Number(row.GiaVe),
    }),
    toSanBayTrungGianChiTietResponse: (row) => ({
        maChuyenBay: row.MaCB,
        maSanBay: row.MaSB,
        tenSanBay: row.TenSB,
        quocGia: row.QuocGia,
        thoiGianDung: Number(row.ThoiGianDung),
        thuTuDung: Number(row.ThuTuDung),
        ghiChu: row.GhiChu
    }),
    toHangVeChuyenBayChiTietResponse: (row) => ({
        maChuyenBay: row.MaCB,
        maHangVe: row.MaHV,
        tenHangVe: row.TenHV,
        heSoGia: Number(row.HeSoGia),
        tongSoGhe: Number(row.TongSoGhe),
        giaVeTheoHang: Number(row.GiaVeTheoHang),
        soGheConLai: Number(row.SoGheConLai)
    })
}
