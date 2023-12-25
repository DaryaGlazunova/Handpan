import { configureStore } from "@reduxjs/toolkit";
import scalesReducer from "./scales/scalesSlice";
import productsReducer from "./products/productSlice";

export const store = configureStore({
  reducer: {
    scales: scalesReducer,
    products: productsReducer,
  },
});
