import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import editProfile from "../screens/editProfile/editProfile";

const Tab = createBottomTabNavigator();
import React from "react";
import ProfileUser from "../screens/profile/profile";
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#FFF",
          borderRadius: 15,
          height: 10,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={editProfile}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={ProfileUser}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs();
