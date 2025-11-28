import { apiClient } from '@/lib/apiClient';
import { ENDPOINTS } from '@/config/endpoints';
import type { User, UpdateUserProfile } from '@/types/user';

export const userService = {
  getUserById: async (id: string): Promise<User> => {
    return apiClient.get<User>(ENDPOINTS.USER.GET_USER_BY_ID(id));
  },

  updateProfile: async (data: UpdateUserProfile): Promise<User> => {
    return apiClient.put<User>(ENDPOINTS.USER.UPDATE_PROFILE, data);
  },

  deleteUser: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>(ENDPOINTS.USER.DELETE_USER(id));
  },

  toggleUserStatus: async (id: string): Promise<User> => {
    return apiClient.patch<User>(ENDPOINTS.USER.TOGGLE_STATUS(id));
  },

  getAllUsers: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    role?: string;
  }): Promise<{
    users: User[];
    total: number;
    page: number;
    totalPages: number;
  }> => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.search) searchParams.append('search', params.search);
    if (params?.role) searchParams.append('role', params.role);

    const query = searchParams.toString();
    const url = query ? `${ENDPOINTS.USER.LIST}?${query}` : ENDPOINTS.USER.LIST;

    return apiClient.get(url);
  },
} as const;