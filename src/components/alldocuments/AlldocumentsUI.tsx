// src/components/alldocuments/AlldocumentsUI.tsx
"use client";

import { useState, useMemo } from "react";
import {
  FileText,
  Upload,
  Search,
  FolderOpen,
  ChevronDown,
  UserCircle,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
} from "../ui/sidebar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { DocumentsTable, Document } from "../DocumentsTable";
import { UploadDialog } from "../UploadDialog";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

// Mock data 
const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Quy định nội bộ 2024.pdf",
    type: "PDF",
    size: "2.4 MB",
    uploadedBy: "Nguyễn Văn A", // Owner (current user)
    uploadedAt: "15/03/2024",
  },
  {
    id: "2",
    name: "Báo cáo tài chính Q1.xlsx",
    type: "Excel",
    size: "1.2 MB",
    uploadedBy: "Trần Thị B", // Not Owner
    uploadedAt: "10/03/2024",
  },
  {
    id: "3",
    name: "Kế hoạch Marketing 2024.pptx",
    type: "PowerPoint",
    size: "5.8 MB",
    uploadedBy: "Lê Văn C",
    uploadedAt: "08/03/2024",
  },
  {
    id: "4",
    name: "Hợp đồng đối tác ABC.docx",
    type: "Word",
    size: "856 KB",
    uploadedBy: "Phạm Thị D",
    uploadedAt: "05/03/2024",
  },
  {
    id: "5",
    name: "Tài liệu đào tạo nhân viên mới.pdf",
    type: "PDF",
    size: "3.2 MB",
    uploadedBy: "Hoàng Văn E",
    uploadedAt: "01/03/2024",
  },
];

