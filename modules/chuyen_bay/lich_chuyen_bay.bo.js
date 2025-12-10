import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import ChuyenBayBO from "./chuyen_bay.bo.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export default class LichChuyenBayBO{
    constructor({
        MaCB=null,
        MaSBDi=null,
        MaSBDen=null,
        ThoiGianBay=null,
        GiaVeCoBan=null,
        NgayGio=null,
        QuocGiaSBDi=null,
        QuocGiaSBDen=null,
        TenSBDi=null,
        TenSBDen=null,
        SanBayTrungGian=[],
        HangVeChuyenBay=[]
    }){
        
        const thoiGianDi=dayjs(NgayGio);
        const thoiGianDen=thoiGianDi.add(ThoiGianBay,'m');
        this.maChuyenBay=MaCB;
        this.thoiGianBay=parseInt(ThoiGianBay);
        this.giaVeCoBan=parseInt(GiaVeCoBan);
        this.sanBayDi={
            maSanBay:MaSBDi,
            quocGia:QuocGiaSBDi,
            tenSanBay:TenSBDi
        };
        this.sanBayDen={
            maSanBay:MaSBDen,
            quocGia:QuocGiaSBDen,
            tenSanBay:TenSBDen
        }
        this.thoiGianDi=thoiGianDi.toISOString();
        this.thoiGianDen=thoiGianDen.toISOString();
        this.sanBayTrungGian=SanBayTrungGian;
        this.hangVeChuyenBay=HangVeChuyenBay;
        this._sbTGSet=new Set();
        this._hangVeSet=new Set();
    }
    themSanBayTrungGian(maChuyenBay,sanBayTrungGian){
        if(!maChuyenBay||maChuyenBay!==this.maChuyenBay) return;
        const key = `${sanBayTrungGian.maChuyenBay}_${sanBayTrungGian.maSanBay}`;
        if(this._sbTGSet.has(key)) return;
        this._sbTGSet.add(key);

        const thoiGianHienTai = dayjs(this.thoiGianDen);
        this.thoiGianDen = thoiGianHienTai
            .add(Number(sanBayTrungGian.thoiGianDung), 'm')
            .toISOString();
        this.sanBayTrungGian.push(sanBayTrungGian);
    }
    themHangVeChuyenBay(maChuyenBay, hangVeChuyenBay){
        if(!maChuyenBay||maChuyenBay!==this.maChuyenBay) return;
        if(this._hangVeSet.has(hangVeChuyenBay.maHangVe)) return;

        this._hangVeSet.add(hangVeChuyenBay.maHangVe);
        this.hangVeChuyenBay.push(hangVeChuyenBay);
    }
    toJSON(){
        const {_hangVeSet,_sbTGSet,...data}=this;
        return data;
    }
}