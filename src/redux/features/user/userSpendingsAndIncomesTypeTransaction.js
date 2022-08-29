import { createSlice } from "@reduxjs/toolkit";
import { typeTransactions } from "../../../consts/spendingCategories";

const initialState = typeTransactions.map((item) => {
  return {
    id: item.id,
    type: item.name,
    spendingElements: [],
    incomeElements: [],
    plannedSpendingsElements: [],
  };
});

export const userSpendingsAndIncomesTypeTransaction = createSlice({
  name: "userSpendingsAndIncomesTypeTransaction",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      let { type, transaction, period } = action.payload;

      state.map((item) => {
        if (item.type == type) {
          let numberTimesPaid = 0;
          if (period == 0) {
            numberTimesPaid = 1;
          }
          let finalList =
            transaction == "Income"
              ? item.incomeElements
              : item.spendingElements;
          finalList.push({
            key: finalList.length + 1,
            numberTimesPaid: Number(numberTimesPaid),
            ...action.payload,
          });
          if (period != 0) {
            item.plannedSpendingsElements.push({
              key: item.plannedSpendingsElements.length + 1,
              ...action.payload,
              numberTimesPaid,
            });
          }
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
            if (item.spendings != null) {
              item.spendings = item?.spendings.filter((item) => {
                item.key !== key;
              });
            }
            if (item.plannedSpendingsElements != null) {
              item.plannedSpendingsElements =
                item?.plannedSpendingsElements.filter((item) => {
                  item.key !== key;
                });
            }
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
          item.plannedSpendingsElements.map((elem) => {
            if (elem.key == key) {
              elem.numberTimesPaid++;
            }
          });
          item.spendingElements.map((elem) => {
            if (elem.key == key) {
              elem.numberTimesPaid++;
            }
          });
        }
      });
    },
    deleteAllTypeTransactions: (state, action) => {
      state.map((item) => {
        item.spendingElements = item.spendingElements.filter((item) => {
          return false;
        });
        item.incomeElements = item.incomeElements.filter((item) => {
          return false;
        });
        if (item.spendings != null) {
          item.spendings = item?.spendings.filter((item) => {
            return false;
          });
        }
        if (item.plannedSpendingsElements != null) {
          item.plannedSpendingsElements = item?.plannedSpendingsElements.filter(
            (item) => {
              return false;
            }
          );
        }
        if (item.incomes != null) {
          item.incomes = item?.incomes.filter((item) => {
            return false;
          });
        }
      });
    },
  },
});

export default userSpendingsAndIncomesTypeTransaction.reducer;

export const {
  add,
  deleteGuide,
  updateTypeTransaction,
  deleteAllTypeTransactions,
} = userSpendingsAndIncomesTypeTransaction.actions;
