import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import WelcomePage from "../screens/welcomePage/welcomePage";
import Login from "./../screens/login/login";
import SignUp from "./../screens/signup/signup";
import ProfileUserStack from "./profileUserStack";
import { TabBottomNavigation } from "./tabBottomNavigationStack";
import { DrawerNavigator } from "./drawerNavigationStack";
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
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <AuthStack.Screen
        name="UserProfile"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </AuthStack.Navigator>
  );
}
