import { configureStore } from "@reduxjs/toolkit";
import userSpendingsAndIncomesCategories from "./features/user/userSpendingsAndIncomesCategories";
import userSpendingAndIncomes from "./features/user/userSpendingsAndIncomesTypeTransaction";
import userInformations from "./features/user/userInformations";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "jkjdfhsdqsdfqsdfqsdff",
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  userInformations: userInformations,
  userSpendingsAndIncomes: userSpendingAndIncomes,
  userSpendingsAndIncomesCategories: userSpendingsAndIncomesCategories,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
