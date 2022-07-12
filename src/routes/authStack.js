import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./../screens/login/login";
import SignUp from "./../screens/signup/signup";

const AuthStack = createNativeStackNavigator();

export default function () {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginPage"
        component={Login}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <AuthStack.Screen
        name="SignUpPage"
        component={SignUp}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </AuthStack.Navigator>
  );
}
