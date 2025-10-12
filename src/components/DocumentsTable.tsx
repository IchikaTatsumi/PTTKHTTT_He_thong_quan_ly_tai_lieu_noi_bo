import { useState } from "react";
import { FileText, MoreVertical, Download, Share2, Trash2, Eye, Lock } from "lucide-react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { PermissionsDialog } from "./PermissionsDialog";

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  uploadedAt: string;
  category: string;
  accessLevel: "public" | "private" | "restricted";
  sharedWith: number;
}

interface DocumentsTableProps {
  documents: Document[];
  onDelete: (id: string) => void;
  onDownload: (id: string) => void;
}

export function DocumentsTable({ documents, onDelete, onDownload }: DocumentsTableProps) {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [permissionsOpen, setPermissionsOpen] = useState(false);

  const getAccessBadge = (level: string) => {
    switch (level) {
      case "public":
        return <Badge variant="secondary">Công khai</Badge>;
      case "private":
        return <Badge variant="outline">Riêng tư</Badge>;
      case "restricted":
        return <Badge variant="destructive">Hạn chế</Badge>;
      default:
        return <Badge>{level}</Badge>;
    }
  };

  const getFileIcon = (type: string) => {
    return <FileText className="h-5 w-5 text-muted-foreground" />;
  };

  const handlePermissionsClick = (doc: Document) => {
    setSelectedDoc(doc);
    setPermissionsOpen(true);
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
              <TableHead>Ngày tải lên</TableHead>
              <TableHead>Quyền truy cập</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.length === 0 ? (
              <TableRow>
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
                    {getFileIcon(doc.type)}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{doc.name}</span>
                      <span className="text-muted-foreground">{doc.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.uploadedBy}</TableCell>
                  <TableCell>{doc.uploadedAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getAccessBadge(doc.accessLevel)}
                      {doc.sharedWith > 0 && (
                        <span className="text-muted-foreground">
                          +{doc.sharedWith}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Xem
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onDownload(doc.id)}>
                          <Download className="mr-2 h-4 w-4" />
                          Tải xuống
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handlePermissionsClick(doc)}>
                          <Lock className="mr-2 h-4 w-4" />
                          Phân quyền
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" />
                          Chia sẻ
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="text-destructive"
                          onClick={() => onDelete(doc.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Xóa
                        </DropdownMenuItem>
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
          open={permissionsOpen}
          onOpenChange={setPermissionsOpen}
          document={selectedDoc}
        />
      )}
    </>
  );
}
