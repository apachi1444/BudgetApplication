import { StyleSheet } from "react-native";
import COLORS from "../../../consts/color";
import { SIZES } from "../../../consts/theme";
import { windowHeight } from "../../../utils/dimensions";

export const guideStyle = StyleSheet.create({
  page: {
    paddingVertical: "5%",
    paddingHorizontal: "4%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.BASE * 3,
    fontWeight: "400",
    marginRight: "25%",
  },
  profileImage: {
    width: SIZES.BASE * 8,
    height: SIZES.BASE * 8,
    borderRadius: SIZES.BASE * 4,
  },
  topText: {
    marginTop: SIZES.BASE * 6,
    fontSize: SIZES.BASE * 4,
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: SIZES.BASE * 3,
    fontWeight: "400",
    marginLeft: SIZES.BASE * 1.2,
  },
  mainContainer: {
    backgroundColor: COLORS.LIGHTGREY,
    margin: SIZES.BASE * 6,
    padding: SIZES.BASE * 2,
    borderRadius: SIZES.BASE * 5,
    // height: windowHeight * 0.5,
  },
  summaryText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: SIZES.BASE * 4,
  },
});
