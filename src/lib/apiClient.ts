
import axios, {
  type AxiosRequestConfig,
  type AxiosError,
  type AxiosResponse,
} from "axios";
import { env } from "@/config/env";
import { toast } from "sonner";

const axiosInstance = axios.create({
  baseURL: env.API_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(env.ACCESS_TOKEN_KEY);

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Simple Version)
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  (error: AxiosError<any>) => {
    const message = error.response?.data?.message || "API Error";
    toast.error(message);

    if (error.response?.status === 401) {
      localStorage.removeItem(env.ACCESS_TOKEN_KEY);
    }

    return Promise.reject(error);
  }
);

// Minimal Wrapper Class
class APIClient {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.get(url, config);
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return axiosInstance.post(url, data, config);
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return axiosInstance.put(url, data, config);
  }

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.delete(url, config);
  }

  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return axiosInstance.patch(url, data, config);
  }
}

export const apiClient = new APIClient();
