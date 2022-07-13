import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import editProfile from "../screens/editProfile/editProfile";
import ProfileUser from "../screens/profile/profile";

const ProfileUserStack = createNativeStackNavigator();

export default function () {
  return (
    <ProfileUserStack.Navigator>
      <ProfileUserStack.Screen
        name="EditProfile"
        component={editProfile}
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
    </ProfileUserStack.Navigator>
  );
}
