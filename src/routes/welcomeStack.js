import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import authStack from "./authStack";
import welcomePageStack from "./welcomePageStack";

const WelcomeStack = createNativeStackNavigator();

export default function () {
  return (
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen
        name="AuthStack"
        component={authStack}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <WelcomeStack.Screen
        name="WelcomePageStack"
        component={welcomePageStack}
        options={{
          // headerTitle: () => <Header title="About YessineZone" />,
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </WelcomeStack.Navigator>
  );
}
