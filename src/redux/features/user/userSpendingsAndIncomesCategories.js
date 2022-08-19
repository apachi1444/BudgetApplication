import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../consts/categories";
import { returnNewDate } from "../../../global/functions/time";
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
      const { id, period, key, date } = action.payload;
      console.log(action.payload);
      state.map((item) => {
        if (item.id == id) {
          item.spendingElements.map((elem) => {
            if (elem.key == key) {
              let newDate = returnNewDate(date, period);
              elem.date = newDate;
            }
          });
        }
      });
    },
    updateTransactionPlanned: (state, action) => {
      const { id, period, key, date } = action.payload;
      console.log(action.payload);
      state.map((item) => {
        if (item.id == id) {
          item.spendingElements.map((elem) => {
            if (elem.key == key) {
              let newDate = returnNewDate(date, period);
              elem.date = newDate;
            }
          });
        }
      });
    },
    deleteTransaction: (state, action) => {
      console.log("this is the action payload ", action.payload);
      state = state.map((item) => {
        let { id, transaction, key } = action.payload;
        if (item.id == id) {
          if (transaction == "Income") {
            item.incomeElements = item.incomeElements.filter(
              (income) => income.key != key
            );
          } else {
            item.spendingElements = item.spendingElements.filter(
              (spending) => spending.key != key
            );
          }
        }
      });
    },
  },
});

export default userSpendingsAndIncomesCategories.reducer;

export const {
  addTransaction,
  updateTransaction,
  deleteTransaction,
  updateTransactionPlanned,
} = userSpendingsAndIncomesCategories.actions;
