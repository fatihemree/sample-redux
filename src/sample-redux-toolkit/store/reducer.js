import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   counter: 0,
// }

 const counterSlice = createSlice({
  name: 'counter',
  initialState:0,
  reducers: {
    increment: (state) => {
      state += 1
    },
    decrement: (state) => {
      state -= 1
    },
    incrementByAmount: (state, action) => {
      state += action.payload
    },
  },
})

export const counterAction=counterSlice.actions;
export const counterReducer= counterSlice.reducer