import { getAuthTokenServer } from "@/src/lib/cookie/cookie-server";
import { apiFetch } from "../../../lib/api-fetch";
import { ServerResponseModel } from "../../../lib/typedefs/server-response";
import { FileDTO, FileQueryDTO, UploadFileResponseDTO } from "../dtos/file.dto";

// File Service API
export const fileService = {
  // Get all files (filtered by query parameters)
  async getFiles(
    params?: FileQueryDTO
  ): Promise<ServerResponseModel<FileDTO[]>> {
    const queryString = params
      ? new URLSearchParams(
          Object.entries(params).filter(([_, v]) => v !== undefined)
        ).toString()
      : "";
    const url = queryString ? `/files?${queryString}` : "/files";
    return await apiFetch<FileDTO[]>(url, { withCredentials: true });
  },

  // Get user's own files
  async getMyFiles(): Promise<ServerResponseModel<FileDTO[]>> {
    return await apiFetch<FileDTO[]>("/files/me", { withCredentials: true });
  },

  // Upload a new file
  async uploadFile(
    formData: FormData
  ): Promise<ServerResponseModel<UploadFileResponseDTO>> {
    return await apiFetch<UploadFileResponseDTO>("/files/upload", {
      method: "POST",
      body: formData,
      withCredentials: true,
      withUpload: true,
    });
  },

  // Download a file (returns a blob and filename) - client-side version
  async downloadFileServer(
    fileId: string
  ): Promise<{ data: Blob; filename: string }> {
    // Use the existing apiFetch utility to make the request
    const fullUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/files/${fileId}/download`;

    const headers: Record<string, any> = {
      apikey: process.env.API_KEY || "",
    };

    const accessToken = await getAuthTokenServer();
    if (accessToken) headers["Authorization"] = `Bearer ${accessToken}`;
    else throw new Error("Unauthorized");

    const response = await fetch(fullUrl, { headers });

    if (!response.ok) {
      let message = "Unknown error";
      try {
        const errorData = await response.json();
        message = errorData.message || message;
      } catch (_) {}
      throw new Error(
        `Download failed with status ${response.status}: ${message}`
      );
    }

    const blob = await response.blob();

    // Extract filename from Content-Disposition header
    let filename = `file-${fileId}`; // default fallback
    const contentDisposition = response.headers.get("Content-Disposition");
    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(
        /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
      );
      if (filenameMatch && filenameMatch[1]) {
        filename = filenameMatch[1].replace(/['"]/g, "").trim();
      }
    }

    return { data: blob, filename };
  },

  // Delete a file
  async deleteFile(fileId: string): Promise<ServerResponseModel<any>> {
    return await apiFetch(`/files/${fileId}`, {
      method: "DELETE",
      withCredentials: true,
    });
  },

  // Generate share link for a file
  async getShareLink(fileId: string): Promise<ServerResponseModel<string>> {
    return await apiFetch<string>(`/files/${fileId}/share-link`, {
      withCredentials: true,
    });
  },
};
