import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import WelcomePage from "../screens/welcomePage/welcomePage";
import Header from "../shared/header";
import Login from "./../screens/login/login";
import SignUp from "./../screens/signup/signup";

const AuthStack = createNativeStackNavigator();

export default function () {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: () => <Header />,
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <AuthStack.Screen
        name="LoginPage"
        component={Login}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </AuthStack.Navigator>
  );
}
