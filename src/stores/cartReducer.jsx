import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    quantity: 1,
  },
  reducers: {
    addCart: (state, action) => {
      state.cart = [
        ...state.cart,
        { ...action.payload, quantity: state.quantity },
      ];
    },
    updateCartItem: (state, action) => {
      state.cart.map((item) =>
        item.id === action.payload.id
          ? action.payload.quantity > 0
            ? (item.quantity += state.quantity)
            : item.quantity
          : item.quantity
      );
    },
    updateItem: (state, action) => {
      state.cart.map((item) =>
        item.id === action.payload.id
          ? (item.quantity = action.payload.quantity)
          : item
      );
    },
    updateQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    resetQuantity: (state) => {
      state.quantity = 1;
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: {},
});

export const {
  addCart,
  updateCartItem,
  updateQuantity,
  resetQuantity,
  updateItem,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
