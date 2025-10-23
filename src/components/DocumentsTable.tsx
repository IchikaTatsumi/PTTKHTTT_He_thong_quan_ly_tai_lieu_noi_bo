// src/components/DocumentsTable.tsx
import { Download, FileText, MoreVertical, Trash2, Users } from "lucide-react";
import { useState } from "react";
import { FileDTO } from "../features/files";
import { UserDTO } from "../features/users";
import { PermissionLevel, Role } from "../lib/constants/enums";
import { PermissionsDialog } from "./PermissionsDialog";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface DocumentsTableProps {
  documents: FileDTO[];
  onDelete: (id: string) => void;
  onDownload: (id: string) => void | Promise<void>;
  currentUser: UserDTO;
  onEditInfo: (doc: FileDTO) => void;
}

export function DocumentsTable({
  documents,
  onDelete,
  onDownload,
  currentUser,
  onEditInfo,
}: DocumentsTableProps) {
  const [selectedDoc, setSelectedDoc] = useState<FileDTO | null>(null);
  const [permissionsOpen, setPermissionsOpen] = useState(false);
  // Logic kiểm tra quyền: Owner, Admin, hoặc Manager có quyền cao
  const checkPermission = (
    doc: FileDTO,
    permission: "view" | "delete" | "share"
  ): boolean => {
    // Logic mặc định: Giả định nếu tài liệu hiển thị, người dùng có quyền View (Đọc/Tải xuống)
    if (permission === "view") {
      return true; // Luôn cho phép Xem/Tải xuống nếu tài liệu có trong danh sách
    }

    const userRole = currentUser.role.toLowerCase();

    const isOwner = doc.owner?.username === currentUser.username;

    // Admin, Owner, VÀ Manager có quyền cao cho delete/share
    const isManagerOrHigher =
      userRole === "owner" || userRole === "admin" || userRole === "manager";

    if (isOwner) return true; // Owner có tất cả quyền

    switch (permission) {
      case "delete":
      case "share":
        // Owner, Admin, VÀ Manager có quyền delete/share
        return isManagerOrHigher;
      default:
        return false;
    }
  };

  const handlePermissionsClick = (doc: FileDTO) => {
    setSelectedDoc(doc);
    setPermissionsOpen(true);
  };

  // Kept placeholder function to avoid errors elsewhere, but it's not used now.
  const handleEditInfoClick = (doc: FileDTO) => {
    onEditInfo(doc);
    console.log("Editing information for document:", doc.name);
  };

  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]"></TableHead>
              <TableHead>Tên tài liệu</TableHead>
              <TableHead>Kích thước</TableHead>
              <TableHead>Người tải lên</TableHead>
              <TableHead>Quyền</TableHead>
              <TableHead>Ngày tải lên</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <FileText className="h-12 w-12" />
                    <p>Chưa có tài liệu nào</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{doc.name}</span>
                      <span className="text-muted-foreground">
                        {doc.mimeType}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.owner?.username}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded ${
                        doc.permissions[0].permissionLevel ===
                        PermissionLevel.VIEW
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {PermissionLevel[doc.permissions[0].permissionLevel]}
                    </span>
                  </TableCell>
                  <TableCell>{doc.createdAt}</TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {/* Xem */}
                        <DropdownMenuItem
                          onClick={async () => await onDownload(doc.id)}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Xem
                        </DropdownMenuItem>

                        {/* Phân quyền (Chỉ Owner/Admin/Manager) */}
                        {checkPermission(doc, "share") ? (
                          <DropdownMenuItem
                            onClick={() => handlePermissionsClick(doc)}
                          >
                            <Users className="mr-2 h-4 w-4" />
                            Phân quyền
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem disabled>
                            <Users className="mr-2 h-4 w-4" />
                            Phân quyền
                          </DropdownMenuItem>
                        )}

                        <DropdownMenuSeparator />

                        {/* Xóa (Chỉ Owner/Admin/Manager) */}
                        {checkPermission(doc, "delete") ? (
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => onDelete(doc.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Xóa
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem disabled>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Xóa
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {selectedDoc && (
        <PermissionsDialog
          currentUserId={currentUser.id}
          isOwner={currentUser?.id === selectedDoc.owner?.id}
          open={permissionsOpen}
          onOpenChange={setPermissionsOpen}
          document={selectedDoc}
          currentUserRole={currentUser.role as Role}
        />
      )}
    </>
  );
}
