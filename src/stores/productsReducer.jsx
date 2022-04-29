import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "news/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const formatRes = await res.data;
    await formatRes.forEach((product) => {
      product.quantity = 20;
    });
    // console.log(formatRes);
    return formatRes;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    decreaseQuantity: (state, action) => {
      state.data.map((product) =>
        product.id === action.payload.id
          ? product.quantity > 0
            ? (product.quantity -= action.payload.quantity)
            : product.quantity
          : product.quantity
      );
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { decreaseQuantity } = productsSlice.actions;

export default productsSlice.reducer;
