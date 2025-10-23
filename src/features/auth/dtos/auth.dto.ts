// Auth DTOs
import { UserDTO } from "../../users/dtos/user.dto";

export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO {
  username: string;
  password: string;
}

export interface LoginResponseDTO {
  user: UserDTO;
  token: string;
}

export interface RegisterResponseDTO {
  id: string;
  username: string;
  role: "user" | "admin";
  createdAt: string;
}
