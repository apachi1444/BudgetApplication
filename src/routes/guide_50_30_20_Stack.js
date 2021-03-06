import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Guide_50_30_20_Summary from "../screens/50-30-20/summary/guide_50_30_20_Summary";
import Guide_50_30_20_Wants from "../screens/50-30-20/wants/50_30_20_wants";
import authStack from "./authStack";
import welcomePageStack from "./welcomePageStack";

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
        name="Wants"
        component={Guide_50_30_20_Wants}
        options={{
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </Guide_50_30_20_Stack.Navigator>
  );
}
