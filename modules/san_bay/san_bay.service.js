
import { ValidationError, NotFoundError } from "../../core/errors/errors.js";
import SanBayBO from "./san_bay.bo.js";

export default class SanBayService{
    constructor(sanBayRepo){
        this.repo=sanBayRepo
    }
    async taoSanBay({ tenSanBay, quocGia }) {
        const maSanBay = await this.repo.laySTTSanBayTiepTheo();
        const sanBayRaw = await this.repo.taoSanBay({ maSanBay, tenSanBay, quocGia });
        return sanBayRaw? new SanBayBO(sanBayRaw):null;
    }

    async laySanBay(maSanBay,filter) {
        if(maSanBay) {
            const sanBayRaw=await this.repo.laySanBayTheoMaSanBay(maSanBay);
            return sanBayRaw?new SanBayBO(sanBayRaw):null;
        }
        const dsSanBay=await this.repo.laySanBay(filter);
        return dsSanBay.filter(s=>s).map(s=>new SanBayBO(s));
    }
    async capNhatSanBay(maSanBay,update={}) {
        const fieldMap={
            tenSanBay:"TenSB",
            quocGia:"QuocGia"
        }
        const data={};
        for (const [key,column] of Object.entries(fieldMap)) {
            if (update[key] !== undefined) {
                console.log("capnhat:",key,column,update[key]);
                data[column]=update[key];
            }
        }
        if(Object.keys(data).length===0) throw new ValidationError("Vui lòng gửi trường để cập nhật");
        const sanBayRaw= await this.repo.capNhatSanBay(maSanBay,data);
        return sanBayRaw? new SanBayBO(sanBayRaw):null;
    }
    async xoaSanBay(maSanBay) {
        if(maSanBay&&!(await this.repo.laySanBayTheoMaSanBay(maSanBay))) throw new NotFoundError("Sân bay không tồn tại");
        await this.repo.xoaSanBay(maSanBay);
    }
    async taoMaSB(){
        const next_id=await this.repo.laySTTSanBayTiepTheo();
        console.log(next_id);
        if(!next_id) throw new ServerError("Không thể tạo mã sân bay");
        return `SB${String(next_id).padStart(3, '0')}`;
    }

}