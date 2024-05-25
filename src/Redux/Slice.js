import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    receiver: "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    clearToken(state){
      state.token=null
    },
    setReceiver(state, action) {
      state.receiver = action.payload;
    },
  },
});
export const { setToken, clearToken, setReceiver } = slice.actions;
export const selectToken = (state) => state.auth.token
export default slice.reducer;
