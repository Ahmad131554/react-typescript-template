import { apiClient } from '@/lib/apiClient';
import { ENDPOINTS } from '@/config/endpoints';
import type { User, UpdateUserProfile } from '@/types/user';

export const userService = {
  getUserById: async (id: string): Promise<User> => {
    const response = await apiClient.get<User>(ENDPOINTS.USER.GET_USER_BY_ID(id));
    return response.data;
  },

  updateProfile: async (data: UpdateUserProfile): Promise<User> => {
    const response = await apiClient.put<User>(ENDPOINTS.USER.UPDATE_PROFILE, data);
    return response.data;
  },

  deleteUser: async (id: string): Promise<{ message: string }> => {
    const response = await apiClient.delete<{ message: string }>(ENDPOINTS.USER.DELETE_USER(id));
    return response.data;
  },

  toggleUserStatus: async (id: string): Promise<User> => {
    const response = await apiClient.patch<User>(ENDPOINTS.USER.TOGGLE_STATUS(id));
    return response.data;
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

    const response = await apiClient.get<{
      users: User[];
      total: number;
      page: number;
      totalPages: number;
    }>(url);
    return response.data;
  },
} as const;