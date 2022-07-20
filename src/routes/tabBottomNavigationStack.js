import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab = createMaterialBottomTabNavigator();
import {
  GUIDE_50_30_20,
  HISTORYOFINCOMESANDSENDINGS,
  PROFILE,
  SETTINGS,
} from "../consts/consts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Icons } from "../components/icon";
import Guide_50_30_20_Stack from "./guide_50_30_20_Stack";
import CustomTabBar from "../components/customTabBar";
import ProfileUser from "../screens/profile/profile";
import Settings from "../screens/settings/settings";
import HistoryIncomesAndSpendingsStack from "./historyIncomesAndSpendingsStack";
import PlannedPayments from "../screens/plannedPayments/plannedPayments";
import HistoryStack from "./historyStack";
const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.Ionicons,
    activeIcon: "grid",
    inActiveIcon: "grid-outline",
    component: ProfileUser,
  },
  {
    route: "HistoryBottomBar",
    label: "History",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "heart-plus",
    inActiveIcon: "heart-plus-outline",
    component: HistoryStack,
  },
  {
    route: "AddButton",
    label: "Add",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "heart-plus",
    inActiveIcon: "heart-plus-outline",
    component: PlannedPayments,
  },
  {
    route: "Guide",
    label: "Guide",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "timeline-plus",
    inActiveIcon: "timeline-plus-outline",
    component: Guide_50_30_20_Stack,
  },
  {
    route: "Settings",
    label: "Settings",
    type: Icons.FontAwesome,
    activeIcon: "user-circle",
    inActiveIcon: "user-circle-o",
    component: Settings,
  },
];

export function TabBottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={PROFILE}
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === PROFILE) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === HISTORYOFINCOMESANDSENDINGS) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === SETTINGS) {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={50} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
      tabBarOptions={{
        activeTintColor: "green",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 10, fontSize: 30 },
        style: { padding: 10, height: 70 },
      }}
    >
      {TabArr.map((element) => {
        return (
          <Tab.Screen
            name={element.route}
            component={element.component}
            options={{
              iconName: "home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
              tabBarLabel: element.label,
              tabBarBadge: 3,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
