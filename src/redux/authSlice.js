import { createSlice } from "@reduxjs/toolkit";

import { loginUserThunk, registerUserThunk } from "./authThunk";

const initialState = {
  isLoading: false,
  userData: null,
  error: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = ""
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.error = ""
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = ""
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.error = ""
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
  }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;