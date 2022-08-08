import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import editProfile from "../screens/editProfile/editProfile";
import PlannedPayments from "../screens/plannedPayments/plannedPayments";
import ProfileUser from "../screens/profile/profile";
import HistoryIncomesAndSpendingsStack from "./historyIncomesAndSpendingsStack";
// import { TabBottomNavigation } from "./tabBottomNavigationStack";
import BottomBar from "./../components/bottomBar";
import { DrawerNavigator } from "./drawerNavigationStack";
const ProfileUserStack = createNativeStackNavigator();

export default function () {
  return (
    <ProfileUserStack.Navigator>
      <ProfileUserStack.Screen
        name="BottomBar"
        component={BottomBar}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <ProfileUserStack.Screen
        name="ProfilePage"
        component={ProfileUser}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />

      <ProfileUserStack.Screen
        name="EditProfile"
        component={editProfile}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      />
      {/* <ProfileUserStack.Screen
        name="HistoryBottomBar"
        // here we must do the stack because we don't want to show only the page of the history but also the navigation bottomBar
        
        component={HistoryIncomesAndSpendingsStack}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      /> */}
      <ProfileUserStack.Screen
        name="PlannedPayments"
        component={PlannedPayments}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </ProfileUserStack.Navigator>
  );
}
