import { StyleSheet } from "react-native";
import COLORS from "../../../consts/color";
import { SIZES } from "../../../consts/theme";
import { windowHeight, windowWidth } from "../../../utils/dimensions";

export const detailsStyle = StyleSheet.create({
  containerChart: {
    backgroundColor: COLORS.LIGHTGREY,
    borderRadius: SIZES.BASE * 4,
    padding: SIZES.BASE * 4,
    margin: SIZES.BASE * 4,
  },
  titleAndIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: SIZES.BASE * 3,
  },
  page: {
    backgroundColor: COLORS.LIGHTGREY,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  profileImage: {
    borderRadius: SIZES.BASE * 3.6,
    height: windowHeight * 0.06,
    width: windowWidth * 0.12,
  },

  containerSwitch: {
    flexDirection: "row",
    alignItems: "center",
    right: "-27%",
    position: "absolute",
    top: "240%",
    transform: [{ rotate: "90deg" }],
  },

  containerButtonSwitch: (color) => {
    return {
      backgroundColor: color,
      padding: SIZES.BASE * 2,
      paddingHorizontal: SIZES.BASE * 4.5,
      borderRadius: SIZES.BASE * 4,
      marginHorizontal: SIZES.BASE,
    };
  },
  textButtonSwitch: {
    fontSize: SIZES.BASE * 2.5,
    fontWeight: "bold",
  },
});
