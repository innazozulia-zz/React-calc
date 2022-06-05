import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const conterSlice = createSlice({
  name: "counter",
  initialState,
  reducets: {
    add: (state) => {
      state.value += 1;
    },
  },
  minus: (state) => {
    state.value -= 1;
  },
  multiple: (state) => {
    state.value *= 1;
  },
  devide: (state) => {
    state.value /= 1;
  },
});

export const { add, minus, multiple, devide } = conterSlice.actions;

export default conterSlice.reducer;
