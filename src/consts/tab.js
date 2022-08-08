import Settings from "../screens/settings/settings";
import ProfileUser from "../screens/profile/profile";
import HistoryStack from "../routes/historyStack";
import Guide_Stack from "../routes/guide_50_30_20_Stack";
import Add from "../components/add/add";
import { Icons } from "../components/icon";

export const TabArr = [
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
