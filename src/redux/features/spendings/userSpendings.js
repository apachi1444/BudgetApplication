import { createSlice, nanoid, AsyncThunk } from "@reduxjs/toolkit";
const initialState = [
  {
    title: "PC GAMER 2022 ",
    price: " +5000DH",
    date: "13/07/2022",
    key: "1",
  },
  {
    title: "PC GAMER 2022 ",
    price: " +5000DH",
    date: "13/07/2022",
    key: "2",
  },
];
export const userSpendingsSlice = createSlice({
  name: "userSpendings",
  initialState: initialState,
  reducers: {
    addSpendingToList: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepate(title, price, date) {
        return {
          payload: {
            key: nanoid(),
            title,
            price,
            date,
          },
        };
      },
    },
    deleteSpendingFromList: (state, action) => {
      state.delete(action.payload);
    },
  },
});

export default userSpendingsSlice.reducer;

export const selectAllSpendings = (state) => state.userSpendings;

export const { addSpendingToList } = userSpendingsSlice.actions;
