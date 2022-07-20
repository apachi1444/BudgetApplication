import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Settings from "../screens/settings/settings";
import authStack from "./authStack";
import welcomePageStack from "./welcomePageStack";

const SettingsStack = createNativeStackNavigator();

export default function () {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{
          // headerTitle: () => <Header title="About YessineZone" />,
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </SettingsStack.Navigator>
  );
}