export default function AlldocumentsUI() {
  const router = useRouter();
  const [uploadOpen, setUploadOpen] = useState(false);
  const [documents, setDocuments] = useState(mockDocuments);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState<"newest" | "oldest" | "name" | "size">("newest"); // NEW: State cho tiêu chí sắp xếp
  const [currentUser] = useState({
    name: "Nguyễn Văn A", // Tên người dùng hiện tại
    email: "nguyenvana@company.com",
    role: "Admin", // Vai trò được sử dụng để kiểm tra quyền Admin
  });

  const handleUpload = (file: File, metadata: any) => {
    const newDoc: Document = {
      id: Date.now().toString(),
      name: metadata.documentName, // Sử dụng tên tài liệu do người dùng nhập
      type: file.name.split('.').pop()?.toUpperCase() || "FILE", // Lấy định dạng file
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      uploadedBy: currentUser.name, 
      uploadedAt: new Date().toLocaleDateString("vi-VN"),
    };
    setDocuments([newDoc, ...documents]);
  };

  const handleDelete = (id: string) => {
    // Permanent Deletion
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const handleDownload = (id: string) => {
    console.log("Downloading document:", id);
  };
  
  // Handler for editing file information (Placeholder)
  const handleEditInfo = (doc: Document) => {
    alert(`[CHỨC NĂNG CHỈNH SỬA] Mở form chỉnh sửa thông tin cho tài liệu: ${doc.name}`);
  }

  const handleLogout = () => {
    router.push("/login");
  };

  // Hàm chuyển đổi kích thước file thành số (MB) để so sánh
  // Chuyển kích thước (ví dụ: "2.4 MB", "856 KB", "1 GB") thành số bytes để so sánh chính xác
  const sizeToNumber = (size: string): number => {
    if (!size) return 0;
    const parts = size.trim().split(/\s+/);
    const rawValue = parts[0]?.replace(',', '.');
    const unit = (parts[1] || "").toUpperCase();
    const value = parseFloat(rawValue) || 0;

    switch (unit) {
      case "GB":
        return value * 1024 * 1024 * 1024;
      case "MB":
        return value * 1024 * 1024;
      case "KB":
        return value * 1024;
      default:
        // Nếu không có unit, giả sử là bytes
        return value;
    }
  };
  
  // Hàm chuyển đổi ngày tháng từ định dạng dd/mm/yyyy sang đối tượng Date chuẩn
  const parseDate = (dateString: string): Date => {
    if (!dateString) return new Date(NaN);
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    // Fallback: try Date constructor / parse
    const parsed = new Date(dateString);
    return isNaN(parsed.getTime()) ? new Date(NaN) : parsed;
  }
  
  // Logic lọc và sắp xếp dữ liệu
  const sortedDocuments = useMemo(() => {
    const filtered = documents.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      switch (sortCriteria) {
        case "oldest":
          // Sắp xếp theo ngày tải lên (cũ nhất -> mới nhất)
          // UPDATED: Sử dụng parseDate để so sánh an toàn hơn
          return parseDate(a.uploadedAt).getTime() - parseDate(b.uploadedAt).getTime();
        case "name":
          // Sắp xếp theo Tên A-Z
          return a.name.localeCompare(b.name);
        case "size":
          // Sắp xếp theo Kích thước (lớn nhất -> nhỏ nhất)
          return sizeToNumber(b.size) - sizeToNumber(a.size);
        case "newest": // Mặc định và Mới nhất
        default:
          // Sắp xếp theo Ngày tải lên (mới nhất -> cũ nhất)
          // UPDATED: Sử dụng parseDate để so sánh an toàn hơn
          return parseDate(b.uploadedAt).getTime() - parseDate(a.uploadedAt).getTime();
      }
    });

    return sorted;
  }, [documents, searchQuery, sortCriteria]); // Chạy lại khi 3 state này thay đổi

  // Hiển thị label cho trigger của Select theo sortCriteria
  const getSortLabel = (key: "newest" | "oldest" | "name" | "size") => {
    switch (key) {
      case "newest":
        return "Mới nhất";
      case "oldest":
        return "Cũ nhất";
      case "name":
        return "Tên A-Z";
      case "size":
        return "Kích thước";
      default:
        return "";
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full flex-col">
        {/* Top Bar (unchanged) */}
        <header className="flex h-16 items-center justify-between border-b bg-background px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <FolderOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2>DocManager</h2>
              <p className="text-muted-foreground">Hệ thống quản lý tài liệu</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {currentUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden flex-col items-start md:flex">
                  <span>{currentUser.name}</span>
                  <span className="text-muted-foreground">{currentUser.role}</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[240px]">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p>{currentUser.name}</p>
                    <p className="text-muted-foreground">{currentUser.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/information")}>
                  <UserCircle className="mr-2 h-4 w-4" />
                  Thông tin cá nhân
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <FolderOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2>DocManager</h2>
                  <p className="text-muted-foreground">Quản lý tài liệu</p>
                </div>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive={true} onClick={() => router.push("/alldocuments")}>
                        <FileText className="h-4 w-4" />
                        <span>Tất cả tài liệu</span>
                        <Badge variant="secondary" className="ml-auto">
                          {documents.length}
                        </Badge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset className="flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between border-b px-6 py-4">
              <div>
                <h1>Tất cả tài liệu</h1>
                <p className="text-muted-foreground">{sortedDocuments.length} tài liệu</p>
              </div>
              <Button onClick={() => setUploadOpen(true)}>
                <Upload className="mr-2 h-4 w-4" />
                Tải lên
              </Button>
            </header>

            {/* Search and Filters */}
            <div className="flex items-center gap-4 border-b px-6 py-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm tài liệu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={sortCriteria} onValueChange={(value: "newest" | "oldest" | "name" | "size") => setSortCriteria(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={getSortLabel(sortCriteria)} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="oldest">Cũ nhất</SelectItem>
                  <SelectItem value="name">Tên A-Z</SelectItem>
                  <SelectItem value="size">Kích thước</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Main Content: Bỏ chiều cao cố định để scroll table*/}
            <main className="flex-1 overflow-auto p-6">
              <DocumentsTable
                documents={sortedDocuments} // UPDATED: Sử dụng dữ liệu đã sắp xếp
                onDelete={handleDelete}
                onDownload={handleDownload}
                currentUser={currentUser} 
                onEditInfo={handleEditInfo} 
              />
            </main>
          </SidebarInset>
        </div>
      </div>

      <UploadDialog open={uploadOpen} onOpenChange={setUploadOpen} onUpload={handleUpload} />
    </SidebarProvider>
  );
}