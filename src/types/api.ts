export interface ApiSuccess<T = unknown> {
  status?: number | string;
  data: T;
  message?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}

export interface UploadResponse {
  image: string;
}

export type ApiResponse<T = unknown> = ApiSuccess<T> | UploadResponse | T[] | T;
