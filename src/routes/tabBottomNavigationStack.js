import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../consts/color";
const Tab = createMaterialBottomTabNavigator();
import ProfileUserStack from "../routes/profileUserStack";
import IncomesAndSpendingsStack from "./IncomesAndSpendingsStack";
export function TabBottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor={COLORS.PRIMARY}
      barStyle={{ backgroundColor: COLORS.LIGHT }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileUserStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="IncomesAndSpendings"
        component={IncomesAndSpendingsStack}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
