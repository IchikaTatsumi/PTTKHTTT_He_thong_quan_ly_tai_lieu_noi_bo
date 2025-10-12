"use client";

import { useState } from "react";
import {
  FileText,
  Search,
  FolderOpen,
  Trash2,
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
import { TrashTable } from "../TrashTable";
import { Document } from "../DocumentsTable";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

export default function TrashbinUI() {
  const router = useRouter();
  const [trashedDocuments, setTrashedDocuments] = useState<Document[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@company.com",
    role: "Admin",
  });

  const handleRestore = (id: string) => {
    setTrashedDocuments(trashedDocuments.filter((doc) => doc.id !== id));
    // In real app, move back to documents
  };

  const handleDeletePermanently = (id: string) => {
    setTrashedDocuments(trashedDocuments.filter((doc) => doc.id !== id));
  };

  const handleLogout = () => {
    router.push("/login");
  };

  const filteredTrash = trashedDocuments.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

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
                      <SidebarMenuButton onClick={() => router.push("/alldocuments")}>
                        <FileText className="h-4 w-4" />
                        <span>Tất cả tài liệu</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive={true} onClick={() => router.push("/trashbin")}>
                        <Trash2 className="h-4 w-4" />
                        <span>Thùng rác</span>
                        {trashedDocuments.length > 0 && (
                          <Badge variant="secondary" className="ml-auto">
                            {trashedDocuments.length}
                          </Badge>
                        )}
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
                <h1>Thùng rác</h1>
                <p className="text-muted-foreground">{filteredTrash.length} tài liệu</p>
              </div>
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

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-6">
              <TrashTable
                documents={filteredTrash}
                onRestore={handleRestore}
                onDeletePermanently={handleDeletePermanently}
              />
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
