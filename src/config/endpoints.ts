export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/user/sign-up",
    GOOGLE_LOGIN: "/auth/google-login",
    FORGOT_PASSWORD: "/auth/forgot-password",
    VERIFY_OTP: "/auth/verify-otp",
    RESET_PASSWORD: "/auth/reset-password",
    CHANGE_PASSWORD: "/auth/change-password",
  },

  USER: {
    UPDATE_PROFILE: "/user/update-profile",
    DELETE_USER: (id: string) => `/user/${id}`,
    GET_USER_BY_ID: (id: string) => `/user/${id}`,
    TOGGLE_STATUS: (id: string) => `/user/toggle/status/${id}`,
    LIST: "/user/",
  },

  UPLOADS: {
    IMAGE_UPLOAD: "/uploads/image",
    DOCUMENT_UPLOAD: "/uploads/document/file",
    DELETE_IMAGE: "/uploads/delete/image",
    DELETE_FILE: "/uploads/delete",
  },

  STORES: {
    CREATE: "/store/create",
    LIST: "/store/",
    GET_BY_ID: (id: string) => `/store/${id}`,
    UPDATE: (id: string) => `/store/${id}`,
    DELETE: (id: string) => `/store/${id}`,
  },

  CATEGORIES: {
    CREATE: "/category/",
    LIST: "/category/",
    GET_BY_ID: (id: string) => `/category/${id}`,
    UPDATE: (id: string) => `/category/${id}`,
    DELETE: (id: string) => `/category/${id}`,
  },
};
