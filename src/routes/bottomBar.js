import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabArr } from "../consts/tab";

import { TabButton } from "../components/tabButton";
import { TabIcon } from "../components/tabIcon";
import COLORS from "../consts/color";
import { SIZES } from "../consts/theme";

const Tab = createBottomTabNavigator();
export default function BottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return item.label == "Add" ? (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        ) : (
          <Tab.Screen
            key={index}
            name={item.label}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: (props) => <TabIcon {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    height: SIZES.BASE * 10,
    backgroundColor: COLORS.BOTTOMBAR,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonAdd: {
    width: SIZES.BASE * 9,
    height: SIZES.BASE * 9,
    borderRadius: SIZES.BASE * 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.BASE * 8,
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 25,
  },
  icon: {
    fontSize: 26,
  },
  iconAndLabelView: {
    alignItems: "center",
  },
});
