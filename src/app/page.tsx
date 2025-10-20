"use client";

// FIX: Điều chỉnh import để đưa React vào scope, giải quyết lỗi 7016, 2503 và 7026 (JSX implicitly has type 'any').
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login or all documents based on auth status
    // For now, redirect to all documents
    router.push("/alldocuments");
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-muted-foreground">Đang chuyển hướng...</p>
    </div>
  );
}