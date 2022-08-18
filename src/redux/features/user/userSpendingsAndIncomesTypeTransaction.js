import { createSlice } from "@reduxjs/toolkit";
import { typeTransactions } from "../../../consts/spendingCategories";

const initialState = typeTransactions.map((item) => {
  return {
    id: item.id,
    title: item.name,
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
        let { title } = item;

        if (type == title) {
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
    delete: (state, action) => {
      state.delete(action.payload);
    },
  },
});

export default userSpendingsAndIncomesTypeTransaction.reducer;

export const { add } = userSpendingsAndIncomesTypeTransaction.actions;
