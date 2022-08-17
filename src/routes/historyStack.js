import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChartCategories from "../screens/history/chartCategories/chartCategories";
import FoodCategory from "../screens/history/chartCategories/foodCategory/foodCategory";
import FoodSubCategories from "../screens/history/chartCategories/foodCategory/foodSubCategories/foodSubCategories";
import History from "../screens/history/history";

const HistoryStack = createNativeStackNavigator();

export default function () {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="history"
        component={History}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <HistoryStack.Screen
        name="charts"
        component={ChartCategories}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <HistoryStack.Screen
        name="food-category"
        component={FoodCategory}
        options={{
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <HistoryStack.Screen
        name="food-sub-categories"
        component={FoodSubCategories}
        options={{
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </HistoryStack.Navigator>
  );
}
