import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/auth/auth.service";
import { env } from "@/config/env";
import { useLocalStorage } from "./useLocalStorage";
import type { AuthUser, LoginCredentials, SignupCredentials } from "@/types/user";
import { toast } from "sonner";

export function useAuth() {
  const queryClient = useQueryClient();
  const [token, setToken] = useLocalStorage<string | null>(env.ACCESS_TOKEN_KEY, null);

  // Get current user
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["auth", "user"],
    queryFn: () => {
      // This would typically fetch user data using the stored token
      // For now, return stored user data or null
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    },
    enabled: !!token,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      authService.login(credentials),
    onSuccess: (data: AuthUser) => {
      setToken(data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.refreshToken) {
        localStorage.setItem(env.REFRESH_TOKEN_KEY, data.refreshToken);
      }
      queryClient.setQueryData(["auth", "user"], data.user);
      toast.success("Login successful!");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Login failed");
    },
  });

  // Signup mutation
  const signupMutation = useMutation({
    mutationFn: (credentials: SignupCredentials) =>
      authService.signup(credentials),
    onSuccess: (data: AuthUser) => {
      setToken(data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.refreshToken) {
        localStorage.setItem(env.REFRESH_TOKEN_KEY, data.refreshToken);
      }
      queryClient.setQueryData(["auth", "user"], data.user);
      toast.success("Account created successfully!");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Signup failed");
    },
  });

  // Logout function
  const logout = () => {
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem(env.REFRESH_TOKEN_KEY);
    queryClient.removeQueries({ queryKey: ["auth"] });
    queryClient.clear();
    toast.success("Logged out successfully");
  };

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!token && !!user,
    login: loginMutation.mutate,
    signup: signupMutation.mutate,
    logout,
    isLoginLoading: loginMutation.isPending,
    isSignupLoading: signupMutation.isPending,
  };
}