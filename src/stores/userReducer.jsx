import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authUser = createAsyncThunk(
  "user/authUser",
  async (credentials) => {
    return fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "jimmie@gmail.com",
    username: null,
    password: null, //klein*#%*
    isAuthenticated: false,
    token: localStorage.getItem("token"),
    error: false,
    loading: false,
    adminEmail: "admin@bukapedia.com",
    adminPassword: "admin123",
    adminStatus: false,
    role: null,
  },
  reducers: {
    saveToken: (state) => {
      sessionStorage.setItem("token", state.token);
    },
    authAdmin: (state) => {
      sessionStorage.removeItem("token");
      if (state.password === state.adminPassword) {
        sessionStorage.setItem("admin", state.adminEmail);
        state.isAuthenticated = true;
        state.role = "admin";
      } else {
        state.error = true;
      }
    },
    checkEmail: (state, action) => {
      if (state.email === action.payload) {
        state.username = "jimmie_k";
      } else if (state.adminEmail === action.payload) {
        state.adminStatus = true;
      }
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    userLogout: (state) => {
      state.token = null;
      state.adminStatus = false;
      state.isAuthenticated = false;
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("admin");
      state.role = null;
    },
    setError: (state) => {
      state.error = true;
    },
    resetError: (state) => {
      state.error = false;
    },
  },
  extraReducers: {
    [authUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.loading = false;
      state.role = "user";
    },
    [authUser.pending]: (state) => {
      state.loading = true;
    },
    [authUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  saveToken,
  setPassword,
  checkEmail,
  userLogout,
  setError,
  resetError,
  authAdmin,
} = userSlice.actions;

export default userSlice.reducer;
