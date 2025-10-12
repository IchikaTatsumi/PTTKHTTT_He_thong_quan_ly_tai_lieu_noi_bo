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
}

interface UserPermission {
  id: string;
  name: string;
  email: string;
  role: "viewer" | "editor" | "owner";
  department: string;
}

export function PermissionsDialog({ open, onOpenChange, document }: PermissionsDialogProps) {
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
      id: "2",
      name: "Trần Thị B",
      email: "tranthib@company.com",
      role: "editor",
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
    setPermissions(permissions.map(p => 
      p.id === userId ? { ...p, role: newRole as any } : p
    ));
  };

  const handleRemoveUser = (userId: string) => {
    setPermissions(permissions.filter(p => p.id !== userId));
  };

  const handleAddUser = (user: typeof availableUsers[0]) => {
    setPermissions([...permissions, { ...user, role: "viewer" }]);
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "owner":
        return <Badge>Chủ sở hữu</Badge>;
      case "editor":
        return <Badge variant="secondary">Chỉnh sửa</Badge>;
      case "viewer":
        return <Badge variant="outline">Xem</Badge>;
      default:
        return <Badge>{role}</Badge>;
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
          {/* General Access */}
          <div className="space-y-2">
            <Label>Quyền truy cập chung</Label>
            <Select defaultValue={document.accessLevel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <div>
                      <div>Công khai</div>
                      <div className="text-muted-foreground">Tất cả nhân viên có thể xem</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="private">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <div>
                      <div>Riêng tư</div>
                      <div className="text-muted-foreground">Chỉ người được chỉ định</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="restricted">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <div>
                      <div>Hạn chế</div>
                      <div className="text-muted-foreground">Cần phê duyệt để truy cập</div>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

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
              {permissions.map(user => (
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
                        {user.role === "owner" && getRoleBadge(user.role)}
                      </div>
                      <div className="text-muted-foreground">
                        {user.email} • {user.department}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {user.role !== "owner" && (
                      <>
                        <Select
                          value={user.role}
                          onValueChange={(value) => handleRoleChange(user.id, value)}
                        >
                          <SelectTrigger className="w-[130px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="viewer">Xem</SelectItem>
                            <SelectItem value="editor">Chỉnh sửa</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveUser(user.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
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
