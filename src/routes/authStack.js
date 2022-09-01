import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./../screens/login/index";
import SignUp from "./../screens/signup/index";
import loggedStack from "./loggedStack";
import config from "../../config";

const AuthStack = createNativeStackNavigator();

export default function () {
  return (
    <AuthStack.Navigator>
      {config.LOGGEDIN != "true" && (
        <>
          <AuthStack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: "#eee" },
            }}
          />
          <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: "#eee" },
            }}
          />
        </>
      )}
      <AuthStack.Screen
        name="loggedIn"
        component={loggedStack}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </AuthStack.Navigator>
  );
}
