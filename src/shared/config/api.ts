// src/shared/config/api.ts
const isDevelopment = import.meta.env.DEV;

// Оптимальное решение для CORS
export const API_BASE_URL = isDevelopment
  ? "/api"
  : "https://corsproxy.io/?https://api.yeatwork.ru";

console.log("API Base URL:", API_BASE_URL, "Mode:", import.meta.env.MODE);
