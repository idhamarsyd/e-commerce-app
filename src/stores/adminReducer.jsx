import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    email: "jimmie@gmail.com",
    password: null, //klein*#%*
    adminStatus: false,
    error: false,
    loading: false,
  },
  reducers: {},
});

// export const {
//   saveToken,
//   setPassword,
//   checkEmail,
//   userLogout,
//   setError,
//   resetError,
// } = userSlice.actions;

export default adminSlice.reducer;
