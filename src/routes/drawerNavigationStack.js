import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import CustomDrawer from "../components/customDrawer";
import { SIZES } from "../consts/theme";
import COLORS from "../consts/color";
import BottomBar from "./bottomBar";
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
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
        name="Main"
        component={BottomBar}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      ></Drawer.Screen>
      {/* <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="people" color={color} size={size} />
          ),
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      ></Drawer.Screen> */}
    </Drawer.Navigator>
  );
};
