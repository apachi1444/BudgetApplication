import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import editProfile from "../screens/editProfile/editProfile";
import ListIncomes from "../screens/listIncomes/listIncomes";
import ListSpendings from "../screens/listSpendings/listSpendings";
import ProfileUser from "../screens/profile/profile";
import Settings from "../screens/settings/settings";

const IncomesAndSpendingsStack = createNativeStackNavigator();

export default function () {
  return (
    <IncomesAndSpendingsStack.Navigator>
      <IncomesAndSpendingsStack.Screen
        name="ListIncomes"
        component={ListIncomes}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <IncomesAndSpendingsStack.Screen
        name="ListSpendings"
        component={ListSpendings}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </IncomesAndSpendingsStack.Navigator>
  );
}
