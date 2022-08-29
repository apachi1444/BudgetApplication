import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TabArr } from "../consts/tab";
import { TabButton } from "../components/tabButton";
import { TabIcon } from "../components/tabIcon";
import { StackActions } from "@react-navigation/native";
import { globalStyles } from "../global/styles/globalStyles";

const Tab = createBottomTabNavigator();
export default function BottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: globalStyles.tabBar,
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
            listeners={({ navigation, route }) => ({
              tabPress: (e) => {
                let state = route?.state;
                if (state) {
                  const stackKey = state.key;
                  navigation.dispatch({
                    ...StackActions.popToTop(),
                    target: stackKey,
                  });
                }
              },
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
}
