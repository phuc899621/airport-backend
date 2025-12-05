<!-- Logo + Title -->
<p align="center">
  <img alt="Airport" src="assets/logo.png" width="100" />
  <h1 align="center">✈️ Airport Management Backend</h1>
  <p align="center">Backend API cho hệ thống quản lý chuyến bay (Node.js + Express + PostgreSQL) với Swagger UI.</p>
  <p align="center">
    <a href="#"><img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen" alt="node" /></a>
    <a href="#"><img src="https://img.shields.io/badge/status-development-orange" alt="status" /></a>
    <a href="#"><img src="https://img.shields.io/badge/license-MIT-blue" alt="license" /></a>
  </p>
</p>
---

## Giới thiệu
**Backend API** cho hệ thống quản lý chuyến bay, sử dụng **Node.js + Express + PostgreSQL**.  
Dự án hỗ trợ đầy đủ CRUD cho: **máy bay**, **sân bay**, **chuyến bay**, **đặt chỗ** và **vé**.  
API được mô tả và có thể demo trực tiếp thông qua **Swagger UI**.

---

## Tính năng chính
- CRUD cho Flights / Planes / Airports / Tickets / Bookings  
- Xác thực bằng JWT  
- Validate input bằng Joi  
- Swagger UI để xem & test API trực tiếp

---

## Cài đặt & Chạy nhanh

### 1. Clone source
```bash
git clone https://github.com/your-username/airport-backend.git
cd airport-backend
```

### 2. Cài dependency và chạy
```bash
npm install
npm run dev
```
- Server sẽ chạy ở http://localhost:3000

### 3. Xem tài liệu API (Swagger)
Swagger UI đã được cấu hình sẵn. Sau khi server chạy, mở trình duyệt và truy cập: 
__http://localhost:3000/api/docs__

Tại đây, bạn có thẻ:
- Xem toàn bộ API
- Xem params, query, body yêu cầu



