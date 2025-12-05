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

## Mục lục
- [Giới thiệu](#giới-thiệu)
- [Tính năng chính](#tính-năng-chính)
- [Cài đặt & Chạy nhanh](#cài-đặt--chạy-nhanh)
- [Cấu hình môi trường (.env)](#cấu-hình-môi-trường-env)
- [Xem tài liệu API (Swagger)](#xem-tài-liệu-api-swagger)
- [Cấu trúc thư mục (Clean Architecture)](#cấu-trúc-thư-mục-clean-architecture)
- [Ví dụ request nhanh](#ví-dụ-request-nhanh)
- [Các script hữu dụng](#các-script-hữu-dụng)
- [Ghi chú phát triển](#ghi-chú-phát-triển)
- [License & Contact](#license--contact)

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
