import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Guide_50_30_20_Summary from "../screens/50-30-20/summary/guide_50_30_20_summary";
import authStack from "./authStack";
import welcomePageStack from "./welcomePageStack";
import Details from "./../screens/50-30-20/details/details";

const Guide_50_30_20_Stack = createNativeStackNavigator();

export default function () {
  return (
    <Guide_50_30_20_Stack.Navigator>
      <Guide_50_30_20_Stack.Screen
        name="Summary"
        component={Guide_50_30_20_Summary}
        options={{
          // headerTitle: () => <Header title="About YessineZone" />,
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <Guide_50_30_20_Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </Guide_50_30_20_Stack.Navigator>
  );
}
