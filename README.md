✈️ Airport Management Backend

Backend API cho hệ thống quản lý chuyến bay, sử dụng Node.js + Express + PostgreSQL.
Dự án hỗ trợ đầy đủ CRUD cho máy bay, sân bay, chuyến bay, đặt chỗ và vé.
Ngoài ra API được mô tả và demo trực tiếp thông qua Swagger UI.

🚀 1. Cách chạy dự án
Clone source:
git clone https://github.com/your-username/airport-backend.git
cd airport-backend

Cài đặt dependencies:
npm install

Tạo file .env với nội dung:
PORT=3000
DATABASE_URL=postgresql://username:password@host:5432/dbname
NODE_ENV=development

Chạy dự án:
npm run dev

Server sẽ chạy ở:
👉 http://localhost:3000

📘 2. Xem tài liệu API (Swagger)

Swagger UI đã được cấu hình sẵn.

Sau khi chạy server, mở trình duyệt và truy cập:

👉 http://localhost:3000/api-docs

Tại đây bạn có thể:

Xem toàn bộ API

Xem params, body, response

Test API trực tiếp không cần Postman

🏗 3. Cấu trúc thư mục (Clean Architecture)
src/
├── config/ # cấu hình app, db, swagger
├── controllers/ # nhận request, gọi service
├── services/ # xử lý logic
├── repositories/ # truy vấn database
├── routes/ # khai báo route
├── middlewares/ # validate, auth
├── utils/ # công cụ phụ trợ
└── app.js
