import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 20000,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.amount += action.payload;
    },
    withDraw: (state, action) => {
      state.amount -= action.payload;
    },
    setBalance: (state, action) => {
      state.amount = action.payload;
    },
    transfer: (state, action) => {
      state.amount -= action.payload;
    },
  },
});

export const { deposit, withDraw, setBalance ,transfer} = accountSlice.actions;
export default accountSlice.reducer;
