// src/shared/config/api.ts
const isDevelopment = import.meta.env.DEV;

// Для Vercel используем относительный путь
export const API_BASE_URL = isDevelopment ? "/api" : "/api"; // ← одинаково для dev и prod!

console.log("API Base URL:", API_BASE_URL, "Mode:", import.meta.env.MODE);
