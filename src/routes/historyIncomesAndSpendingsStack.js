import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddSpending from "../screens/addModalSpending/addModalSpending";
import ListIncomes from "../screens/listIncomes/listIncomes";
import ListSpendings from "../screens/listSpendings/listSpendings";
import ListSpendingsAndIncomes from "../screens/listSpendingsAndIncomes/listSpendingsAndIncomes";
import { TabBottomNavigation } from "./tabBottomNavigationStack";

const IncomesAndSpendingsStack = createNativeStackNavigator();

export default function () {
  return (
    <IncomesAndSpendingsStack.Navigator>
      <IncomesAndSpendingsStack.Screen
        name="ListSpendingsAndIncomes"
        component={ListSpendingsAndIncomes}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <IncomesAndSpendingsStack.Screen
        name="ListIncomes"
        component={ListIncomes}
        options={{
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <IncomesAndSpendingsStack.Screen
        name="ListSpendings"
        component={ListSpendings}
        options={{
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <IncomesAndSpendingsStack.Screen
        name="Add Spending To The List of Spendings"
        component={AddSpending}
        options={{
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </IncomesAndSpendingsStack.Navigator>
  );
}
