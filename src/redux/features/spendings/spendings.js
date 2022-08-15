import { createSlice, nanoid, AsyncThunk } from "@reduxjs/toolkit";
import { categories } from "../../../consts/categories";
import { periodList } from "../../../consts/periodSpendingLabels";
const initialState = [
  {
    title: "PC GAMER 2022",
    price: 2000,
    date: new Date(),
    type: "want",
    category: categories[0],
    period: periodList[0],
    key: 1,
  },
  {
    title: "PC GAMER 2022",
    price: 5000,
    category: categories[1],
    period: periodList[3],
    date: new Date(),
    type: "save",
    key: 2,
  },
];
export const spendingsSlice = createSlice({
  name: "Spendings",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const stateToAdd = {
        key: state.length + 1,
        date: new Date(),
        ...action.payload,
      };
      state.push(stateToAdd);
    },
    delete: (state, action) => {
      state.delete(action.payload);
    },
  },
});

export default spendingsSlice.reducer;

export const { add } = spendingsSlice.actions;
