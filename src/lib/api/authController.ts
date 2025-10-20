import { fetchApi, LoginData } from '../../lib/utils';
import { setAuthData } from '../../lib/cookie';

export interface LoginPayload {
  username: string;
  password: string;
}

export const authController = {
  /**
   * POST /auth/login: Xử lý đăng nhập và lưu token.
   * @param payload {username, password}
   */
  login: async (payload: LoginPayload): Promise<LoginData> => {
    const data = await fetchApi<LoginData>('/auth/login', {
      method: 'POST',
      body: payload,
    });
    
    // Lưu token và user info vào storage sau khi đăng nhập thành công
    setAuthData(data);
    return data;
  },

  /**
   * Xử lý đăng xuất (chủ yếu là xóa token).
   */
  logout: () => {
    // Giả lập gọi API server để revoke token (nếu có), sau đó xóa cục bộ.
    // Hiện tại chỉ xóa cục bộ:
    // removeAuthData();
  }
};