import { StyleSheet } from "react-native";
import COLORS from "../../consts/color";
import { windowHeight, windowWidth } from "../../utils/dimensions";
import { SIZES, SIZESS } from "./../../consts/theme";

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
    flexDirection: "row",
  },
  containerImageBudget: (color) => {
    return {
      marginTop: SIZES.BASE * 3,
      marginHorizontal: SIZES.BASE / 2,
      width: windowWidth * 0.28,
      height: windowHeight * 0.15,
      borderRadius: windowWidth * 0.25,
      borderColor: color,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
      padding: "1%",
    };
  },

  containerHistoryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: SIZES.BASE * 2,
    backgroundColor: COLORS.BOTTOMBAR,
    padding: SIZES.BASE * 2.5,
    borderRadius: SIZES.BASE * 3.5,
  },

  containerOneBoxCategory: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    paddingVertical: SIZES.BASE * 2,
    paddingHorizontal: SIZES.PADDING * 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
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
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textInside: (color) => {
    return {
      fontWeight: "bold",
      fontSize: 17,
      color: color,
    };
  },

  containerEditAndDeleteButtons: {
    flexDirection: "row",
    position: "absolute",
    bottom: "-41%",
    alignSelf: "center",
    right: "4%",
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
    fontSize: 50,
    fontWeight: "bold",
    marginRight: SIZES.BASE * 2,
  },
  moreDetailsText: {
    fontSize: SIZES.BASE * 2.6,
    color: COLORS.PRIMARY,

    fontWeight: "bold",
  },
  buttonGoToCategoryList: {
    padding: SIZES.BASE * 2,
  },
  shadow: {
    shadowColor: "#aaa",
    shadowOffset: {
      width: 50,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },
  shadowProp: {
    shadowColor: "#0F0",
    shadowOffset: { width: -50, height: 20 },
    shadowRadius: 20,
  },
  textButtonCategory: {
    marginLeft: SIZES.BASE,
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: SIZES.BASE * 2.5,
  },
  moreLessButton: {
    flexDirection: "row",
    marginVertical: SIZES.BASE,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.LIGHTGREY,
    padding: SIZES.BASE * 2,
    alignSelf: "center",
    borderRadius: SIZES.BASE * 3.5,
    borderColor: COLORS.PRIMARY,
    borderWidth: 2,
  },
  containerCheckboxAndImageAndTitle: {
    flexDirection: "row",
    alignItems: "center",
  },

  containerEachLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZESS.base,
  },
  containerCalendarAndTimeRemaining: {
    alignItems: "flex-end",
  },
  containerChartFigure: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.BASE / 2,
    alignSelf: "center",
    backgroundColor: COLORS.LIGHTGREY,
    padding: SIZES.BASE * 4,
    height: windowHeight * 0.15,
    borderRadius: SIZES.BASE * 4,
  },
  textInsideCategoryContent: {
    alignSelf: "center",
    marginTop: SIZES.BASE * 2,
    fontWeight: "bold",
    fontSize: SIZES.BASE * 3,
    marginBottom: SIZES.BASE * 6,
  },
  containerDateItem: {
    backgroundColor: COLORS.LIGHTGREY,
    padding: SIZESS.body1 / 1.5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SIZES.BASE * 1,
    marginTop: SIZES.BASE * 2,
    justifyContent: "space-between",
    borderRadius: SIZES.BASE * 4,
  },
  inputContainerHistoryPage: {
    padding: SIZES.PADDING * 0.6,
    marginBottom: SIZES.PADDING * 0.8,
    flexDirection: "row",
    alignItems: "center",
  },
});
