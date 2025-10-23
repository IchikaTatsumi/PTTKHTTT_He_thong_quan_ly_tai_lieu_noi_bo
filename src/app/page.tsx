"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AlldocumentsUI from "../components/alldocuments/AlldocumentsUI";
import { useAuth } from "../features/auth";

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [router, isAuthenticated, loading]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Đang kiểm tra phiên đăng nhập...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <AlldocumentsUI />
    </div>
  );
}
