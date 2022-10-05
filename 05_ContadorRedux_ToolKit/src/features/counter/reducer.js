import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement, incrementByAmount,incrementAsync } from "./action";

const initialState = {
  value: 0,
  status: 'idle',
};
export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value += 1;
    })
    .addCase(decrement, (state) => {
      state.value -= 1;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    })
    .addCase(incrementAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(incrementAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value += action.payload;
    });
});





  
