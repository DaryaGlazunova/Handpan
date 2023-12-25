import { createSlice } from "@reduxjs/toolkit";
import fetchProducts from "./asyncActions";

export const Status = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const initialState = {
  items: [],
  status: Status.LOADING,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = ProductsSlice.actions;

export default ProductsSlice.reducer;
