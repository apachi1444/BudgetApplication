import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../consts/color";
const Tab = createMaterialBottomTabNavigator();
import ProfileUserStack from "../routes/profileUserStack";
import IncomesAndSpendingsStack from "./IncomesAndSpendingsStack";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { INCOMESANDSENDINGSNAME, PROFILENAME } from "../consts/consts";
export function TabBottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={PROFILENAME}
      activeColor={COLORS.PRIMARY}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === PROFILENAME) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === INCOMESANDSENDINGSNAME) {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#000",
        labelStyle: {
          paddingBottom: 10,
          fontSize: 15,
        },
        style: { padidng: 10, height: 70 },
      }}
    >
      <Tab.Screen name={PROFILENAME} component={ProfileUserStack} />
      <Tab.Screen
        name={INCOMESANDSENDINGSNAME}
        component={IncomesAndSpendingsStack}
      />
    </Tab.Navigator>
  );
}
