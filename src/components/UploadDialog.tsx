// src/components/UploadDialog.tsx
"use client";

import * as React from "react"; 
import { Upload, X, FileText } from "lucide-react"; 
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // File type ở đây là File của trình duyệt (global type), nên không cần import
  onUpload: (file: File) => void;
  // NEW PROP: List of existing file names for de-duplication
  existingFileNames: string[];
}

const extractBaseName = (fileName: string) => {
    const lastDotIndex = fileName.lastIndexOf(".");
    return lastDotIndex !== -1 ? fileName.substring(0, lastDotIndex) : fileName;
};

// NEW HELPER: Logic để tạo tên file duy nhất với cơ chế đánh số (ví dụ: proxy (1).ts)
const getUniqueFileName = (
    baseName: string, 
    fileExtension: string, 
    existingFileNames: string[]
): string => {
    let finalName = `${baseName}${fileExtension}`;
    let counter = 1;

    // Kiểm tra nếu tên file đã tồn tại
    while (existingFileNames.includes(finalName)) {
        // Định dạng: basename (N).ext
        finalName = `${baseName} (${counter})${fileExtension}`;
        counter++;
    }
    return finalName;
};


export function UploadDialog({
  open,
  onOpenChange,
  onUpload,
  existingFileNames, // Destructure new prop
}: UploadDialogProps) {
  // File type ở đây là File của trình duyệt (global type)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documentName, setDocumentName] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };


  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setDocumentName(extractBaseName(file.name)); // Auto-fill
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setDocumentName(extractBaseName(file.name)); // Auto-fill
    }
  };

  const handleUpload = () => {
    if (selectedFile && documentName) {
      // 1. Lấy phần mở rộng gốc của file
      const lastDotIndex = selectedFile.name.lastIndexOf('.');
      const fileExtension = lastDotIndex !== -1 ? selectedFile.name.substring(lastDotIndex) : '';
      
      // 2. Tạo tên file cuối cùng DUY NHẤT bằng cách thêm số thứ tự nếu trùng
      const finalFileName = getUniqueFileName(
          documentName, // Dùng tên tài liệu đã chỉnh sửa/tự điền
          fileExtension, 
          existingFileNames
      );

      // 3. Tạo một File object mới với tên file duy nhất
      const renamedFile = new window.File([selectedFile], finalFileName, { type: selectedFile.type });

      onUpload(renamedFile);
      
      // Reset form
      setSelectedFile(null);
      setDocumentName("");
      if (fileInputRef.current) { 
          fileInputRef.current.value = "";
      }
      onOpenChange(false);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setSelectedFile(null);
    setDocumentName("");
    if (fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Tải tài liệu lên</DialogTitle>
          <DialogDescription>Tải tài liệu mới lên hệ thống</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* File Drop Zone */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? "border-primary bg-accent" : "border-border"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {selectedFile ? (
              <div className="flex w-full items-center justify-between rounded-md bg-accent p-3">
                <div className="flex items-center gap-3">
                  {/* Icon FileText */}
                  <FileText className="h-6 w-6" /> 
                  <div className="text-left">
                    <p className="text-sm font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleRemoveFile}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                <div>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="text-primary hover:underline">
                      Chọn file
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      hoặc kéo thả vào đây
                    </span>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    ref={fileInputRef} 
                    className="hidden"
                    accept="*/*"
                    onChange={handleFileChange}
                  />
                </div>
                <p className="text-muted-foreground">
                  Hỗ trợ tất cả định dạng file (.pdf, .doc, .py, .jsx, .tsx,
                  ...) - Tối đa 50MB
                </p>
              </div>
            )}
          </div>

          {/* Document Name Input */}
          <div className="space-y-2">
            <Label htmlFor="document-name">Tên tài liệu</Label>
            <Input
              id="document-name"
              type="text"
              placeholder="Nhập tên tài liệu..."
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              required
            />
          </div>

        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Hủy
          </Button>
          <Button
            onClick={handleUpload}
            disabled={!selectedFile || !documentName}
          >
            <Upload className="mr-2 h-4 w-4" />
            Tải lên
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}