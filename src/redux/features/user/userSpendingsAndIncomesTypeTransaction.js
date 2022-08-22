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
      let { type, transaction } = action.payload;
      state.map((item) => {
        console.log(item, "haha");
        if (item.type == type) {
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
    deleteGuide: (state, action) => {
      state = state.map((item) => {
        console.log("this is the guide ", state);
        console.log("this is the action payload ", action.payload);
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
  },
});

export default userSpendingsAndIncomesTypeTransaction.reducer;

export const { add, deleteGuide } =
  userSpendingsAndIncomesTypeTransaction.actions;
