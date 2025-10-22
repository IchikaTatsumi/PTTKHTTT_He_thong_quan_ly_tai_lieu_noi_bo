// src/app/page.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// MOCK: Giả định trạng thái đăng nhập
const isLoggedIn = false; 

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/alldocuments");
    } else {
      router.push("/login"); 
    }
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-muted-foreground">Đang tải...</p>
    </div>
  );
}