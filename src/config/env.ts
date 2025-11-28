export const env = {
  API_URL: import.meta.env.VITE_API_URL,
  FILE_URL: import.meta.env.VITE_FILE_URL,
  NODE_ENV: import.meta.env.VITE_NODE_ENV,
  ACCESS_TOKEN_KEY: import.meta.env.VITE_ACCESS_TOKEN_KEY || "access_token",
  REFRESH_TOKEN_KEY: import.meta.env.VITE_REFRESH_TOKEN_KEY || "refresh_token",
  ENABLE_LOGGING: import.meta.env.VITE_ENABLE_LOGGING === "true",
} as const;
