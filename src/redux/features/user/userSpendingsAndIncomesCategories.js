import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../consts/categories";
let length = 0;
const initialState = categories.map((item) => {
  length += 1;
  return {
    id: length,
    title: item.name,
    color: item.color,
    icon: item.icon,
    imageUrl: item.imageUrl,
    incomeElements: [],
    spendingElements: [],
  };
});

export const userSpendingsAndIncomesCategories = createSlice({
  name: "userSpendingsAndIncomesCategories",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.map((item) => {
        let { category, transaction } = action.payload;
        if (item.title == category) {
          let finalList =
            transaction == "Income"
              ? item.incomeElements
              : item.spendingElements;
          finalList.push({
            key: finalList.length + 1,
            ...action.payload,
          });
        }
      });
    },
    updateTransaction: (state, action) => {
      //   const { id, duration, key, date } = action.payload;
      //   state.map((item) => {
      //     if (item.id == id) {
      //       item.elements.map((elem) => {
      //         if (elem.key == key) {
      //           let newDate = returnNewDate(date, duration);
      //           elem.date = newDate;
      //         }
      //       });
      //     }
      //   });
    },
    deleteTransaction: (state, action) => {
      return state.map((item) => {
        let { category, transaction, key } = action.payload;
        if (item.title == category) {
          let finalList =
            transaction == "Income"
              ? item?.incomeElements
              : item?.spendingElements;

          finalList.filter((item) => item.key != key);
        }
      });
    },
  },
});

export default userSpendingsAndIncomesCategories.reducer;

export const { addTransaction, updateTransaction, deleteTransaction } =
  userSpendingsAndIncomesCategories.actions;
