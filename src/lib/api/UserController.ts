import { fetchApi, UserProfileDTO } from '../../lib/utils';

/**
 * Fallback getAuthToken implementation so this file doesn't depend on a missing '../../lib/cookie' module.
 * It first tries to read an "auth_token" cookie, then falls back to localStorage keys "authToken" or "token".
 */
function getAuthToken(): string | null {
  if (typeof document === 'undefined' || typeof window === 'undefined') return null;

  // Try cookie "auth_token"
  const cookieMatch = document.cookie?.match(/(?:^|; )auth_token=([^;]+)/);
  if (cookieMatch && cookieMatch[1]) {
    try {
      return decodeURIComponent(cookieMatch[1]);
    } catch {
      return cookieMatch[1];
    }
  }

  // Try localStorage keys
  try {
    return localStorage.getItem('authToken') || localStorage.getItem('token') || null;
  } catch {
    return null;
  }
}

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