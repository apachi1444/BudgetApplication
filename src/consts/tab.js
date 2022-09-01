import Settings from "../screens/settings/index";
import ProfileUser from "../screens/profile/index";
import HistoryStack from "../routes/historyStack";
import Guide_Stack from "../routes/guide-stack";
import Add from "../components/add";
import { Icons } from "../components/icon";
import profileUserStack from "../routes/profileUserStack";

export const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.MaterialCommunityIcons,
    icon: "home",
    component: profileUserStack,
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
    component: Add,
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
