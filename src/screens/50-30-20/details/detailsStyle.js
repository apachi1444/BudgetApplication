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
});
