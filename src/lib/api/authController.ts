// src/lib/api/authController.ts
import { fetchApi, LoginData } from '../../lib/utils';
// import { setAuthData } from '../../lib/cookie'; // Tái kích hoạt khi có hàm setAuthData

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  email: string;
  // Role sẽ được set mặc định là 'user' ở backend
}

export const authController = {
  /**
   * POST /auth/login: Xử lý đăng nhập và lưu token.
   * @param payload {username, password}
   */
  login: async (payload: LoginPayload): Promise<LoginData> => {
    // Giả lập call API
    const data = { user: { id: 'mock', username: payload.username, email: 'mock@mock.com', role: 'admin' as const }, token: 'mock-token' };
    
    // Nếu có backend thực:
    // const data = await fetchApi<LoginData>('/auth/login', {
    //   method: 'POST',
    //   body: payload,
    // });
    
    // setAuthData(data); // Tái kích hoạt khi có hàm setAuthData
    return data;
  },
  
  /**
   * POST /auth/register: Xử lý đăng ký người dùng mới.
   * @param payload {username, email, password}
   */
  register: async (payload: RegisterPayload): Promise<LoginData> => {
    // Giả lập call API
    const data = { user: { id: 'mock-reg', username: payload.username, email: payload.email, role: 'user' as const }, token: 'mock-reg-token' };
    
    // Nếu có backend thực:
    // const data = await fetchApi<LoginData>('/auth/register', {
    //   method: 'POST',
    //   body: payload,
    // });
    
    // setAuthData(data); // Tái kích hoạt khi có hàm setAuthData
    return data;
  },

  /**
   * Xử lý đăng xuất (chủ yếu là xóa token).
   */
  logout: () => {
    // Cần gọi hàm xóa token ở đây (ví dụ: removeAuthData())
    console.log("Logged out (Token removed from client)");
  }
};