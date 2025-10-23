import { apiFetch } from "../../../lib/api-fetch";
import { ServerResponseModel } from "../../../lib/typedefs/server-response";
import {
  CreatePermissionDTO,
  PermissionDTO,
  UpdatePermissionDTO,
} from "../dtos/permission.dto";

// Permission Service API
export const permissionService = {
  // Get all permissions
  async getAllPermissions(): Promise<ServerResponseModel<PermissionDTO[]>> {
    return await apiFetch<PermissionDTO[]>("/permissions", {
      withCredentials: true,
    });
  },

  // Get permissions for a specific file
  async getFilePermissions(
    fileId: string
  ): Promise<ServerResponseModel<PermissionDTO[]>> {
    return await apiFetch<PermissionDTO[]>(`/permissions/file/${fileId}`, {
      withCredentials: true,
    });
  },

  // Get permission by ID
  async getPermissionById(
    id: string
  ): Promise<ServerResponseModel<PermissionDTO>> {
    return await apiFetch<PermissionDTO>(`/permissions/${id}`, {
      withCredentials: true,
    });
  },

  // Assign permission to a user for a file
  async assignPermission(
    permissionData: CreatePermissionDTO
  ): Promise<ServerResponseModel<any>> {
    return await apiFetch("/permissions/assign", {
      method: "POST",
      body: JSON.stringify(permissionData),
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  },

  // Update permission level
  async updatePermission(
    permissionId: string,
    permissionData: UpdatePermissionDTO
  ): Promise<ServerResponseModel<PermissionDTO>> {
    return await apiFetch<PermissionDTO>(`/permissions/${permissionId}`, {
      method: "PATCH",
      body: JSON.stringify(permissionData),
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  },

  // Remove permission from user for file
  async removePermission(
    permissionId: string,
    fileId: string
  ): Promise<ServerResponseModel<any>> {
    return await apiFetch(`/permissions/${permissionId}/file/${fileId}`, {
      method: "DELETE",
      withCredentials: true,
    });
  },
};
