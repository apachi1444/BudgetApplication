import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DrawerNavigator } from "./drawerNavigationStack";
const LoggedStack = createNativeStackNavigator();

export default function () {
  return (
    <LoggedStack.Navigator>
      <LoggedStack.Screen
        name="drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      />
    </LoggedStack.Navigator>
  );
}
