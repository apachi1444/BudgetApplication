import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChartCategories from "../screens/history/chartCategories/chartCategories";
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
    </HistoryStack.Navigator>
  );
}
