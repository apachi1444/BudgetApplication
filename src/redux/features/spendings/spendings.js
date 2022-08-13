import { createSlice, nanoid, AsyncThunk } from "@reduxjs/toolkit";
const initialState = [
  {
    title: "PC GAMER 2022",
    price: "5000DH",
    date: new Date(),
    type: "want",
    key: "1",
  },
];
export const spendingsSlice = createSlice({
  name: "Spendings",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const stateToAdd = {
        key: nanoid(),
        ...action.payload,
      };
      state.push(stateToAdd);
    },
    deleteSpendingFromList: (state, action) => {
      state.delete(action.payload);
    },
  },
});

export default spendingsSlice.reducer;

export const { add } = spendingsSlice.actions;
