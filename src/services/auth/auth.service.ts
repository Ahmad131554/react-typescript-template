import { apiClient } from '@/lib/apiClient';
import { ENDPOINTS } from '@/config/endpoints';
import type { 
  AuthUser, 
  LoginCredentials, 
  SignupCredentials 
} from '@/types/user';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthUser> => {
    return apiClient.post<AuthUser>(ENDPOINTS.AUTH.LOGIN, credentials);
  },

  signup: async (credentials: SignupCredentials): Promise<AuthUser> => {
    return apiClient.post<AuthUser>(ENDPOINTS.AUTH.SIGNUP, credentials);
  },

  googleLogin: async (token: string): Promise<AuthUser> => {
    return apiClient.post<AuthUser>(ENDPOINTS.AUTH.GOOGLE_LOGIN, { token });
  },

  forgotPassword: async (email: string): Promise<{ message: string }> => {
    return apiClient.post<{ message: string }>(ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
  },

  verifyOtp: async (email: string, otp: string): Promise<{ message: string }> => {
    return apiClient.post<{ message: string }>(ENDPOINTS.AUTH.VERIFY_OTP, { email, otp });
  },

  resetPassword: async (email: string, otp: string, newPassword: string): Promise<{ message: string }> => {
    return apiClient.post<{ message: string }>(ENDPOINTS.AUTH.RESET_PASSWORD, {
      email,
      otp,
      newPassword,
    });
  },

  changePassword: async (currentPassword: string, newPassword: string): Promise<{ message: string }> => {
    return apiClient.post<{ message: string }>(ENDPOINTS.AUTH.CHANGE_PASSWORD, {
      currentPassword,
      newPassword,
    });
  },
} as const;