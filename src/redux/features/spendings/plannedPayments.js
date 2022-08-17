import { createSlice, nanoid, AsyncThunk } from "@reduxjs/toolkit";
import { categories } from "../../../consts/categories";
import { periodList } from "../../../consts/periodSpendingLabels";
let length = 0;
const initialState = categories.map((item) => {
  length += 1;
  return {
    id: length,
    title: item,
    elements: [],
  };
});

export const plannedSpendingsSlice = createSlice({
  name: "Spendings",
  initialState: initialState,
  reducers: {
    addPlanned: (state, action) => {
      console.warn(action.payload);
    },
    delete: (state, action) => {
      state.delete(action.payload);
    },
  },
});

export default plannedSpendingsSlice.reducer;

export const { addPlanned } = plannedSpendingsSlice.actions;
