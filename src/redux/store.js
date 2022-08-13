import { configureStore } from "@reduxjs/toolkit";
import userSpendings from "./features/spendings/userSpendings";
import userReducer from "./features/user/userSlice";
import userSpending from "./features/spendings/spendings";
import userIncome from "./features/incomes//incomes";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userSpendings: userSpendings,
    userSpending: userSpending,
    userIncome: userIncome,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
