import { createSlice } from "@reduxjs/toolkit";
import { typeTransactions } from "../../../consts/spendingCategories";

const initialState = typeTransactions.map((item) => {
  return {
    id: item.id,
    type: item.name,
    spendingElements: [],
    incomeElements: [],
  };
});

export const userSpendingsAndIncomesTypeTransaction = createSlice({
  name: "userSpendingsAndIncomesTypeTransaction",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      let { type, transaction, period, date } = action.payload;
      let numberTimesPaid = 0;
      if (period != 0) {
        numberTimesPaid = 0;
      } else {
        numberTimesPaid = 1;
      }
      state.map((item) => {
        if (item.type == type) {
          let finalList =
            transaction == "Income"
              ? item.incomeElements
              : item.spendingElements;
          finalList.push({
            key: finalList.length + 1,
            numberTimesPaid,
            ...action.payload,
          });
        }
      });
    },
    deleteGuide: (state, action) => {
      state = state.map((item) => {
        let { transaction, key, id, type } = action.payload;
        if (item.type == type) {
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
    updateTypeTransaction: (state, action) => {
      const { id, key } = action.payload;
      state.map((item) => {
        if (item.id == id) {
          item.spendingElements.map((elem) => {
            if (elem.key == key) {
              elem.numberTimesPaid++;
            }
          });
        }
      });
    },
  },
});

export default userSpendingsAndIncomesTypeTransaction.reducer;

export const { add, deleteGuide, updateTypeTransaction } =
  userSpendingsAndIncomesTypeTransaction.actions;
