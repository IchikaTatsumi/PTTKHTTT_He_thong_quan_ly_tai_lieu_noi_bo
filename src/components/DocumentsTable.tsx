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
import { formatBytes } from "../lib/utils"; 

interface DocumentsTableProps {
  documents: FileDTO[];
  currentUser: UserDTO;
  onDelete: (id: string) => void;
  onDownload: (id: string) => void | Promise<void>;
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
  
  // Hàm helper để định dạng DateTime, BẮT BUỘC sử dụng múi giờ Việt Nam
  const formatDate = (isoString: string): string => {
    if (!isoString) return '';
    try {
      // 1. Tạo đối tượng Date.
      const date = new Date(isoString); 
      
      // 2. Kiểm tra tính hợp lệ
      if (isNaN(date.getTime())) {
          return isoString;
      }
      
      // 3. Định dạng ngày giờ theo chuẩn Việt Nam: dd/MM/yyyy HH:mm:ss 
      // SỬ DỤNG PHƯƠNG PHÁP HIỂN THỊ CHUỖI VÀ ÉP MÚI GIỜ
      
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh', // Buộc hiển thị theo múi giờ Việt Nam (GMT+7)
        hour12: false, // Đảm bảo định dạng 24h
      };

      // Định dạng thành chuỗi 'HH:mm:ss, dd/MM/yyyy'
      const formattedDate = new Intl.DateTimeFormat('vi-VN', options).format(date);
      
      // Định dạng 'vi-VN' với tùy chọn này thường trả về định dạng "HH:mm:ss, dd/MM/yyyy"
      // Ta cần tách chuỗi và chuyển sang định dạng mong muốn 'HH:mm:ss dd/MM/yyyy'
      
      const parts = formattedDate.split(/[ ,]+/);
      if (parts.length >= 2) {
        // parts[0] = HH:mm:ss, parts[1] = dd/MM/yyyy
        return `${parts[0]} ${parts[1]}`;
      }

      return formattedDate;

    } catch (e) {
      // Trả về chuỗi gốc nếu có lỗi format
      return isoString; 
    }
  };


  // Logic kiểm tra quyền: Owner, Admin, hoặc Manager có quyền cao
  const checkPermission = (
    doc: FileDTO,
    permission: "view" | "delete" | "share"
  ): boolean => {
    // Sửa lỗi: Trả về false ngay lập tức nếu currentUser là null (trong quá trình logout)
    if (!currentUser) return false;

    // Logic mặc định: Giả định nếu tài liệu hiển thị, người dùng có quyền View (Đọc/Tải xuống)
    if (permission === "view") {
      return true; // Luôn cho phép Xem/Tải xuống nếu tài liệu có trong danh sách
    }

    const userRole = currentUser.role.toLowerCase();

    const isOwner = doc.owner?.id === currentUser.id;

    // Kiểm tra xem user hiện tại có quyền MANAGE trong mảng permissions của file không.
    // Mảng doc.permissions chỉ chứa quyền của người dùng hiện tại đối với file này (không có trường user).
    const hasManagePermission = doc.permissions.some(
      // Loại bỏ lỗi 'Parameter 'p' implicitly has an 'any' type' (ts(7006))
      (p: { permissionLevel: PermissionLevel }) => p.permissionLevel === PermissionLevel.MANAGE
    );

    // Admin, Owner, VÀ người có quyền MANAGE trên tài liệu này
    const isManagerOrHigher =
      userRole === Role.Admin.toLowerCase() || 
      isOwner || 
      hasManagePermission;


    if (isOwner) return true; // Owner có tất cả quyền

    switch (permission) {
      case "delete":
      case "share":
        // Owner, Admin, VÀ người có quyền MANAGE có quyền delete/share
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
              <TableHead className="w-10"></TableHead>
              <TableHead>Tên tài liệu</TableHead>
              <TableHead>Kích thước</TableHead>
              <TableHead>Người tải lên</TableHead>
              <TableHead>Quyền</TableHead>
              <TableHead>Ngày tải lên</TableHead>
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.length === 0 ? (
              <TableRow>
                {/* Đã sửa ColSpan thành 7 (4 cột + 3 cột không hiển thị width) */}
                <TableCell colSpan={7} className="text-center py-8">
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
                  {/* Áp dụng formatBytes */}
                  <TableCell>{formatBytes(doc.size)}</TableCell>
                  <TableCell>{doc.owner?.username}</TableCell>
                  <TableCell>
                    {/* Đã thêm component Badge nếu cần, nhưng giữ nguyên cấu trúc span */}
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded ${
                        doc.permissions[0]?.permissionLevel ===
                        PermissionLevel.VIEW
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {/* Xử lý trường hợp permissions rỗng hoặc không có phần tử đầu tiên */}
                      {doc.permissions[0]?.permissionLevel ? PermissionLevel[doc.permissions[0].permissionLevel] : "Không có"}
                    </span>
                  </TableCell>
                  {/* Áp dụng formatDate đã sửa */}
                  <TableCell>{formatDate(doc.createdAt)}</TableCell>

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