import { configureStore } from "@reduxjs/toolkit";
import userSpendingsAndIncomesCategories from "./features/user/userSpendingsAndIncomesCategories";
import userSpendingAndIncomes from "./features/user/userSpendingsAndIncomesTypeTransaction";
export const store = configureStore({
  reducer: {
    userSpendingsAndIncomes: userSpendingAndIncomes,
    userSpendingsAndIncomesCategories: userSpendingsAndIncomesCategories,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
