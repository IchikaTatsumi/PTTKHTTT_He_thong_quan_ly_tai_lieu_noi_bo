import { apiFetch } from '../../../lib/api-fetch';
import { 
  LoginDTO, 
  RegisterDTO, 
  LoginResponseDTO, 
  RegisterResponseDTO 
} from '../dtos/auth.dto';
import { ServerResponseModel } from '../../../lib/typedefs/server-response';

// Auth Service API
export const authService = {
  // Login
  async login(credentials: LoginDTO): Promise<ServerResponseModel<LoginResponseDTO>> {
    return await apiFetch<LoginResponseDTO>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  // Register a new user (if the API supports it)
  async register(userData: RegisterDTO): Promise<ServerResponseModel<RegisterResponseDTO>> {
    // Note: Based on the API docs, user creation is admin-only via /users endpoint
    // This is included in case registration is implemented separately
    return await apiFetch<RegisterResponseDTO>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};