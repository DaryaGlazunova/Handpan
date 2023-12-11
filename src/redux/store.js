import { configureStore } from "@reduxjs/toolkit";
import scalesReducer from "./scales/scalesSlice";

export const store = configureStore({
  reducer: {
    scales: scalesReducer,
  },
});
