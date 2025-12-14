export default class LichChuyenBayChiTietBO{
        constructor({
        MaCB=null,
        MaSBDi=null,
        MaSBDen=null,
        ThoiGianBay=null,
        GiaVeCoBan=null,
        NgayGio=null,
        TenSBDi=null,
        TenSBDen=null,
        TongSoGhe=null,
        TongSoGheDaDat=null,
        TongSoGheConLai=null,
        SanBayTrungGian=[],
        HangVeChuyenBay=[]
    }){
        
        this.ngayGio=NgayGio;
        this.maChuyenBay=MaCB;
        this.thoiGianBay=parseInt(ThoiGianBay);
        this.giaVeCoBan=parseInt(GiaVeCoBan);
        this.maSanBayDi=MaSBDi;
        this.maSanBayDen=MaSBDen;
        this.tenSanBayDi=TenSBDi;
        this.tenSanBayDen=TenSBDen;
        this.tongSoGhe=parseInt(TongSoGhe);
        this.tongSoGheDaDat=parseInt(TongSoGheDaDat);
        this.tongSoGheConLai=parseInt(TongSoGheConLai);
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