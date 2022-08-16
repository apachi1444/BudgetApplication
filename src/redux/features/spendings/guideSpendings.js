import { createSlice, nanoid, AsyncThunk } from "@reduxjs/toolkit";
import { listCategories } from "../../../consts/spendingCategories";
const initialState = listCategories.map((item) => {
  console.log(listCategories, "lksdjf");
  return {
    id: item.id,
    title: item.name,
    elements: [],
  };
});

export const guideSpendingsSlice = createSlice({
  name: "Spendings",
  initialState: initialState,
  reducers: {
    addGuideSpending: (state, action) => {
      console.log(action, "haha");
      console.log(state);
    },
    delete: (state, action) => {
      state.delete(action.payload);
    },
  },
});

export default guideSpendingsSlice.reducer;

export const { addGuideSpending } = guideSpendingsSlice.actions;
