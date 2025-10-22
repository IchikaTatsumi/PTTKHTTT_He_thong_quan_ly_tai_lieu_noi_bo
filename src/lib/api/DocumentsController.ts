// src/lib/api/DocumentsController.ts
import { fetchApi, Document } from '../../lib/utils';
import { getAuthToken } from '../../lib/cookie/cookie'; // <--- ĐÃ SỬA: Import hàm getAuthToken chuẩn

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

interface FileUploadMetadata {
  documentName: string; 
}

export const documentsController = {
  getAllFiles: async (query?: string): Promise<Document[]> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");

    const endpoint = query ? `/files?name=${encodeURIComponent(query)}` : '/files';
    return fetchApi<Document[]>(endpoint, {
      method: 'GET',
      token,
    });
  },

  uploadFile: async (file: File, metadata: FileUploadMetadata): Promise<Document> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");

    const formData = new FormData();
    formData.append('file', file, metadata.documentName); 

    return fetchApi<Document>('/files/upload', {
      method: 'POST',
      token,
      isMultipart: true,
      body: formData,
    });
  },

  downloadFile: async (fileId: string): Promise<Response> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");

    return fetch(`${API_BASE_URL}/files/${fileId}/download`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  deleteFile: async (fileId: string): Promise<void> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");

    return fetchApi<void>(`/files/${fileId}`, {
      method: 'DELETE',
      token,
    });
  },

  createShareLink: async (fileId: string): Promise<string> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");

    return fetchApi<string>(`/files/${fileId}/share-link`, {
      method: 'GET',
      token,
    });
  },

  updateFileMetadata: async (fileId: string, payload: { name: string }): Promise<Document> => {
    const token = getAuthToken();
    if (!token) throw new Error("Authentication token not found.");

    return fetchApi<Document>(`/files/${fileId}`, {
      method: 'PATCH',
      token,
      body: payload,
    });
  },
};