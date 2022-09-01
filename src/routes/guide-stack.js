import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GuideSummary from "../screens/guide/summary/index";
import Details from "./../screens/guide/details/index";

const Guide_Stack = createNativeStackNavigator();

export default function () {
  return (
    <Guide_Stack.Navigator>
      <Guide_Stack.Screen
        name="Summary"
        component={GuideSummary}
        options={{
          // headerTitle: () => <Header title="About YessineZone" />,
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <Guide_Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </Guide_Stack.Navigator>
  );
}
