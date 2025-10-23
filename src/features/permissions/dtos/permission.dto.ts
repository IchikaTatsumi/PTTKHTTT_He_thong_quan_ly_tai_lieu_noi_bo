// Permission DTOs
import { PermissionLevel } from "@/src/lib/constants/enums";
import { FileDTO } from "../../files/dtos/file.dto";
import { UserDTO } from "../../users/dtos/user.dto";

export interface PermissionDTO {
  id: string;
  user: UserDTO;
  file: FileDTO;
  permissionLevel: PermissionLevel;
  createdAt: string; // ISO date string
}

export interface SimplePermissionDTO {
  id: string;
  permissionLevel: PermissionLevel;
}

export interface CreatePermissionDTO {
  fileId: string;
  userId: string;
  permissionLevel: PermissionLevel;
}

export interface UpdatePermissionDTO {
  fileId: string;
  permissionLevel: PermissionLevel;
}
