import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import editProfile from "../screens/editProfile/editProfile";
import PlannedPayments from "../screens/plannedPayments/plannedPayments";
import ProfileUser from "../screens/profile/profile";
// import { TabBottomNavigation } from "./tabBottomNavigationStack";
// import BottomBar from "./bottomBar";
import { DrawerNavigator } from "./drawerNavigationStack";
const LoggedStack = createNativeStackNavigator();

export default function () {
  return (
    <LoggedStack.Navigator>
      <LoggedStack.Screen
        name="drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      />
    </LoggedStack.Navigator>
  );
}
