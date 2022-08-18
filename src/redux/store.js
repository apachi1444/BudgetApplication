import { configureStore } from "@reduxjs/toolkit";
import userPlannedSpending from "./features/spendings/plannedPayments";
import userSpendingsAndIncomesCategories from "./features/user/userSpendingsAndIncomesCategories";
import userSpendingAndIncomes from "./features/user/userSpendingsAndIncomesTypeTransaction";
export const store = configureStore({
  reducer: {
    userPlannedSpending: userPlannedSpending,
    userSpendingsAndIncomes: userSpendingAndIncomes,
    userSpendingsAndIncomesCategories: userSpendingsAndIncomesCategories,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
