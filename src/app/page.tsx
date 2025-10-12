"use client";

import { useEffect } from "react";
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
