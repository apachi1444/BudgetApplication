import { createSlice, nanoid, AsyncThunk } from "@reduxjs/toolkit";
import { categories } from "../../../consts/categories";
const initialState = [
  {
    title: "PC GAMER 2022",
    price: 5000,
    date: new Date(),
    category: categories[1],
    key: 1,
  },
  {
    title: "PC GAMER 2022",
    price: 5000,
    category: categories[1],
    date: new Date(),
    key: 2,
  },
];
export const incomesSlice = createSlice({
  name: "Incomes",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const stateToAdd = {
        key: nanoid(),
        ...action.payload,
      };
      state.push(stateToAdd);
    },
    delete: (state, action) => {
      state.delete(action.payload);
    },
  },
});

export default incomesSlice.reducer;

export const { add } = incomesSlice.actions;
