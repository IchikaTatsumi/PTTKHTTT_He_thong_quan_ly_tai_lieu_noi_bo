"use client";

import { useEffect, useState } from "react";
import { ServerResponseModel } from "../../../lib/typedefs/server-response";
import { FileDTO, FileQueryDTO, UploadFileResponseDTO } from "../dtos/file.dto";
import { fileService } from "../services/file.service";

// Custom hooks for File APIs
export const useFiles = (params?: FileQueryDTO) => {
  const [files, setFiles] = useState<FileDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFiles = async (
    queryParams?: FileQueryDTO
  ): Promise<ServerResponseModel<FileDTO[]>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fileService.getFiles(queryParams);
      if (response.success) {
        setFiles(response.data || []);
      } else {
        setError(response.message || "Error fetching files");
      }
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      return { success: false, message: errorMessage, statusCode: 500 };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles(params);
  }, [params]);

  return { files, loading, error, fetchFiles };
};

export const useMyFiles = () => {
  const [files, setFiles] = useState<FileDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMyFiles = async (): Promise<ServerResponseModel<FileDTO[]>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fileService.getMyFiles();
      if (response.success) {
        setFiles(response.data || []);
      } else {
        setError(response.message || "Error fetching my files");
      }
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      return { success: false, message: errorMessage, statusCode: 500 };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyFiles();
  }, []);

  return { files, loading, error, fetchMyFiles };
};

export const useFileMutations = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = async (
    formData: FormData
  ): Promise<ServerResponseModel<UploadFileResponseDTO>> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fileService.uploadFile(formData);
      if (!response.success) {
        setError(response.message || "Error uploading file");
      }
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      return { success: false, message: errorMessage, statusCode: 500 };
    } finally {
      setLoading(false);
    }
  };

  const deleteFile = async (
    fileId: string
  ): Promise<ServerResponseModel<any>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fileService.deleteFile(fileId);
      if (!response.success) {
        setError(response.message || "Error deleting file");
      }
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      return { success: false, message: errorMessage, statusCode: 500 };
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, uploadFile, deleteFile };
};

export const useFileDownload = () => {
  const [data, setData] = useState<{ data: Blob; filename: string } | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const downloadFile = async (fileId: string) => {
    setLoading(true);
    setError(null);

    try {
      const downloadData = await fileService.downloadFileServer(fileId);
      setData(downloadData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, downloadFile, data };
};

export const useFileShareLink = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [shareLink, setShareLink] = useState<string | null>(null);

  const getShareLink = async (
    fileId: string
  ): Promise<ServerResponseModel<string>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fileService.getShareLink(fileId);
      if (response.success) {
        setShareLink(response.data || null);
      } else {
        setError(response.message || "Error getting share link");
        setShareLink(null);
      }
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      setShareLink(null);
      return { success: false, message: errorMessage, statusCode: 500 };
    } finally {
      setLoading(false);
    }
  };

  return { shareLink, loading, error, getShareLink };
};
