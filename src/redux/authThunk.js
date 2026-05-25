import { createAsyncThunk } from "@reduxjs/toolkit";

import { 
  loginUser as apiLoginUser, 
  registerUser as apiRegisterUser,
  changePassword as apiChangePassword,
  forgotPassword as apiForgotPassword,
  resetPassword as apiResetPassword,
  getUserDashboard as apiGetUserDashboard,
  getAdminPanel as apiGetAdminPanel
} from "../api/api";

export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiLoginUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.response?.data?.msg || "Login failed");
    }
  }
);

export const registerUserThunk = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiRegisterUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.response?.data?.msg || "Registration failed");
    }
  }
);

export const changePasswordThunk = createAsyncThunk(
  "auth/changePassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiChangePassword(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Change password failed");
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
  "auth/forgotPassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiForgotPassword(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Forgot password failed");
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "auth/resetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiResetPassword(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Reset password failed");
    }
  }
);

export const getUserDashboardThunk = createAsyncThunk(
  "auth/getUserDashboard",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiGetUserDashboard();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Failed to fetch user dashboard");
    }
  }
);

export const getAdminPanelThunk = createAsyncThunk(
  "auth/getAdminPanel",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiGetAdminPanel();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Failed to fetch admin panel");
    }
  }
);