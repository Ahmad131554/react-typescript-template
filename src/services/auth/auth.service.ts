import { apiClient } from '@/lib/apiClient';
import { ENDPOINTS } from '@/config/endpoints';
import type { 
  AuthUser, 
  LoginCredentials, 
  SignupCredentials 
} from '@/types/user';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthUser> => {
    const response = await apiClient.post<AuthUser>(ENDPOINTS.AUTH.LOGIN, credentials);
    return response.data;
  },

  signup: async (credentials: SignupCredentials): Promise<AuthUser> => {
    const response = await apiClient.post<AuthUser>(ENDPOINTS.AUTH.SIGNUP, credentials);
    return response.data;
  },

  googleLogin: async (token: string): Promise<AuthUser> => {
    const response = await apiClient.post<AuthUser>(ENDPOINTS.AUTH.GOOGLE_LOGIN, { token });
    return response.data;
  },

  forgotPassword: async (email: string): Promise<{ message: string }> => {
    const response = await apiClient.post<{ message: string }>(ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
    return response.data;
  },

  verifyOtp: async (email: string, otp: string): Promise<{ message: string }> => {
    const response = await apiClient.post<{ message: string }>(ENDPOINTS.AUTH.VERIFY_OTP, { email, otp });
    return response.data;
  },

  resetPassword: async (email: string, otp: string, newPassword: string): Promise<{ message: string }> => {
    const response = await apiClient.post<{ message: string }>(ENDPOINTS.AUTH.RESET_PASSWORD, {
      email,
      otp,
      newPassword,
    });
    return response.data;
  },

  changePassword: async (currentPassword: string, newPassword: string): Promise<{ message: string }> => {
    const response = await apiClient.post<{ message: string }>(ENDPOINTS.AUTH.CHANGE_PASSWORD, {
      currentPassword,
      newPassword,
    });
    return response.data;
  },
} as const;