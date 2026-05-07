import { create } from "axios";

import envConfig from "../config/env";

const api = create({
  baseURL: envConfig.baseURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = (formData) => api.post("/auth/register", formData);
export const loginUser = (formData) => api.post("/auth/login", formData);