import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon, { Icons } from "./icon";
import * as Animatable from "react-native-animatable";
import Settings from "../screens/settings/settings";
import COLORS from "./../consts/color";
import ProfileUser from "../screens/profile/profile";
import History from "../screens/history/history";
import PlannedPayments from "../screens/plannedPayments/plannedPayments";
import Guide_50_30_20_Summary from "../screens/50-30-20/summary/guide_50_30_20_Summary";
import { SIZES } from "../consts/theme";
import HistoryStack from "../routes/historyStack";
import Guide_Stack from "../routes/guide_50_30_20_Stack";

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.MaterialCommunityIcons,
    icon: "home",
    component: ProfileUser,
  },
  {
    route: "History",
    label: "History",
    type: Icons.MaterialCommunityIcons,
    icon: "briefcase",
    component: HistoryStack,
  },
  {
    route: "Add",
    label: "Add",
    type: Icons.Feather,
    icon: "plus",
    component: PlannedPayments,
  },
  {
    route: "guide",
    label: "Guide",
    type: Icons.MaterialCommunityIcons,
    icon: "google-assistant",
    component: Guide_Stack,
  },
  {
    route: "Settings",
    label: "Settings",
    type: Icons.MaterialCommunityIcons,
    icon: "cog",
    component: Settings,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      // here we will do the animation of the three buttons to add a spending or an income
    } else {
    }
  }, [focused]);

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container}>
        <View style={styles.buttonAdd}>
          <View style={styles.circle} />
          <Icon type={item.type} name={item.icon} color={COLORS.BLACK} />
        </View>
        <Text style={styles.text}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const TabIcon = (props) => {
  const { item, focused } = props;

  return (
    <View style={styles.iconAndLabelView}>
      <Icon
        type={item.type}
        name={item.icon}
        style={styles.icon}
        color={focused ? COLORS.FOCUSEDTAB : COLORS.PRIMARY}
      />
      <Text
        style={[
          {
            color: focused ? COLORS.FOCUSEDTAB : COLORS.PRIMARY,
            fontWeight: "700",
          },
        ]}
      >
        {item.label}
      </Text>
    </View>
  );
};

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
    width: SIZES.BASE * 8,
    height: SIZES.BASE * 8,
    borderRadius: SIZES.BASE * 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.BASE * 6,
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
