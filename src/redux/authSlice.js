import { createSlice } from "@reduxjs/toolkit";

import { loginUserThunk, registerUserThunk, changePasswordThunk, forgotPasswordThunk, resetPasswordThunk } from "./authThunk";

const getUserFromLocalStorage = () => {
  try {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    return null;
  }
};

const initialState = {
  isLoading: false,
  userData: getUserFromLocalStorage(),
  error: "",
  successMsg: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
    },
    clearError: (state) => {
      state.error = "";
    },
    clearSuccessMsg: (state) => {
      state.successMsg = "";
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = "";
        state.successMsg = "";
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.error = "";
        if (action.payload?.token) {
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("userData", JSON.stringify(action.payload));
        }
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      // Register (API docs don't say if register returns a token, assuming we just log them in or they need to login.
      // If it returns a token, we handle it similarly to login.)
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = "";
        state.successMsg = "";
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        // If register auto logs in
        if (action.payload?.token) {
           state.userData = action.payload;
           localStorage.setItem("token", action.payload.token);
           localStorage.setItem("userData", JSON.stringify(action.payload));
        }
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      // Change Password
      .addCase(changePasswordThunk.pending, (state) => {
        state.isLoading = true;
        state.error = "";
        state.successMsg = "";
      })
      .addCase(changePasswordThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMsg = action.payload?.msg || "Password updated successfully";
      })
      .addCase(changePasswordThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to update password";
      })
      // Forgot Password
      .addCase(forgotPasswordThunk.pending, (state) => {
        state.isLoading = true;
        state.error = "";
        state.successMsg = "";
      })
      .addCase(forgotPasswordThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMsg = action.payload?.msg || "OTP sent";
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to generate OTP";
      })
      // Reset Password
      .addCase(resetPasswordThunk.pending, (state) => {
        state.isLoading = true;
        state.error = "";
        state.successMsg = "";
      })
      .addCase(resetPasswordThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMsg = action.payload?.msg || "Password reset successful";
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to reset password";
      });
  }
})

export const { logout, clearError, clearSuccessMsg } = authSlice.actions;
export default authSlice.reducer;