import { configureStore } from "@reduxjs/toolkit";
import userSpendings from "./features/spendings/userSpendings";
import userReducer from "./features/user/userSlice";
import userSpending from "./features/spendings/spendings";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userSpendings: userSpendings,
    userSpending: userSpending,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
