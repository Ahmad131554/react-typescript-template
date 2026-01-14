import axios, {
  type AxiosRequestConfig,
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { env } from "@/config/env";
import { toast } from "sonner";
import type { ApiError } from "@/types/api";

// Create axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: env.API_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor: Add authentication token to requests
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(env.ACCESS_TOKEN_KEY);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor: Handle errors globally and return full response
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiError>) => {
    const message = error.response?.data?.message || "An error occurred";
    toast.error(message);

    // Clear token and redirect on authentication failure
    if (error.response?.status === 401) {
      localStorage.removeItem(env.ACCESS_TOKEN_KEY);
    }

    return Promise.reject(error);
  }
);

// API Client class with typed HTTP methods
class APIClient {
  /**
   * GET request
   * @param url - API endpoint
   * @param config - Axios request configuration
   * @returns Promise with the full Axios response
   */
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosInstance.get<T>(url, config);
  }

  /**
   * POST request
   * @param url - API endpoint
   * @param data - Request payload
   * @param config - Axios request configuration
   * @returns Promise with the full Axios response
   */
  post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return axiosInstance.post<T>(url, data, config);
  }

  /**
   * PUT request
   * @param url - API endpoint
   * @param data - Request payload
   * @param config - Axios request configuration
   * @returns Promise with the full Axios response
   */
  put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return axiosInstance.put<T>(url, data, config);
  }

  /**
   * PATCH request
   * @param url - API endpoint
   * @param data - Request payload
   * @param config - Axios request configuration
   * @returns Promise with the full Axios response
   */
  patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return axiosInstance.patch<T>(url, data, config);
  }

  /**
   * DELETE request
   * @param url - API endpoint
   * @param config - Axios request configuration
   * @returns Promise with the full Axios response
   */
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosInstance.delete<T>(url, config);
  }
}

export const apiClient = new APIClient();
