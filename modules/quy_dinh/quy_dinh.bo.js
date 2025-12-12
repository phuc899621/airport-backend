export default class QuyDinhBO{
    constructor({TenTS=null, GiaTri=null}){
        this.tenQuyDinh = TenTS;
        this.giaTri = parseInt(GiaTri);
    }
}