"use client";

import { useEffect, useState } from "react";
import { ServerResponseModel } from "../../../lib/typedefs/server-response";
import {
  CreatePermissionDTO,
  PermissionDTO,
  UpdatePermissionDTO,
} from "../dtos/permission.dto";
import { permissionService } from "../services/permission.service";

// Custom hooks for Permission APIs
export const usePermissions = () => {
  const [permissions, setPermissions] = useState<PermissionDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllPermissions = async (): Promise<
    ServerResponseModel<PermissionDTO[]>
  > => {
    setLoading(true);
    setError(null);

    try {
      const response = await permissionService.getAllPermissions();
      if (response.success) {
        setPermissions(response.data || []);
      } else {
        setError(response.message || "Error fetching permissions");
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

  return { permissions, loading, error, fetchAllPermissions };
};

export const useFilePermissions = (fileId?: string) => {
  const [permissions, setPermissions] = useState<PermissionDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFilePermissions = async (
    id: string
  ): Promise<ServerResponseModel<PermissionDTO[]>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await permissionService.getFilePermissions(id);
      if (response.success) {
        setPermissions(response.data || []);
      } else {
        setError(response.message || "Error fetching file permissions");
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

  useEffect(() => {
    if (fileId) {
      fetchFilePermissions(fileId);
    }
  }, [fileId]);

  return { permissions, loading, error, fetchFilePermissions };
};

export const usePermission = (id?: string) => {
  const [permission, setPermission] = useState<PermissionDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPermission = async (
    permissionId: string
  ): Promise<ServerResponseModel<PermissionDTO>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await permissionService.getPermissionById(permissionId);
      if (response.success) {
        setPermission(response.data || null);
      } else {
        setError(response.message || "Error fetching permission");
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

  useEffect(() => {
    if (id) {
      fetchPermission(id);
    }
  }, [id]);

  return { permission, loading, error, fetchPermission };
};

export const usePermissionMutations = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const assignPermission = async (
    permissionData: CreatePermissionDTO
  ): Promise<ServerResponseModel<any>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await permissionService.assignPermission(permissionData);
      if (!response.success) {
        setError(response.message || "Error assigning permission");
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

  const updatePermission = async (
    permissionId: string,
    permissionData: UpdatePermissionDTO
  ): Promise<ServerResponseModel<PermissionDTO>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await permissionService.updatePermission(
        permissionId,
        permissionData
      );
      if (response.success) {
        return response;
      } else {
        setError(response.message || "Error updating permission");
        return response;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      return { success: false, message: errorMessage, statusCode: 500 };
    } finally {
      setLoading(false);
    }
  };

  const removePermission = async (
    permissionId: string,
    fileId: string
  ): Promise<ServerResponseModel<any>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await permissionService.removePermission(
        permissionId,
        fileId
      );
      if (!response.success) {
        setError(response.message || "Error removing permission");
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

  return {
    loading,
    error,
    assignPermission,
    updatePermission,
    removePermission,
  };
};
