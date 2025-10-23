import { Search, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { FileDTO } from "../features/files";
import {
  CreatePermissionDTO,
  UpdatePermissionDTO,
  useFilePermissions,
  usePermissionMutations,
} from "../features/permissions";
import { useUsers } from "../features/users";
import { PermissionLevel, Role } from "../lib/constants/enums";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface PermissionsDialogProps {
  currentUserId: string;
  isOwner: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  document: FileDTO;
  currentUserRole?: Role;
}

interface PendingChange {
  userId: string;
  permissionId?: string;
  newRole: string;
  action: "create" | "update" | "delete";
}

export function PermissionsDialog({
  currentUserId,
  isOwner,
  open,
  onOpenChange,
  document,
  currentUserRole,
}: PermissionsDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [pendingChanges, setPendingChanges] = useState<PendingChange[]>([]);

  // Hooks for permissions and users
  const {
    permissions,
    loading: permissionsLoading,
    error: permissionsError,
    fetchFilePermissions,
  } = useFilePermissions(document.id);
  const {
    loading: mutationLoading,
    error: mutationError,
    assignPermission,
    updatePermission,
    removePermission,
  } = usePermissionMutations();
  const {
    users,
    loading: usersLoading,
    error: usersError,
    fetchAllUsers,
  } = useUsers();

  // Fetch data when dialog opens
  useEffect(() => {
    if (open) {
      fetchFilePermissions(document.id);
      fetchAllUsers();
      // Reset pending changes when dialog opens
      setPendingChanges([]);
    }
  }, [open, document.id]); // Removed fetchFilePermissions and fetchAllUsers from dependencies to prevent infinite loop

  // Helper functions
  const getInitials = (username: string) =>
    username
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  const getRoleBadge = (permissionLevel?: PermissionLevel | null) => {
    if (!permissionLevel) return <Badge>Không xác định</Badge>;
    switch (permissionLevel) {
      case PermissionLevel.MANAGE:
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Quản lý
          </Badge>
        );
      case PermissionLevel.VIEW:
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Xem
          </Badge>
        );
      default:
        return <Badge>Không xác định</Badge>;
    }
  };

  const getSelectTriggerValue = (permissionLevel?: PermissionLevel | null) => {
    if (!permissionLevel) return "Không có quyền";
    switch (permissionLevel) {
      case PermissionLevel.MANAGE:
        return "Quản lý";
      case PermissionLevel.VIEW:
        return "Xem";
      default:
        return "Không có quyền";
    }
  };

  // Permission handling
  const isCurrentUserOwner = isOwner;
  const isCurrentUserAdmin = !isOwner && currentUserRole === Role.Admin;
  const isCurrentUserManage = !isOwner && !isCurrentUserAdmin; // Users with manage permissions but not owner/admin

  // Get current permission level for a user, considering pending changes
  const getCurrentPermissionLevel = (userId: string) => {
    const existingPermission = permissions.find((p) => p.user.id === userId);

    // Check if there's a pending change for this user
    const pendingChange = pendingChanges.find(
      (change) => change.userId === userId
    );

    if (pendingChange) {
      if (pendingChange.action === "delete") {
        return null; // User will be removed
      }
      if (
        pendingChange.action === "create" ||
        pendingChange.action === "update"
      ) {
        return parseInt(pendingChange.newRole) as PermissionLevel;
      }
    }

    return existingPermission?.permissionLevel;
  };

  // Get current permission ID for a user, considering pending changes
  const getCurrentPermissionId = (userId: string) => {
    const existingPermission = permissions.find((p) => p.user.id === userId);

    // Check if there's a pending change for this user
    const pendingChange = pendingChanges.find(
      (change) => change.userId === userId
    );

    if (pendingChange) {
      if (pendingChange.action === "delete") {
        return pendingChange.permissionId; // Return the ID of the permission that will be deleted
      }
      return pendingChange.permissionId || existingPermission?.id;
    }

    return existingPermission?.id;
  };

  const handleRoleChange = useCallback(
    (userId: string, newRole: string, permissionId?: string) => {
      // Get the target user to check their role
      const targetUser = users.find((user) => user.id === userId);
      if (!targetUser) {
        console.warn("Target user not found");
        return;
      }

      const currentPermission = permissions.find((p) => p.user.id === userId);
      const currentRole = currentPermission?.permissionLevel;

      // Check if target user is admin
      const isTargetAdmin = targetUser.role === Role.Admin;

      // Admin and owner cannot change each other's permissions
      if (
        (isCurrentUserAdmin && isOwner) ||
        (isCurrentUserOwner && isTargetAdmin)
      ) {
        console.warn(
          "Permission denied: Admin and Owner cannot change each other's permissions."
        );
        return;
      }

      // Non-owner/non-admin users with manage permission can only assign/revoke VIEW permissions
      if (isCurrentUserManage) {
        if (parseInt(newRole) === PermissionLevel.MANAGE) {
          console.warn(
            "Permission denied: Non-owner/non-admin users with manage permission cannot assign MANAGE permissions."
          );
          return;
        }

        // Check if the user being changed is admin
        if (isTargetAdmin) {
          console.warn(
            "Permission denied: Non-owner/non-admin users cannot change permissions of Admin."
          );
          return;
        }

        // Current user is manage, so they can only manage VIEW permissions
        // Cannot change to MANAGE or remove someone with MANAGE permission
        if (
          currentRole === PermissionLevel.MANAGE ||
          parseInt(newRole) === PermissionLevel.MANAGE
        ) {
          console.warn(
            "Permission denied: Non-owner/non-admin users cannot change MANAGE permissions."
          );
          return;
        }
      }

      // Owner can change manage permission of non-admin users
      if (isCurrentUserOwner && isTargetAdmin) {
        console.warn(
          "Permission denied: Owner cannot change permissions of Admin."
        );
        return;
      }

      // Determine the action based on the new role and existing permission
      let action: "create" | "update" | "delete";
      if (newRole === "none") {
        if (permissionId) {
          action = "delete";
        } else {
          // This case shouldn't happen but just in case
          return;
        }
      } else if (currentPermission) {
        action = "update";
      } else {
        action = "create";
      }

      // Update pending changes
      setPendingChanges((prev) => {
        // Remove any existing change for this user
        const filtered = prev.filter((change) => change.userId !== userId);

        // Add new change (only if it's different from current state)
        if (
          action === "delete" ||
          parseInt(newRole) !== (currentPermission?.permissionLevel || -1)
        ) {
          return [
            ...filtered,
            {
              userId,
              permissionId:
                action === "delete" ? permissionId : permissionId || undefined,
              newRole,
              action,
            },
          ];
        }

        return filtered;
      });
    },
    [
      permissions,
      users,
      isCurrentUserOwner,
      isCurrentUserAdmin,
      isCurrentUserManage,
    ]
  );

  const handleRemoveUser = useCallback(
    (permissionId: string, userId: string) => {
      // Get the target user to check their role
      const targetUser = users.find((user) => user.id === userId);
      if (!targetUser) {
        console.warn("Target user not found");
        return;
      }

      const targetPermission = permissions.find((p) => p.id === permissionId);
      const targetRole = targetUser.role;

      // Admin and owner cannot change each other's permissions
      const isTargetAdmin = targetRole === Role.Admin;

      if (
        (isCurrentUserAdmin && isOwner) ||
        (isCurrentUserOwner && isTargetAdmin)
      ) {
        console.warn(
          "Permission denied: Admin and Owner cannot change each other's permissions."
        );
        return;
      }

      // Non-owner/non-admin users with manage permission can only remove VIEW permissions
      if (isCurrentUserManage) {
        // Check if the user being changed is admin
        if (isTargetAdmin) {
          console.warn(
            "Permission denied: Non-owner/non-admin users cannot change permissions of Admin."
          );
          return;
        }

        // Check if the permission level is MANAGE
        if (targetPermission?.permissionLevel === PermissionLevel.MANAGE) {
          console.warn(
            "Permission denied: Non-owner/non-admin users cannot change MANAGE permissions."
          );
          return;
        }
      }

      // Owner can remove permissions from non-admin users
      if (isCurrentUserOwner && isTargetAdmin) {
        console.warn(
          "Permission denied: Owner cannot change permissions of Admin."
        );
        return;
      }

      // Update pending changes
      setPendingChanges((prev) => {
        // Remove any existing change for this user
        const filtered = prev.filter((change) => change.userId !== userId);

        // Add delete action
        return [
          ...filtered,
          {
            userId,
            permissionId,
            newRole: "none",
            action: "delete",
          },
        ];
      });
    },
    [
      permissions,
      users,
      isCurrentUserOwner,
      isCurrentUserAdmin,
      isCurrentUserManage,
    ]
  );

  const handleApplyChanges = async () => {
    // Process all pending changes
    for (const change of pendingChanges) {
      try {
        if (change.action === "create") {
          const permissionData: CreatePermissionDTO = {
            fileId: document.id,
            userId: change.userId,
            permissionLevel: parseInt(change.newRole) as PermissionLevel,
          };
          await assignPermission(permissionData);
        } else if (change.action === "update") {
          const updateData: UpdatePermissionDTO = {
            fileId: document.id,
            permissionLevel: parseInt(change.newRole) as PermissionLevel,
          };
          await updatePermission(change.permissionId!, updateData);
        } else if (change.action === "delete" && change.permissionId) {
          await removePermission(change.permissionId, document.id);
        }
      } catch (error) {
        console.error("Error processing change:", error);
      }
    }

    // Refetch permissions after all changes are applied
    await fetchFilePermissions(document.id);
    // Reset pending changes
    setPendingChanges([]);
  };

  // Filter users based on search query and exclude current user
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) &&
      user.id !== currentUserId
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Quản lý quyền truy cập</DialogTitle>
          <DialogDescription>
            Quản lý quyền truy cập cho tài liệu "{document.name}"
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Search Bar */}
          <div className="space-y-2">
            <Label>Tìm kiếm người dùng</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo tên hoặc email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* Users List */}
          <div className="space-y-2">
            <Label>Danh sách người dùng ({filteredUsers.length})</Label>
            <div className="max-h-[400px] overflow-y-auto rounded-lg border">
              {filteredUsers.map((user) => {
                // Use the updated functions that consider pending changes
                const currentPermissionLevel = getCurrentPermissionLevel(
                  user.id
                );
                const currentPermissionId = getCurrentPermissionId(user.id);

                const isManage =
                  currentPermissionLevel === PermissionLevel.MANAGE;
                const isUserAdmin = user.role === Role.Admin;

                // Determine if current user can change this user's permissions
                let canChangePermission = false;

                // Admin and owner cannot change each other's permissions
                if (
                  (isCurrentUserAdmin && isOwner) ||
                  (isCurrentUserOwner && isUserAdmin)
                ) {
                  canChangePermission = false;
                }
                // Non-owner/non-admin users with manage permission can only manage VIEW permissions
                else if (isCurrentUserManage) {
                  // Cannot change admin permissions
                  if (isUserAdmin) {
                    canChangePermission = false;
                  }
                  // Can only manage VIEW permissions
                  else if (isManage) {
                    canChangePermission = false;
                  } else {
                    canChangePermission = true;
                  }
                }
                // Owner can change permissions of non-admin users
                else if (isCurrentUserOwner) {
                  if (isUserAdmin) {
                    canChangePermission = false;
                  } else {
                    canChangePermission = true;
                  }
                }
                // Admin can change permissions (except for owner)
                else if (isCurrentUserAdmin) {
                  if (isOwner) {
                    canChangePermission = false;
                  } else {
                    canChangePermission = true;
                  }
                }
                // Regular users without manage permissions cannot change permissions
                else {
                  canChangePermission = false;
                }

                return (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-3 hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {getInitials(user.username)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span>{user.username}</span>
                          {user.role === Role.Admin
                            ? getRoleBadge(PermissionLevel.MANAGE)
                            : getRoleBadge(currentPermissionLevel)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {user.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select
                        value={currentPermissionLevel?.toString() || "none"}
                        onValueChange={(value) =>
                          handleRoleChange(user.id, value, currentPermissionId)
                        }
                        disabled={!canChangePermission}
                      >
                        <SelectTrigger className="w-[120px]">
                          <SelectValue
                            placeholder={getSelectTriggerValue(
                              currentPermissionLevel
                            )}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Không có quyền</SelectItem>
                          <SelectItem value={String(PermissionLevel.VIEW)}>
                            Xem
                          </SelectItem>
                          {(isCurrentUserAdmin || isCurrentUserOwner) && (
                            <SelectItem value={String(PermissionLevel.MANAGE)}>
                              Quản lý
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                      {currentPermissionLevel !== undefined &&
                        canChangePermission && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              currentPermissionId &&
                              handleRemoveUser(currentPermissionId, user.id)
                            }
                            disabled={!canChangePermission}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Hủy
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setPendingChanges([])}
              disabled={pendingChanges.length === 0}
            >
              Hủy thay đổi
            </Button>
            <Button
              onClick={handleApplyChanges}
              disabled={
                mutationLoading ||
                permissionsLoading ||
                usersLoading ||
                pendingChanges.length === 0
              }
            >
              {mutationLoading
                ? "Đang áp dụng..."
                : `Áp dụng (${pendingChanges.length})`}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
