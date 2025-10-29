"use client";

import { useState } from "react";
import { Loader2, User, Mail, Lock, LogIn, UserPlus } from "lucide-react";
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
import { LoginDTO, RegisterDTO } from "../../features/auth";

type AuthType = "login" | "register";
type DialogState = "loading" | "success" | "error" | null;

export default function LoginUI() {
  const router = useRouter();
  const { login } = useAuth();
  const [authType, setAuthType] = useState<AuthType>("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dialogState, setDialogState] = useState<DialogState>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const isLogin = authType === "login";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDialogState("loading");
    setErrorMessage("");

    try {
      if (isLogin) {
        const credentials: LoginDTO = { username, password };
        const response = await login(credentials);
        
        if (!response.success) {
          throw new Error(response.message || 'Login failed');
        }
      } else {
        // --- Đã SỬA: Bỏ chặn lỗi và thay bằng logic console.log ---
        const userData: RegisterDTO = { username, password };
        
        // Log dữ liệu ra console theo yêu cầu
        console.log("Registration Data to be sent:", userData);
        
        // Giả lập thành công để hiển thị thông báo UI và chuyển hướng
      }

      // Success (Cho cả Login thành công và Register đã log data)
      setDialogState("success");
      setTimeout(() => {
        setDialogState(null);
        router.push("/"); // Chuyển hướng sau khi thành công
      }, 1500);

    } catch (error) {
      // Error
      setErrorMessage(error instanceof Error ? error.message : "Đã xảy ra lỗi không xác định.");
      setDialogState("error");
      setTimeout(() => setDialogState(null), 3000); // Tự đóng sau 3s
    } finally {
      if (isLogin) {
        setUsername("");
        setPassword("");
      } else {
        setUsername("");
        // setEmail(""); // Đã xóa ở lần sửa trước
        setPassword("");
      }
    }
  };

  const getTitle = isLogin ? "Đăng nhập" : "Đăng ký";

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <Card className="w-full max-w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">{getTitle} vào DocManager</CardTitle>
          <CardDescription className="text-center">
            {isLogin 
              ? "Sử dụng tên đăng nhập và mật khẩu của bạn." 
              : "Tạo tài khoản mới để bắt đầu quản lý tài liệu. (Role mặc định: User)"}
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

            {/* Email (Chỉ cho Đăng ký) --- ĐÃ BỊ XÓA Ở LẦN SỬA TRƯỚC --- */}
            
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
                  {isLogin ? <LogIn className="mr-2 size-4" /> : <UserPlus className="mr-2 size-4" />}
                  {getTitle}
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm">
            {isLogin ? (
              <p>
                Chưa có tài khoản?{" "}
                <Button variant="link" type="button" onClick={() => setAuthType("register")} className="p-0 h-auto text-primary">
                  Đăng ký ngay
                </Button>
              </p>
            ) : (
              <p>
                Đã có tài khoản?{" "}
                <Button variant="link" type="button" onClick={() => setAuthType("login")} className="p-0 h-auto text-primary">
                  Đăng nhập
                </Button>
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Alert Dialogs */}
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
              {isLogin 
                ? "Đăng nhập thành công. Đang chuyển hướng..." 
                : "Dữ liệu đăng ký đã được ghi vào console. Đang chuyển hướng..."}
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