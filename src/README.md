# Hệ thống Quản lý Tài liệu Nội bộ

Hệ thống quản lý tài liệu nội bộ với các chức năng:
- Tải tài liệu lên
- Tìm kiếm tài liệu
- Phân quyền truy cập tài liệu

## Công nghệ sử dụng

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui, Radix UI
- **Backend**: Express.js, MySQL (cần tích hợp)

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

## Cấu trúc thư mục

```
PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── alldocuments/        # Trang tất cả tài liệu
│   ├── trashbin/            # Trang thùng rác
│   ├── login/               # Trang đăng nhập
│   └── information/         # Trang thông tin cá nhân
├── components/              # React components
│   ├── alldocuments/        # Components cho trang tài liệu
│   ├── trashbin/            # Components cho thùng rác
│   ├── login/               # Components cho đăng nhập
│   ├── information/         # Components cho thông tin
│   └── ui/                  # Shadcn UI components
├── styles/                  # CSS files
│   └── globals.css          # Tailwind V4 global styles
└── public/                  # Static assets

```

## Routes

- `/` - Trang chủ (redirect to /alldocuments)
- `/login` - Đăng nhập
- `/alldocuments` - Quản lý tất cả tài liệu
- `/trashbin` - Thùng rác
- `/information` - Thông tin cá nhân

## Tính năng

### Quản lý tài liệu
- Upload tài liệu (PDF, Word, Excel, PowerPoint)
- Xem danh sách tài liệu
- Tìm kiếm tài liệu
- Sắp xếp tài liệu (mới nhất, cũ nhất, tên, kích thước)
- Tải xuống tài liệu
- Xóa tài liệu (chuyển vào thùng rác)

### Phân quyền
- Phân quyền truy cập: Công khai, Riêng tư, Hạn chế
- Quản lý người dùng có quyền truy cập
- Thêm/xóa quyền cho từng người dùng
- Phân quyền xem/chỉnh sửa

### Thùng rác
- Xem tài liệu đã xóa
- Khôi phục tài liệu
- Xóa vĩnh viễn

### Thông tin cá nhân
- Xem thông tin tài khoản
- Chỉnh sửa thông tin cá nhân

## Lưu ý

- Project này sử dụng Tailwind CSS v4, không cần file `tailwind.config.js`
- Sử dụng Next.js 15 App Router, không phải Pages Router
- TypeScript được sử dụng cho type safety
- UI components từ Shadcn/ui đã được cài đặt sẵn trong `/components/ui`

## Tích hợp Backend

Để tích hợp với Express.js và MySQL backend:

1. Tạo API routes trong `/app/api/`
2. Cấu hình kết nối database
3. Thay thế mock data bằng API calls
4. Implement authentication và authorization
5. Thêm file upload handling

## License

Private - Dự án nội bộ
