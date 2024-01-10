import { configureStore } from "@reduxjs/toolkit";
import scalesReducer from "./scales/scalesSlice";
import productsReducer from "./products/productSlice";
import basketReducer from "./basket/basketSlice";

export const store = configureStore({
  reducer: {
    scales: scalesReducer,
    products: productsReducer,
    basket: basketReducer,
  },
});
