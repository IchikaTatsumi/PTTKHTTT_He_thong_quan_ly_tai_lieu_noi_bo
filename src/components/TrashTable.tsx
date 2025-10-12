import { FileText, MoreVertical, RotateCcw, Trash2 } from "lucide-react";
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
import { Document } from "./DocumentsTable";

interface TrashTableProps {
  documents: Document[];
  onRestore: (id: string) => void;
  onDeletePermanently: (id: string) => void;
}

export function TrashTable({ documents, onRestore, onDeletePermanently }: TrashTableProps) {
  const getFileIcon = (type: string) => {
    return <FileText className="h-5 w-5 text-muted-foreground" />;
  };

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]"></TableHead>
            <TableHead>Tên tài liệu</TableHead>
            <TableHead>Kích thước</TableHead>
            <TableHead>Người tải lên</TableHead>
            <TableHead>Ngày xóa</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Trash2 className="h-12 w-12" />
                  <p>Thùng rác trống</p>
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onRestore(doc.id)}>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Khôi phục
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        className="text-destructive"
                        onClick={() => onDeletePermanently(doc.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Xóa vĩnh viễn
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
  );
}
