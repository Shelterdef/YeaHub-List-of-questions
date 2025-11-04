const isDevelopment = import.meta.env.DEV;
export const API_BASE_URL = isDevelopment ? "/api" : "https://api.yeatwork.ru";
console.log("API Base URL:", API_BASE_URL, "Mode:", import.meta.env.MODE);
