// src/components/login/LoginUI.tsx
"use client";

import { useState } from "react";
import { Loader2, User, Lock, LogIn } from "lucide-react"; 
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { useRouter } from "next/navigation";
import { useAuth } from "../../features/auth";
import { LoginDTO } from "../../features/auth"; 
// Đã loại bỏ các imports và types liên quan đến RegisterDTO/AuthType

type DialogState = "loading" | "success" | "error" | null;

export default function LoginUI() {
  const router = useRouter();
  const { login } = useAuth();
  // Đã loại bỏ [authType] và [email]
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dialogState, setDialogState] = useState<DialogState>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getTitle = "Đăng nhập";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDialogState("loading");
    setErrorMessage("");

    try {
      // Chỉ còn Logic Đăng nhập (giả định isLogin = true)
      const credentials: LoginDTO = { username, password };
      const response = await login(credentials);
        
      if (!response.success) {
        throw new Error(response.message || 'Login failed');
      }

      // Success
      setDialogState("success");
      setTimeout(() => {
        setDialogState(null);
        router.push("/"); // Chuyển hướng tới /alldocuments (đã sửa ở page.tsx)
      }, 1500);

    } catch (error) {
      // Error
      setErrorMessage(error instanceof Error ? error.message : "Đã xảy ra lỗi không xác định.");
      setDialogState("error");
      setTimeout(() => setDialogState(null), 3000); // Tự đóng sau 3s
    } finally {
      // Reset fields
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <Card className="w-full max-w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">{getTitle} vào DocManager</CardTitle>
          <CardDescription className="text-center">
            Sử dụng tên đăng nhập và mật khẩu của bạn.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                  <LogIn className="mr-2 size-4" />
                  {getTitle}
                </>
              )}
            </Button>
          </form>
          
          {/* ĐÃ LOẠI BỎ: Khối chuyển đổi Đăng ký / Dòng "Chưa có tài khoản?" */}
          <div className="mt-4 text-center text-sm">
            <p className="text-muted-foreground"></p>
          </div>
        </CardContent>
      </Card>

      {/* Alert Dialogs (Giữ nguyên) */}
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
              <LogIn className="size-12 text-green-500" />
            </div>
            <AlertDialogTitle className="text-center">Thành công!</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Đăng nhập thành công. Đang chuyển hướng...
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
    </div>
  );
}