// src/shared/config/api.ts
const isDevelopment = import.meta.env.DEV;
export const API_BASE_URL = isDevelopment ? "/api" : "/api";
