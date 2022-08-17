import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import userSpending from "./features/spendings/spendings";
import userIncome from "./features/incomes//incomes";
import userPlannedSpending from "./features/spendings/plannedPayments";
export const store = configureStore({
  reducer: {
    user: userReducer,
    userPlannedSpending: userPlannedSpending,
    spendingsAndIncomes: userSpending,
    userIncome: userIncome,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
