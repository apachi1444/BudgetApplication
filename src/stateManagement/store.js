import { configureStore } from "@reduxjs/toolkit";
import userSpendings from "./features/spendings/userSpendings";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: { user: userReducer, userSpendings: userSpendings },
});
