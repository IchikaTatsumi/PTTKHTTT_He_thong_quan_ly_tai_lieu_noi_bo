// src/lib/utils.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

interface ApiRequestOptions extends RequestInit {
  token?: string | null;
  isMultipart?: boolean;
  body?: any;
}

/**
 * Chuẩn hóa headers thành Record<string, string>
 */
function normalizeHeaders(headers?: HeadersInit): Record<string, string> {
  if (!headers) return {};
  if (headers instanceof Headers) {
    const result: Record<string, string> = {};
    headers.forEach((value, key) => (result[key] = value));
    return result;
  }
  if (Array.isArray(headers)) {
    const result: Record<string, string> = {};
    headers.forEach(([key, value]) => (result[key] = value));
    return result;
  }
  return headers; // đã là Record<string, string>
}

/**
 * Hàm tiện ích để gọi API backend NestJS.
 * Tự động thêm JWT và xử lý JSON/lỗi.
 */
export async function fetchApi<T>(endpoint: string, options: ApiRequestOptions = {}): Promise<T> {
  const { token, isMultipart, headers, body, ...rest } = options;

  const defaultHeaders: Record<string, string> = {
    'Accept': 'application/json',
    ...normalizeHeaders(headers),
  };

  if (!isMultipart) {
    defaultHeaders['Content-Type'] = 'application/json';
  }

  const finalHeaders: Record<string, string> = {
    ...defaultHeaders,
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };

  // Chỉ stringify nếu không phải FormData
  const fetchBody: BodyInit | undefined = body
    ? !isMultipart && !(body instanceof FormData)
      ? JSON.stringify(body)
      : body
    : undefined;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...rest,
    headers: finalHeaders,
    body: fetchBody,
  });

  const responseText = await response.text();

  if (!response.ok) {
    let errorData = { message: 'An unknown error occurred' };
    try {
      errorData = JSON.parse(responseText);
    } catch (e) {
      errorData.message = responseText || response.statusText;
    }
    throw new Error(errorData.message);
  }

  try {
    return responseText ? (JSON.parse(responseText) as T) : ({} as T);
  } catch (e) {
    return {} as T;
  }
}

/**
 * Chuẩn hóa ngày tháng từ định dạng dd/mm/yyyy (tiếng Việt) sang đối tượng Date chuẩn.
 * Giúp việc sắp xếp theo thời gian được chính xác.
 */
export const parseDate = (dateString: string): Date => {
  const parts = dateString.split('/');
  if (parts.length !== 3) {
      // Fallback cho trường hợp định dạng không đúng, trả về ngày không hợp lệ
      return new Date(NaN);
  }
  // parts[0] = ngày (dd), parts[1] = tháng (mm), parts[2] = năm (yyyy)
  // Lưu ý: Tháng trong JS là 0-indexed (0=tháng 1, 11=tháng 12), nên phải trừ 1.
  return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
}


// Giả định kiểu dữ liệu cơ bản cho các controller khác
export interface UserProfileDTO {
  id: string;
  username: string;
  role: 'admin' | 'user';
}

export interface LoginData {
  user: UserProfileDTO;
  token: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface PermissionDTO {
  id: string;
  permissionLevel: number;
}