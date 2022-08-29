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
    plannedSpendingsElements: [],
  };
});

export const userSpendingsAndIncomesCategories = createSlice({
  name: "userSpendingsAndIncomesCategories",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      let { category, transaction, period } = action.payload;
      state.map((item) => {
        if (item.title == category) {
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
            ...action.payload,
            numberTimesPaid,
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
    updateTransaction: (state, action) => {
      const { id, period, key, date } = action.payload;
      state.map((item) => {
        if (item.id == id) {
          item.plannedSpendingsElements.map((elem) => {
            if (elem.key == key) {
              let newDate = returnNewDate(new Date(date), period);
              elem.newDate = newDate;
              elem.numberTimesPaid++;
            }
          });
          item.spendingElements.map((elem) => {
            if (elem.key == key) {
              let newDate = returnNewDate(new Date(date), period);
              elem.newDate = newDate;
              elem.numberTimesPaid++;
            }
          });
        }
      });
    },

    updateTransactionPlanned: (state, action) => {
      // const { id, period, key, date, numberTimesPaid } = action.payload;
      // console.log(action.payload);
      // state.map((item) => {
      //   if (item.id == id) {
      //     item.spendingElements.map((elem) => {
      //       if (elem.key == key) {
      //         let newDate = returnNewDate(date, period);
      //         elem.date = newDate;
      //       }
      //     });
      //   }
      // });
    },

    deleteTransaction: (state, action) => {
      state = state.map((item) => {
        let { category, transaction, key } = action.payload;
        if (item.title == category) {
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

    deleteAllCategories: (state, action) => {
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

export default userSpendingsAndIncomesCategories.reducer;

export const {
  addTransaction,
  updateTransaction,
  deleteTransaction,
  updateTransactionPlanned,
  deleteAllCategories,
} = userSpendingsAndIncomesCategories.actions;
