// src/shared/config/api.ts
const isDevelopment = import.meta.env.DEV;

// Попробуйте один из этих прокси (работают по очереди):
const CORS_PROXY = "https://api.allorigins.win/raw?url=";
// ИЛИ
// const CORS_PROXY = "https://corsproxy.org/?";

export const API_BASE_URL = isDevelopment
  ? "/api"
  : `${CORS_PROXY}https://api.yeatwork.ru`;

console.log("API Base URL:", API_BASE_URL, "Mode:", import.meta.env.MODE);
