import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import WelcomePage from "../screens/welcomePage/welcomePage";

const WelcomePageStack = createNativeStackNavigator();

export default function () {
  return (
    <WelcomePageStack.Navigator>
      <WelcomePageStack.Screen
        name="WelcomePage"
        component={WelcomePage}
        // options={{
        //   headerTitle: () => <Header title="About YessineZone" />,
        //   headerShown: false,
        //   headerStyle: {backgroundColor: '#eee'},
        // }}
      />
    </WelcomePageStack.Navigator>
  );
}
