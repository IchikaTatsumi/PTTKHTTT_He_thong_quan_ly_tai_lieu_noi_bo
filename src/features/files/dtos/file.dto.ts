// File DTOs
import { PermissionLevel } from "@/src/lib/constants/enums";
import { UserDTO } from "../../users/dtos/user.dto";

export interface FileDTO {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  owner: UserDTO;
  permissions: {
    id: string;
    permissionLevel: PermissionLevel;
  }[];
  createdAt: string; // ISO date string
}

export interface FileQueryDTO {
  name?: string;
  mimeType?: string;
  ownerId?: string;
  createdAt?: string;
}

export interface UploadFileResponseDTO {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  owner: UserDTO;
  createdAt: string; // ISO date string
}
