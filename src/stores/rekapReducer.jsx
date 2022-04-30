import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const rekapSlice = createSlice({
  name: "rekap",
  initialState: {
    rekap: [],
    isLoading: false,
    // quantity: 1,
  },
  reducers: {
    addRecap: (state, action) => {
      state.rekap = [...state.rekap, action.payload];
    },
    updateRecap: (state, action) => {
      state.rekap.map((item) =>
        item.id === action.payload.id
          ? (item.quantity += action.payload.quantity)
          : item.quantity
      );
    },
  },
  extraReducers: {},
});

// export const {
//   addCart,
//   updateCartItem,
//   updateQuantity,
//   resetQuantity,
//   updateItem,
//   emptyCart,
// } = cartSlice.actions;

export const { addRecap, updateRecap } = rekapSlice.actions;

export default rekapSlice.reducer;
