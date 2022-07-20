import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import editProfile from "../screens/editProfile/editProfile";
import PlannedPayments from "../screens/plannedPayments/plannedPayments";
import ProfileUser from "../screens/profile/profile";
import Settings from "../screens/settings/settings";
import IncomesAndSpendingsStack from "./historyIncomesAndSpendingsStack";
import { TabBottomNavigation } from "./tabBottomNavigationStack";
const ProfileUserStack = createNativeStackNavigator();

export default function () {
  return (
    <ProfileUserStack.Navigator>
      <ProfileUserStack.Screen
        name="BottomBar"
        component={TabBottomNavigation}
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
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <ProfileUserStack.Screen
        name="History"
        component={IncomesAndSpendingsStack}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
      <ProfileUserStack.Screen
        name="PlannedPayments"
        component={PlannedPayments}
        options={{
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </ProfileUserStack.Navigator>
  );
}
