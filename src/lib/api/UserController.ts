// src/lib/api/UserController.ts
import { fetchApi, UserProfileDTO } from '../../lib/utils';
import { getAuthToken } from '../../lib/cookie/cookie'; // <--- ĐÃ SỬA: Import hàm getAuthToken chuẩn

export const userController = {
  /**
   * GET /users/me: Lấy thông tin người dùng hiện tại.
   */
  getMe: async (): Promise<UserProfileDTO> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");
    
    return fetchApi<UserProfileDTO>('/users/me', {
      method: 'GET',
      token,
    });
  },
  
  // Các hàm khác như getAllUsers, deleteUser (Admin only) cũng sẽ được định nghĩa tương tự.
};