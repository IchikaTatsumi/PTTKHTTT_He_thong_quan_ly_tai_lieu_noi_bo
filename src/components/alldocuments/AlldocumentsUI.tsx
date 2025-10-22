// src/components/alldocuments/AlldocumentsUI.tsx (Bản cập nhật cuối cùng sau khi hợp nhất và sửa lỗi TS2339)
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
  LogIn,
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
import { useRouter, usePathname } from "next/navigation"; // <--- ĐÃ SỬA: Thêm usePathname
import { parseDate, sizeToNumber } from "../../lib/utils";
import { authController } from "../../lib/api/authController";

// =======================================================
// KHỐI MOCK DATA VÀ CONSTANTS
// =======================================================

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Quy định nội bộ 2024.pdf",
    type: "PDF",
    size: "2.4 MB",
    uploadedBy: "Nguyễn Văn A", 
    uploadedAt: "15/03/2024",
  },
  {
    id: "2",
    name: "Báo cáo tài chính Q1.xlsx",
    type: "Excel",
    size: "1.2 MB",
    uploadedBy: "Trần Thị B", 
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

const navigationItems = [
  { title: "Tất cả tài liệu", icon: FileText, url: "/alldocuments" },
  // Thêm các mục navigation khác nếu cần, ví dụ:
  // { title: "Thùng rác", icon: Trash2, url: "/trashbin" },
];

const MOCK_CURRENT_USER = {
    name: "Nguyễn Văn A", // Tên người dùng hiện tại
    email: "nguyenvana@company.com",
    role: "Admin", // Vai trò được sử dụng để kiểm tra quyền Admin
};

// MOCK: Giả định trạng thái đăng nhập
const isLoggedIn = false; 

// =======================================================

export default function AlldocumentsUI() {
  const router = useRouter();
  const pathname = usePathname(); // <--- DÒNG MỚI: Lấy đường dẫn hiện tại
  const [uploadOpen, setUploadOpen] = useState(false);
  const [documents, setDocuments] = useState(mockDocuments);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState<"newest" | "oldest" | "name" | "size">("newest");
  const [currentUser] = useState(MOCK_CURRENT_USER);
  
  // Logic đã được hợp nhất từ App.tsx và AlldocumentsUI.tsx (giữ nguyên)
  const handleUpload = (file: File, metadata: any) => {
    const newDoc: Document = {
      id: Date.now().toString(),
      name: metadata.documentName,
      type: file.name.split('.').pop()?.toUpperCase() || "FILE",
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      uploadedBy: currentUser.name, 
      uploadedAt: new Date().toLocaleDateString("vi-VN"),
    };
    setDocuments([newDoc, ...documents]);
  };

  const handleDelete = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const handleDownload = (id: string) => {
    console.log("Downloading document:", id);
  };
  
  const handleEditInfo = (doc: Document) => {
    alert(`[CHỨC NĂNG CHỈNH SỬA] Mở form chỉnh sửa thông tin cho tài liệu: ${doc.name}`);
  }

  const handleAuthRedirect = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    authController.logout();
    router.push("/login");
  };
  
  // Logic lọc và sắp xếp (giữ nguyên)
  const sortedDocuments = useMemo(() => {
    const filtered = documents.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      switch (sortCriteria) {
        case "oldest":
          return parseDate(a.uploadedAt).getTime() - parseDate(b.uploadedAt).getTime();
        case "name":
          return a.name.localeCompare(b.name);
        case "size":
          return sizeToNumber(b.size) - sizeToNumber(a.size);
        case "newest": 
        default:
          return parseDate(b.uploadedAt).getTime() - parseDate(a.uploadedAt).getTime();
      }
    });

    return sorted;
  }, [documents, searchQuery, sortCriteria]);

  const getSortLabel = (key: "newest" | "oldest" | "name" | "size") => {
    switch (key) {
      case "newest": return "Mới nhất";
      case "oldest": return "Cũ nhất";
      case "name": return "Tên A-Z";
      case "size": return "Kích thước";
      default: return "";
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full flex-col">
        {/* Top Bar */}
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
            {isLoggedIn ? (
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
                  <DropdownMenuItem onClick={() => router.push("/alldocuments")}>
                    <UserCircle className="mr-2 h-4 w-4" />
                    Tài khoản
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Đăng xuất
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={handleAuthRedirect}>
                <LogIn className="mr-2 size-4" />
                Đăng nhập
              </Button>
            )}
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
                    {navigationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                            isActive={pathname === item.url} // <--- ĐÃ SỬA: Sử dụng pathname
                            onClick={() => router.push(item.url)}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                          {item.title === "Tất cả tài liệu" && (
                            <Badge variant="secondary" className="ml-auto">
                              {documents.length}
                            </Badge>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
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
                documents={sortedDocuments} 
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