// src/shared/config/api.ts
const isDevelopment = import.meta.env.DEV;

// Для разработки используем proxy, для продакшена - прямой URL
export const API_BASE_URL = isDevelopment ? "/api" : "https://api.yeatwork.ru";

console.log("API Base URL:", API_BASE_URL, "Mode:", import.meta.env.MODE);
