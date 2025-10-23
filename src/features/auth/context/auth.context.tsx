"use client";

import { removeAuthToken, setAuthToken } from "@/src/lib/cookie/cookie";
import { createContext, ReactNode, useEffect, useState } from "react";
import { ServerResponseModel } from "../../../lib/typedefs/server-response";
import { UserDTO } from "../../users/dtos/user.dto";
import { userService } from "../../users/services/user.service";
import { LoginDTO, LoginResponseDTO } from "../dtos/auth.dto";
import { authService } from "../services/auth.service";

// Auth Context and Provider
export interface AuthContextType {
  user: UserDTO | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (
    credentials: LoginDTO
  ) => Promise<ServerResponseModel<LoginResponseDTO>>;
  logout: () => void;
  checkAuthStatus: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Auth Provider Component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check authentication status on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Try to get user info to verify authentication
        const response = await userService.getMyInfo();
        if (response.success && response.data) {
          setUser(response.data);
          setIsAuthenticated(true);
        } else {
          // If request fails, user is not authenticated
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (
    credentials: LoginDTO
  ): Promise<ServerResponseModel<LoginResponseDTO>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.login(credentials);

      if (response.success && response.data) {
        setAuthToken(response.data.token);
        setUser(response.data.user);
        setIsAuthenticated(true);
      } else {
        setError(response.message || "Login failed");
      }

      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      return { success: false, message: errorMessage, statusCode: 500 };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    removeAuthToken();

    setUser(null);
    setIsAuthenticated(false);
    setError(null);
  };

  const value = {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    checkAuthStatus: async () => {
      try {
        const response = await userService.getMyInfo();
        if (response.success && response.data) {
          setUser(response.data);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
      }
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
