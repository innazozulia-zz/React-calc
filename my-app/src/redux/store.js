import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./countSlicer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
