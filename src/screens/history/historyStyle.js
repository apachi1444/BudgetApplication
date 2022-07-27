import { StyleSheet } from "react-native";
import COLORS from "../../consts/color";
import { windowHeight, windowWidth } from "../../utils/dimensions";
import { SIZES } from "./../../consts/theme";

export const historyStyle = StyleSheet.create({
  wholeContainer: {
    paddingHorizontal: "5%",
  },
  containerProfileInformations: {
    paddingVertical: "6%",
    flexDirection: "row",
    alignItems: "center",
  },

  containerThreeCircles: {
    maxWidth: windowWidth * 0.5,
    flexDirection: "row",
  },
  containerImageBudget: (color) => {
    return {
      marginTop: SIZES.BASE * 3,
      marginHorizontal: SIZES.BASE,
      width: windowWidth * 0.29,
      height: windowHeight * 0.155,
      borderRadius: windowWidth * 0.2,
      borderColor: color,
      borderWidth: 2,
      padding: 5,
      justifyContent: "center",
      alignItems: "center",
    };
  },
  imageProfile: {
    marginRight: SIZES.BASE,
  },
  nameUser: {
    fontSize: SIZES.BASE * 4,
    color: COLORS.PRIMARY,
  },
  titleDashboard: {
    fontSize: SIZES.BASE * 3,
    fontWeight: "300",
  },
  imageBudget: {
    width: "100%",
    height: "100%",
    opacity: 0.12,
  },
  viewTextInside: {
    position: "absolute",
  },
  textInside: (color) => {
    return {
      fontWeight: "bold",
      fontSize: 23,
      color: color,
    };
  },

  viewMyBudgetTitle: (color) => {
    return {
      flexDirection: "row",
      justifyContent: "center",
      color: color,
      marginBottom: SIZES.BASE * 2,
    };
  },
  myBudgetTitle: (color) => {
    return {
      fontSize: 20,
      color: color,
    };
  },
  categoryIcon: {
    color: COLORS.BLACK,
    fontSize: 26,
    fontWeight: "bold",
    marginRight: SIZES.BASE * 2,
  },
  buttonGoToCategoryList: {
    padding: SIZES.BASE * 2,
  },
});
