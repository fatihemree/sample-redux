import { createSlice } from '@reduxjs/toolkit'


 const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log(state);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
})

export const counterAction=counterSlice.actions;
export const counterReducer= counterSlice.reducer;


const userSlice = createSlice({
  name: 'user',
  initialState:{
    name:'fatih',
    age:24,
  },
  reducers: {
    changeName: (state,action) => {
      state.name=action.payload;
    },
  },
})

export const userAction=userSlice.actions;
export const userReducer= userSlice.reducer