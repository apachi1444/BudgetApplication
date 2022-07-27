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

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.Feather,
    icon: "home",
    component: ProfileUser,
  },
  {
    route: "Search",
    label: "Search",
    type: Icons.Feather,
    icon: "search",
    component: History,
  },
  {
    route: "Add",
    label: "Add",
    type: Icons.Feather,
    icon: "plus",
    component: PlannedPayments,
  },
  {
    route: "Like",
    label: "Like",
    type: Icons.Feather,
    icon: "heart",
    component: Guide_50_30_20_Summary,
  },
  {
    route: "Settings",
    label: "Settings",
    type: Icons.FontAwesome,
    icon: "gear",
    component: Settings,
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

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
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon type={item.type} name={item.icon} color={COLORS.WHITE} />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const TabIcon = (props) => {
  const { item, accessibilityState } = props;
  const focused = accessibilityState.selected;
  console.log(focused);
  return (
    <Icon
      type={item.type}
      name={item.icon}
      color={focused ? COLORS.FOCUSEDTAB : COLORS.PRIMARY}
    />
  );
};

export default function AnimTab1() {
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
              iconName: item.label,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        ) : (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarLabel: (props) => (
                <Text style={{ fontSize: 15 }}>{item.label}</Text>
              ),

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
  btn: {
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
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: COLORS.PRIMARY,
  },
  labelText: {
    fontSize: 15,
  },
});
