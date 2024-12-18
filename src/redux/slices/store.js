import { configureStore } from "@reduxjs/toolkit";
import { FeatureSlice } from "./FeatureSlice";

export const store = configureStore({
  reducer: {
    data: FeatureSlice.reducer,
  }
})