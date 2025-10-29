"use client";

import { useState } from "react";
import { Loader2, User, Lock, UserPlus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { CreateUserDTO, useUserMutations } from "../features/users"; 

type DialogState = "loading" | "success" | "error" | null;

interface CreateUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateUserDialog({ open, onOpenChange }: CreateUserDialogProps) {
  const { createUser } = useUserMutations();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dialogState, setDialogState] = useState<DialogState>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDialogState("loading");
    setErrorMessage("");

    try {
      const userData: CreateUserDTO = { username, password };
      
      console.log("Admin creating user data:", userData);
      
      const response = await createUser(userData);

      if (!response.success) {
        console.error("User Creation API Error:", response.message);
        throw new Error(response.message || 'Tạo người dùng thất bại');
      }

      // Thành công
      setDialogState("success");
      
      // Reset fields
      setUsername("");
      setPassword("");
      
      setTimeout(() => {
        setDialogState(null);
        onOpenChange(false); // Đóng Dialog chính
      }, 1500);

    } catch (error) {
      // Lỗi
      setErrorMessage(error instanceof Error ? error.message : "Đã xảy ra lỗi không xác định.");
      setDialogState("error");
      setTimeout(() => setDialogState(null), 3000); 
    }
  };

  const getTitle = "Tạo người dùng mới";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]"> 
        <DialogHeader>
          <DialogTitle>{getTitle}</DialogTitle>
          <DialogDescription>
            Tạo tài khoản mới với role mặc định là User.
          </DialogDescription>
        </DialogHeader>

        <div className="p-4 pt-0 space-y-4"> 
            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Username */}
                <div className="space-y-2">
                <Label htmlFor="username">Tên đăng nhập</Label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                    id="username"
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    required
                    />
                </div>
                </div>
                
                {/* Password */}
                <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                    />
                </div>
                </div>

                <DialogFooter className="mt-6!">
                    <Button 
                    type="submit" 
                    className="w-full h-10" 
                    disabled={dialogState === "loading"}
                    >
                    {dialogState === "loading" ? (
                        <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Đang xử lý...
                        </>
                    ) : (
                        <>
                        <UserPlus className="mr-2 size-4" />
                        Submit
                        </>
                    )}
                    </Button>
                </DialogFooter>
            </form>
        </div>
      </DialogContent>

      {/* Alert Dialogs for status messages (Giữ nguyên) */}
      <AlertDialog open={dialogState === "loading"}>
        <AlertDialogContent className="sm:max-w-sm">
          <AlertDialogHeader>
            <div className="flex items-center justify-center mb-4">
              <Loader2 className="size-12 text-primary animate-spin" />
            </div>
            <AlertDialogTitle className="text-center">Đang xử lý...</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Vui lòng đợi trong giây lát.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={dialogState === "success"}>
        <AlertDialogContent className="sm:max-w-sm">
          <AlertDialogHeader>
            <div className="flex items-center justify-center mb-4">
              <UserPlus className="size-12 text-green-500" />
            </div>
            <AlertDialogTitle className="text-center">Thành công!</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Người dùng đã được tạo thành công!
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      
      <AlertDialog open={dialogState === "error"}>
        <AlertDialogContent className="sm:max-w-sm">
          <AlertDialogHeader>
            <div className="flex items-center justify-center mb-4">
              <Lock className="size-12 text-destructive" />
            </div>
            <AlertDialogTitle className="text-center">Thất bại</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {errorMessage || "Đã xảy ra lỗi. Vui lòng thử lại."}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </Dialog>
  );
}