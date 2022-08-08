import { StyleSheet } from "react-native";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import { windowWidth } from "../../utils/dimensions";

export const CustomDrawerStyle = StyleSheet.create({
  toggleSetting: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.05,
    borderRadius: SIZES.BASE * 8,
    padding: SIZES.BASE * 0.48,
    marginLeft: SIZES.BASE * 2,
  },
  circleInsideToggleSetting: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    width: "50%",
    height: "100%",
    position: "absolute",
    top: "16.5%",
  },
});
