// src/components/PermissionsDialog.tsx
import { useState } from "react";
import { Search, X, UserPlus, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Document } from "./DocumentsTable";

interface PermissionsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  document: Document;
  // NOTE: Sử dụng vai trò người dùng hiện tại để kiểm tra quyền
  currentUserRole?: "viewer" | "owner" | "admin" | "manager";
}

interface UserPermission {
  id: string;
  name: string;
  email: string;
  // UPDATED: Removed 'editor' role.
  role: "viewer" | "owner" | "admin" | "manager"; 
  department: string;
}

// Giả định vai trò người dùng hiện tại là 'admin' để minh họa logic
const FAKE_CURRENT_USER_ROLE: UserPermission["role"] = "admin"; 

export function PermissionsDialog({ open, onOpenChange, document, currentUserRole = FAKE_CURRENT_USER_ROLE }: PermissionsDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [permissions, setPermissions] = useState<UserPermission[]>([
    {
      id: "1",
      name: "Nguyễn Văn A",
      email: "nguyenvana@company.com",
      role: "owner",
      department: "Công nghệ"
    },
    {
      id: "admin-404", 
      name: "Trần Văn Quản Trị",
      email: "admin@company.com",
      role: "admin",
      department: "Quản lý"
    },
    {
      id: "manager-500", 
      name: "Lý Văn Quản Lý",
      email: "manager@company.com",
      role: "manager", // Vai trò Manager
      department: "Điều hành"
    },
    {
      id: "2",
      name: "Trần Thị B",
      email: "tranthib@company.com",
      role: "viewer", // UPDATED: Changed from 'editor' to 'viewer'
      department: "Marketing"
    },
    {
      id: "3",
      name: "Lê Văn C",
      email: "levanc@company.com",
      role: "viewer",
      department: "Nhân sự"
    }
  ]);

  const availableUsers = [
    { id: "4", name: "Phạm Thị D", email: "phamthid@company.com", department: "Tài chính" },
    { id: "5", name: "Hoàng Văn E", email: "hoangvane@company.com", department: "Pháp lý" },
  ];

  const handleRoleChange = (userId: string, newRole: string) => {
    // Chỉ Owner và Admin mới được thăng cấp lên Manager
    const canPromoteDemote = currentUserRole === "owner" || currentUserRole === "admin";
    const currentRole = permissions.find(p => p.id === userId)?.role;

    // Logic hạn chế: Manager chỉ có thể phân quyền giữa Viewer (User)
    const isCurrentUserManager = currentUserRole === 'manager';
    const isTargetUserManagerOrHigher = currentRole === 'manager' || currentRole === 'admin' || currentRole === 'owner';
    
    // Nếu người dùng hiện tại là Manager và đang cố gắng thay đổi quyền của Manager/Admin/Owner, ngăn chặn
    if (isCurrentUserManager && isTargetUserManagerOrHigher) {
        console.warn("Permission denied: Manager không thể thay đổi vai trò của Manager/Admin/Owner.");
        return;
    }
    
    // Giữ logic thăng cấp/giáng cấp Admin/Owner
    if (newRole === "manager") { 
      if (!canPromoteDemote) {
         console.warn("Permission denied: Chỉ Chủ sở hữu hoặc Admin mới có thể thăng cấp.");
         return;
      }
    }

    // Chỉ Owner và Admin mới được giáng cấp Manager (xuống viewer)
    if (currentRole === "manager" && newRole !== "manager") {
       if (!canPromoteDemote) {
           console.warn("Permission denied: Chỉ Chủ sở hữu hoặc Admin mới có thể giáng cấp Manager.");
           return;
       }
    }

    setPermissions(permissions.map(p => 
      p.id === userId ? { ...p, role: newRole as any } : p
    ));
  };

  const handleRemoveUser = (userId: string) => {
    const canPromoteDemote = currentUserRole === "owner" || currentUserRole === "admin";
    const targetUser = permissions.find(p => p.id === userId);
    
    // Ngăn Manager bị xóa bởi người dùng cấp thấp hơn
    if (targetUser?.role === "manager" && !canPromoteDemote) {
        console.warn("Permission denied: Chỉ Chủ sở hữu hoặc Admin mới có thể xóa Manager.");
        return;
    }

    // Manager không được xóa Admin/Owner
    if (currentUserRole === 'manager' && (targetUser?.role === 'owner' || targetUser?.role === 'admin')) {
         console.warn("Permission denied: Manager không thể xóa Admin/Owner.");
         return;
    }
    
    setPermissions(permissions.filter(p => p.id !== userId));
  };
  
  const handleAddUser = (user: typeof availableUsers[0]) => {
    setPermissions([...permissions, { ...user, role: "viewer" }]);
  };

  const getRoleBadge = (role: UserPermission["role"]) => {
    switch (role) {
      case "owner":
        return <Badge>Chủ sở hữu</Badge>;
      case "admin":
        return <Badge variant="destructive">Admin</Badge>;
      case "manager":
        return <Badge variant="secondary" className="bg-yellow-600 hover:bg-yellow-600/80 text-white">Quản lý</Badge>; 
      case "viewer":
        return <Badge variant="outline">Người dùng</Badge>; 
      default:
        return <Badge>{role}</Badge>;
    }
  };
  
  // Hàm trợ giúp để xác định văn bản hiển thị trong SelectTrigger
  const getSelectTriggerValue = (role: UserPermission["role"]) => {
    switch (role) {
      case "admin":
        return "Admin";
      case "owner":
        return "Chủ sở hữu";
      case "manager":
        return "Manager";
      case "viewer":
        return "Xem"; 
      default:
        return "";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const filteredUsers = availableUsers.filter(user =>
    !permissions.some(p => p.id === user.id) &&
    (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Quản lý quyền truy cập</DialogTitle>
          <DialogDescription>
            Quản lý người dùng có quyền truy cập vào "{document.name}"
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          
          {/* Add User Search */}
          <div className="space-y-2">
            <Label>Thêm người dùng</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo tên hoặc email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            {searchQuery && filteredUsers.length > 0 && (
              <div className="mt-2 max-h-[150px] overflow-y-auto rounded-lg border bg-background">
                {filteredUsers.map(user => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-3 hover:bg-accent cursor-pointer"
                    onClick={() => {
                      handleAddUser(user);
                      setSearchQuery("");
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div>{user.name}</div>
                        <div className="text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                    <UserPlus className="h-4 w-4" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Current Permissions */}
          <div className="space-y-2">
            <Label>Người dùng có quyền truy cập ({permissions.length})</Label>
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {permissions.map(user => {
                const isCurrentUserOwner = currentUserRole === "owner";
                const canPromoteDemote = currentUserRole === "owner" || currentUserRole === "admin";
                const isCurrentUserManager = currentUserRole === 'manager';
                
                const isOwner = user.role === "owner";
                const isAdmin = user.role === "admin";
                const isManager = user.role === "manager";
                const isUser = user.role === "viewer";
                
                // Target roles
                const isTargetTopTier = isOwner || isAdmin;
                const isTargetMidTierOrHigher = isTargetTopTier || isManager;
                
                // Visibility Logic
                // HIDE controls if target is Admin/Owner (vì quyền của họ không nên bị thay đổi qua UI này)
                const shouldHideControls = isTargetTopTier;
                
                // Ẩn dropdown và nút xóa nếu người dùng hiện tại là Manager và đang xem Manager khác
                const shouldHideControlsForManager = isCurrentUserManager && isManager;

                // Nút xóa:
                const canRemoveTargetByAdminOwner = canPromoteDemote && !isOwner;
                const canRemoveTargetByManager = isCurrentUserManager && isUser;
                const canRemove = isCurrentUserOwner || canRemoveTargetByAdminOwner || canRemoveTargetByManager;


                const roleDisplay = getRoleBadge(user.role);

                // Hiển thị dropdown/controls nếu target KHÔNG PHẢI Owner/Admin VÀ (target không phải Manager HOẶC current user là Admin/Owner)
                const shouldShowDropdownAndControls = !isTargetTopTier && !(isCurrentUserManager && isManager);


                return (
                  <div
                    key={user.id}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span>{user.name}</span>
                          {roleDisplay}
                        </div>
                        <div className="text-muted-foreground">
                          {user.email} • {user.department}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      
                      {/* Hiển thị DROPDOWN VÀ NÚT XÓA */}
                      {shouldShowDropdownAndControls ? ( 
                        <>
                          <Select
                            value={user.role}
                            onValueChange={(value) => handleRoleChange(user.id, value)}
                            // Nếu user là Manager, chỉ Owner/Admin mới được thay đổi vai trò của họ
                            disabled={isManager && !canPromoteDemote} 
                          >
                            <SelectTrigger className="w-[120px]"> {/* Giảm chiều rộng để trông giống User hơn */}
                              {/* Hiển thị giá trị hiện tại */}
                              <SelectValue placeholder={getSelectTriggerValue(user.role)} />
                            </SelectTrigger>
                            <SelectContent>
                              
                              {/* Logic đã được sửa: */}
                              {/* Cho phép chọn Manager nếu: (Mục tiêu là Viewer VÀ có quyền thăng cấp) HOẶC Mục tiêu đã là Manager */}
                              {(isUser && canPromoteDemote) || isManager ? (
                                <SelectItem
                                    value="manager"
                                    // Vô hiệu hóa nút nếu đang thăng cấp Viewer mà không có quyền
                                    disabled={isUser && !canPromoteDemote} 
                                >
                                    Manager
                                </SelectItem>
                              ) : null}

                              {/* Luôn hiển thị Xem, nhưng vô hiệu hóa nếu mục tiêu là Manager và không có quyền giáng cấp (chỉ Owner/Admin có quyền) */}
                              <SelectItem 
                                  value="viewer"
                                  disabled={isManager && !canPromoteDemote} 
                              >
                                  Xem
                              </SelectItem>

                            </SelectContent>
                          </Select>
                          
                          {/* Nút xóa/hủy quyền */}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveUser(user.id)}
                            disabled={!canRemove} 
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        // Trường hợp HIDE: Chỉ hiển thị nút xóa/hủy quyền nếu có quyền xóa người dùng cấp cao
                        isTargetMidTierOrHigher && canPromoteDemote && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveUser(user.id)}
                            // Chỉ Owner/Admin mới được xóa Admin/Owner/Manager khác
                            disabled={!canRemoveTargetByAdminOwner} 
                          >
                            <X className="h-4 w-4" />
                          </Button>
                      )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Hủy
          </Button>
          <Button onClick={() => onOpenChange(false)}>
            Lưu thay đổi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}