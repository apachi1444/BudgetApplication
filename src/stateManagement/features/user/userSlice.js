import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { email: "", password: "" }, count: 55 };
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increment, login, incrementByAmount } = userSlice.actions;
export default userSlice.reducer;
