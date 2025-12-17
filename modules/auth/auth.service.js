import { AuthenticationError } from "../../core/errors/errors.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const createAuthService = (taiKhoanRepo) => {
    const maHoaMatKhau = async (matKhau) => {
        return await bcrypt.hash(matKhau, 10);
    }
    const soSanhMatKhau = async (matKhau, maKhauMaHoa) => {
        return await bcrypt.compare(matKhau, maKhauMaHoa);
    }
    const taoMaNhanVien = async () => {
        const stt= await taiKhoanRepo.laySTTNhanVienTiepTheo();
        if (!stt) throw new ServerError("Không thể tạo mã nhân viên");
        return `NV${String(stt).padStart(3, '0')}`;
    }
    const taoTenDangNhap = async (ten, maNV) => {
        const tenChuanHoa=ten
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z]/g, "");
        return `${tenChuanHoa}_${maNV.toLowerCase()}`;
        
    }
    const taoSessionNhanVien = async (maTaiKhoan, vaiTro) => { 
        console.log(maTaiKhoan + vaiTro);
        return jwt.sign(
            { maTaiKhoan, vaiTro },
             process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1d",
            }); 
    };
    const dangNhapNhanVien = async (dangNhapDto) => {
        const { tenDangNhap, matKhau } = dangNhapDto;
        const taiKhoan = await taiKhoanRepo.layTaiKhoanNhanVienTheoTenDangNhap(tenDangNhap);
        if (!taiKhoan) throw new AuthenticationError("Tên đăng nhập không tồn tại");
        const soSanh = await soSanhMatKhau(matKhau, taiKhoan.MatKhau);
        if (!soSanh) throw new AuthenticationError("Mật khâu không chính xác");
        const token = await taoSessionNhanVien(taiKhoan.MaTK, taiKhoan.VaiTro);
        return token;
    };

    const taoTaiKhoanNhanVien = async (taoTaiKhoanDto) => {
        const { tenDangNhap, matKhau } = taoTaiKhoanDto;
        const maTaiKhoan = await taoMaNhanVien();
        const matKhauMaHoa = await maHoaMatKhau(matKhau);
        const tenDangNhapChuanHoa=await taoTenDangNhap(tenDangNhap, maTaiKhoan);
        await taiKhoanRepo.taoTaiKhoanNhanVien({ maTaiKhoan, tenDangNhap:tenDangNhapChuanHoa, matKhau:matKhauMaHoa });
        return;
    }
    return { 
        dangNhapNhanVien,
        taoTaiKhoanNhanVien
        
    };
};

export default createAuthService;