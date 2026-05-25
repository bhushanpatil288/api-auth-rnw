import { create } from "axios";

import envConfig from "../config/env";

const api = create({
  baseURL: envConfig.baseURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token; // Adjusted to match docs: Authorization: YOUR_TOKEN
  }
  return config;
});

export const registerUser = (formData) => api.post("/auth/register", formData);
export const loginUser = (formData) => api.post("/auth/login", formData);
export const changePassword = (data) => api.put("/auth/change-password", data);
export const forgotPassword = (data) => api.post("/auth/forgot-password", data);
export const resetPassword = (data) => api.post("/auth/reset-password", data);
export const getUserDashboard = () => api.get("/user");
export const getAdminPanel = () => api.get("/admin");