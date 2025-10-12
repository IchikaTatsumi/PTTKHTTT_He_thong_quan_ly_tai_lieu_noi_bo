"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { useRouter } from "next/navigation";

type DialogState = "loading" | "success" | "error" | null;

export default function LoginUI() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [dialogState, setDialogState] = useState<DialogState>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Hiển thị dialog loading
    setDialogState("loading");
    
    // Giả lập API call
    setTimeout(() => {
      // Mock login - kiểm tra đơn giản
      if (username && password) {
        // Giả sử đăng nhập thành công
        setDialogState("success");
        
        // Chuyển hướng sau 1.5 giây
        setTimeout(() => {
          router.push("/alldocuments");
        }, 1500);
      } else {
        // Đăng nhập thất bại
        setErrorMessage("Vui lòng nhập đầy đủ username và mật khẩu");
        setDialogState("error");
      }
    }, 1500);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      <div className="w-full max-w-[340px] rounded-xl bg-white p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-2xl text-gray-800">Login to Account</h1>
          <p className="text-sm text-gray-500">Please enter your email and password to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm text-gray-700">User name</Label>
            <Input
              id="username"
              type="text"
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-10 bg-gray-100 border-gray-200"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm text-gray-700">Password</Label>
              <button type="button" className="text-xs text-gray-400 hover:text-gray-600">
                Forget Password?
              </button>
            </div>
            <Input
              id="password"
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 bg-gray-100 border-gray-200"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember" 
              checked={rememberPassword}
              onCheckedChange={(checked) => setRememberPassword(checked as boolean)}
            />
            <label
              htmlFor="remember"
              className="text-sm text-gray-600 cursor-pointer select-none"
            >
              Remember Password
            </label>
          </div>

          <Button 
            type="submit" 
            className="w-full h-11 bg-blue-500 hover:bg-blue-600 text-white rounded-md" 
            disabled={dialogState === "loading"}
          >
            {dialogState === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </div>

      {/* Loading Dialog */}
      <AlertDialog open={dialogState === "loading"}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center justify-center mb-4">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
            </div>
            <AlertDialogTitle className="text-center">Đang đăng nhập</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Vui lòng đợi trong giây lát...
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>

      {/* Success Dialog */}
      <AlertDialog open={dialogState === "success"}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
            <AlertDialogTitle className="text-center">Đăng nhập thành công!</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Chào mừng bạn quay trở lại. Đang chuyển hướng...
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error Dialog */}
      <AlertDialog open={dialogState === "error"} onOpenChange={() => setDialogState(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center justify-center mb-4">
              <XCircle className="h-12 w-12 text-destructive" />
            </div>
            <AlertDialogTitle className="text-center">Đăng nhập thất bại</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {errorMessage || "Email hoặc mật khẩu không đúng. Vui lòng thử lại."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setDialogState(null)}>
              Thử lại
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
