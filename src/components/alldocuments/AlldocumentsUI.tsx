// src/components/alldocuments/AlldocumentsUI.tsx
"use client";

import {
  ChevronDown,
  FileText,
  FolderOpen,
  LogIn,
  LogOut,
  Search,
  Upload,
  UserCircle,
  UserPlus, 
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useAuth } from "../../features/auth";
import { FileDTO, useFileMutations, useFiles } from "../../features/files";
import { fileService } from "../../features/files/services/file.service";
import { Role } from "../../lib/constants/enums"; 
import { parseDate } from "../../lib/utils";
import { DocumentsTable } from "../DocumentsTable";
import { UploadDialog } from "../UploadDialog";
import CreateUserDialog from "../CreateUserDialog"; 
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";

const baseNavigationItems = [
  { title: "Tất cả tài liệu", icon: FileText, url: "/alldocuments" },
];

export const downloadFileClient = (data: Blob, filename: string) => {
  const url = window.URL.createObjectURL(data);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  console.log(url);

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

const unaccent = (str: string): string => {
  if (!str) return '';
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};


export default function AlldocumentsUI() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, loading, logout } = useAuth();
  const {
    files: allFiles,
    loading: filesLoading,
    error: filesError,
    fetchFiles,
  } = useFiles();
  const { uploadFile, deleteFile } = useFileMutations();
  const [uploadOpen, setUploadOpen] = useState(false);
  const [createUserOpen, setCreateUserOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleUpload = async (file: File) => {
    // Note: Logic đổi tên file đã được chuyển vào UploadDialog
    const formData = new FormData();
    formData.append("file", file);
    const response = await uploadFile(formData);
    if (response.success) {
      fetchFiles();
    }
  };

  const handleDelete = async (id: string) => {
    const response = await deleteFile(id);
    if (response.success) {
      fetchFiles();
    }
  };

  const handleDownload = async (id: string) => {
    try {
      const { data, filename } = await fileService.downloadFileServer(id);
      downloadFileClient(data, filename);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleEditInfo = (doc: FileDTO) => {
    alert(
      `[CHỨC NĂNG CHỈNH SỬA] Mở form chỉnh sửa thông tin cho tài liệu: ${doc.name}`
    );
  };
  
  const handleAuthRedirect = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    logout(); 
    router.push("/login"); 
  };

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
  
  // Logic tạo navigation items (Giữ nguyên)
  const navigationItems = useMemo(() => {
    return [...baseNavigationItems];
  }, [user]); 

  // Logic lọc và sắp xếp (Đã đơn giản hóa)
  const filteredDocuments = useMemo(() => {
    // Áp dụng unaccent cho truy vấn tìm kiếm
    const normalizedQuery = unaccent(searchQuery.toLowerCase());

    const filtered = allFiles.filter((doc) => {
      // Áp dụng unaccent cho tên tài liệu trước khi so sánh
      const normalizedName = unaccent(doc.name.toLowerCase());
      return normalizedName.includes(normalizedQuery);
    });

    // Sắp xếp cố định theo Mới nhất (Newest)
    const sorted = [...filtered].sort((a, b) => {
      // Sử dụng Date.parse an toàn hơn cho các chuỗi ISO từ backend
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });

    return sorted;
  }, [allFiles, searchQuery]); 

  // Logic hiển thị nội dung chính
  const mainContent = useMemo(() => {
    
    // Default: All Documents UI
    return (
      <>
        {/* Header (All Documents) */}
        <header className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h1>Tất cả tài liệu</h1>
            <p className="text-muted-foreground">
              {filteredDocuments.length} tài liệu
            </p>
          </div>
          {/* Nút Tạo User và Tải lên */}
          <div className="flex gap-4">
            {user?.role === Role.Admin && (
              <Button variant="outline" onClick={() => setCreateUserOpen(true)}>
                <UserPlus className="mr-2 h-4 w-4" />
                Tạo người dùng
              </Button>
            )}
            <Button onClick={() => setUploadOpen(true)}>
              <Upload className="mr-2 h-4 w-4" />
              Tải lên
            </Button>
          </div>
        </header>

        {/* Search and Filters (All Documents) */}
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
        </div>

        {/* Main Content: Bỏ chiều cao cố định để scroll table*/}
        <main className="flex-1 overflow-auto p-6">
          <DocumentsTable
            documents={filteredDocuments}
            onDelete={handleDelete}
            onDownload={async (id: string) => {
              await handleDownload(id);
            }}
            currentUser={user!}
            onEditInfo={handleEditInfo}
          />
        </main>
      </>
    );
  }, [filteredDocuments, searchQuery, user, handleDelete, handleDownload, handleEditInfo, setUploadOpen, setCreateUserOpen]); 

  if (loading) return <div>Loading...</div>
  if (!loading && !user) {
    router.push("/login");
    return;
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full flex-col">
        {/* Top Bar (Giữ nguyên) */}
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
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {user.username
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden flex-col items-start md:flex">
                    <span>{user.username}</span>
                    <span className="text-muted-foreground">{user.role}</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-60">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p>{user.username}</p>
                      <p className="text-muted-foreground">ID: {user.id}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => router.push("/alldocuments")}
                  >
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
          {/* Sidebar Navigation */}
          <nav className="flex w-[250px] shrink-0 flex-col border-r bg-card p-4">
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.url}
                  variant={pathname === item.url ? "default" : "ghost"}
                  onClick={() => router.push(item.url)}
                  className="justify-start"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              ))}
            </div>
          </nav>
          
          <SidebarInset className="flex flex-col">
            {/* Conditional Content */}
            {mainContent}
          </SidebarInset>
        </div>
      </div>

      <UploadDialog
        open={uploadOpen}
        onOpenChange={setUploadOpen}
        onUpload={handleUpload}
        // Truyền danh sách tên file hiện có để xử lý trùng lặp
        existingFileNames={allFiles.map(file => file.name)} 
      />
      
      {/* RENDER DIALOG POPUP CHO ADMIN */}
      {user?.role === Role.Admin && (
        <CreateUserDialog 
          open={createUserOpen}
          onOpenChange={setCreateUserOpen}
        />
      )}
    </SidebarProvider>
  );
}