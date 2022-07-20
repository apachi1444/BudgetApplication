import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import authStack from "./authStack";
import welcomePageStack from "./welcomePageStack";

const Guide_50_30_20_Stack = createNativeStackNavigator();

export default function () {
  return (
    <Guide_50_30_20_Stack.Navigator>
      <Guide_50_30_20_Stack.Screen
        name="WelcomePageStack"
        component={welcomePageStack}
        options={{
          // headerTitle: () => <Header title="About YessineZone" />,
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <Guide_50_30_20_Stack.Screen
        name="AuthStack"
        component={authStack}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </Guide_50_30_20_Stack.Navigator>
  );
}
