import { apiClient } from '@/lib/apiClient';

export interface Brand {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  website?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBrandData {
  name: string;
  logo?: string;
  description?: string;
  website?: string;
}

export interface UpdateBrandData extends Partial<CreateBrandData> {}

export const brandService = {
  getAll: async (): Promise<Brand[]> => {
    return apiClient.get<Brand[]>('/brands');
  },

  getById: async (id: string): Promise<Brand> => {
    return apiClient.get<Brand>(`/brands/${id}`);
  },

  create: async (data: CreateBrandData): Promise<Brand> => {
    return apiClient.post<Brand>('/brands', data);
  },

  update: async (id: string, data: UpdateBrandData): Promise<Brand> => {
    return apiClient.put<Brand>(`/brands/${id}`, data);
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>(`/brands/${id}`);
  },

  toggleStatus: async (id: string): Promise<Brand> => {
    return apiClient.patch<Brand>(`/brands/${id}/toggle-status`);
  },
} as const;