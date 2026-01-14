// Standard API response wrapper
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  status?: number | string;
}

// Error response from API
export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}

// Legacy alias for backward compatibility
export type ApiSuccess<T = unknown> = ApiResponse<T>;
