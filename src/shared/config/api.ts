// src/shared/config/api.ts
const isDevelopment = import.meta.env.DEV;

// Используем рабочий прокси
export const API_BASE_URL = isDevelopment
  ? "/api"
  : "https://api.allorigins.win/raw?url=https://api.yeatwork.ru";

console.log("API Base URL:", API_BASE_URL, "Mode:", import.meta.env.MODE);
