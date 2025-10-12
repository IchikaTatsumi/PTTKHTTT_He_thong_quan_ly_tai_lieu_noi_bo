import "../styles/globals.css";

export const metadata = {
  title: "DocManager - Hệ thống quản lý tài liệu",
  description: "Hệ thống quản lý tài liệu nội bộ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
