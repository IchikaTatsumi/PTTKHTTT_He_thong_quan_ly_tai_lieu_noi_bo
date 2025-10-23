"use client";

import { useContext } from "react";
import {
  AuthContext,
  AuthContextType,
  AuthProvider,
} from "../context/auth.context";

// Re-export the useAuth hook and AuthProvider
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider };
