import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginUser as apiLoginUser, registerUser as apiRegisterUser } from "../api/api";

export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiLoginUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
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
      return rejectWithValue(error.response.data.message);
    }
  }
);