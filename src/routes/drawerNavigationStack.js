import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import profileUserStack from "./profileUserStack";
import CustomDrawer from "../components/customDrawer/customDrawer";
import { SIZES } from "../consts/theme";
import COLORS from "../consts/color";
import historyStack from "./historyStack";
import Settings from "../screens/settings/settings";
import guide_50_30_20_Stack from "./guide_50_30_20_Stack";
import AboutUs from "../screens/about-us/about-us";
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const dimension = useWindowDimensions();
  const drawerType = dimension.width >= 700 ? "permanent" : "front";
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.PRIMARY,
        drawerActiveTintColor: COLORS.WHITE,
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          marginLeft: -SIZES.BASE * 2,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={profileUserStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      ></Drawer.Screen>
      {/* <Drawer.Screen
        name="History"
        component={historyStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      ></Drawer.Screen> */}
      {/* <Drawer.Screen
        name="Guide"
        component={guide_50_30_20_Stack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      ></Drawer.Screen> */}
      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="people" color={color} size={size} />
          ),
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
