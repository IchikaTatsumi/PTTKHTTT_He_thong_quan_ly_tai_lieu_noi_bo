// Content of src/App.tsx
import * as React from "react"; 
import { useState } from "react";
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
} from "./components/ui/sidebar";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./components/ui/avatar";
import { DocumentsTable, Document } from "./components/DocumentsTable";
import { UploadDialog } from "./components/UploadDialog";
import { Badge } from "./components/ui/badge";

// Mock data (FIXED: Loại bỏ category, accessLevel, sharedWith)
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
  { title: "Tất cả tài liệu", icon: FileText, url: "#" },
];

export default function App() {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [documents, setDocuments] = useState(mockDocuments);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentView, setCurrentView] = useState("Tất cả tài liệu");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@company.com",
    role: "Admin",
  });

  // FIXED: Loại bỏ các trường không tồn tại và khai báo kiểu dữ liệu file: File
  const handleUpload = (file: File, metadata: { documentName: string }) => {
    // Mock upload - in real app, this would call your API
    const newDoc: Document = {
      id: Date.now().toString(),
      name: metadata.documentName, // Lấy tên từ metadata
      type: file.name.split('.').pop()?.toUpperCase() || "FILE",
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      uploadedBy: "Bạn",
      uploadedAt: new Date().toLocaleDateString("vi-VN"),
    };
    setDocuments([newDoc, ...documents]);
  };

  const handleDelete = (id: string) => {
    // Permanent delete
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  const handleDownload = (id: string) => {
    // Mock download
    console.log("Downloading document:", id);
  };
  
  // ADDED: Placeholder for Edit Info
  const handleEditInfo = (doc: Document) => {
    alert(`[PLACEHOLDER] Chỉnh sửa thông tin tài liệu: ${doc.name}`);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    // Mock login - in real app, this would navigate to login page
    setIsLoggedIn(true);
  };

  // FIXED: Khai báo kiểu cho doc: Document và chỉ lọc theo tên (vì category đã bị loại bỏ)
  const filteredDocuments = documents.filter((doc: Document) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const displayCount = filteredDocuments.length; // Simplified to only documents count

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
            {/* User Menu */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {currentUser.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
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
                  <DropdownMenuItem>
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
            ) : (
              <Button onClick={handleLogin}>
                <LogIn className="mr-2 h-4 w-4" />
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
                        onClick={() => setCurrentView(item.title)}
                        isActive={currentView === item.title}
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
              <h1>{currentView}</h1>
              <p className="text-muted-foreground">
                {displayCount} tài liệu
              </p>
            </div>
            <Button onClick={() => setUploadOpen(true)}>
              <Upload className="mr-2 h-4 w-4" />
              Tải lên
            </Button>
          </header>

          {/* Search and Filters (unchanged) */}
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
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="oldest">Cũ nhất</SelectItem>
                <SelectItem value="name">Tên A-Z</SelectItem>
                <SelectItem value="size">Kích thước</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Main Content (Simplified) */}
          <main className="flex-1 overflow-auto p-6">
            <DocumentsTable
              documents={filteredDocuments}
              onDelete={handleDelete}
              onDownload={handleDownload}
              currentUser={currentUser} // Truyền thông tin người dùng
              onEditInfo={handleEditInfo} // Truyền hàm xử lý chỉnh sửa
            />
          </main>
        </SidebarInset>
        </div>
      </div>

      <UploadDialog
        open={uploadOpen}
        onOpenChange={setUploadOpen}
        onUpload={handleUpload}
      />
    </SidebarProvider>
  );
}