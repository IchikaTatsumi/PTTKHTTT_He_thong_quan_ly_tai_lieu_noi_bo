// src/lib/api/PermissionController.ts
import { fetchApi, PermissionDTO } from '../../lib/utils';
import { getAuthToken } from '../../lib/cookie/cookie'; // <--- ĐÃ SỬA: Import tường minh file cookie.ts

interface CreatePermissionPayload {
    fileId: string;
    userId: string;
    permissionLevel: number; // 1: READ, 2: WRITE
}

interface UpdatePermissionPayload {
    fileId: string;
    permissionLevel: number;
}

export const permissionController = {
  /**
   * POST /permissions/assign: Cấp quyền cho người dùng với một tệp.
   */
  assignPermission: async (payload: CreatePermissionPayload): Promise<void> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");
    
    return fetchApi<void>('/permissions/assign', {
      method: 'POST',
      token,
      body: payload,
    });
  },

  /**
   * PATCH /permissions/:permissionId: Chỉnh sửa mức quyền của một người dùng.
   */
  updatePermission: async (permissionId: string, payload: UpdatePermissionPayload): Promise<PermissionDTO> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");
    
    return fetchApi<PermissionDTO>(`/permissions/${permissionId}`, {
      method: 'PATCH',
      token,
      body: payload,
    });
  },

  /**
   * DELETE /permissions/:permissionId/file/:fileId: Thu hồi quyền truy cập.
   */
  removePermission: async (permissionId: string, fileId: string): Promise<void> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");
    
    return fetchApi<void>(`/permissions/${permissionId}/file/${fileId}`, {
      method: 'DELETE',
      token,
    });
  },
  
  /**
   * GET /permissions/file/:fileId: Lấy danh sách quyền truy cập cho một tệp.
   */
  getPermissionsByFile: async (fileId: string): Promise<PermissionDTO[]> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");
    
    return fetchApi<PermissionDTO[]>(`/permissions/file/${fileId}`, {
      method: 'GET',
      token,
    });
  },
};