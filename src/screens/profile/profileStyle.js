import COLORS from "../../consts/color";
import { windowWidth, windowHeight } from "../../utils/dimensions";
import { StyleSheet } from "react-native";
import { Caption } from "react-native-paper";
const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};

export const profileStyles = StyleSheet.create({
  logoutIcon: {
    color: COLORS.PRIMARY,
  },
  menuIcon: {
    color: COLORS.PRIMARY,
  },
  container: {
    paddingVertical: "3%",
  },
  containerInformationsUser: {
    alignItems: "center",
  },
  imageProfile: {
    borderRadius: windowHeight * 0.35,
    borderColor: "rgba(255, 255, 0, .9)",
    borderWidth: 2,
    height: windowWidth * 0.35,
    width: windowWidth * 0.35,
  },
  nameUser: {
    fontWeight: "800",
    fontSize: 25,
  },
  cityUser: {
    fontWeight: "700",
    fontSize: 20,
    marginVertical: SIZES.BASE * 2.5,
  },
  incomesAndSpendings: {
    backgroundColor: COLORS.THIRD,
    height: windowHeight * 0.13,
    width: windowWidth * 0.8,
    borderRadius: SIZES.BASE * 4,
    padding: SIZES.BASE * 2,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  specificContainerInsideIncomesAndSpendingsContainer: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 4,
    height: "100%",
    padding: SIZES.BASE * 2,
    borderRadius: SIZES.BASE * 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textsInsideSpecificContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textPriceOfSpecificContainer: { marginTop: SIZES.BASE * 1 },
  caption: {
    marginTop: 1,
    fontSize: 21,
    color: COLORS.PRIMARY,
    fontWeight: "bold",
  },
  divider: {
    marginVertical: SIZES.BASE * 3.5,
    width: windowWidth * 0.8,
    backgroundColor: COLORS.BLACK,
    height: windowHeight * 0.0006,
  },
  profileDetailLine: {
    marginVertical: SIZES.BASE * 1.5,
    flexDirection: "row",
    width: windowWidth * 0.6,
    justifyContent: "space-between",
  },
  textInsideProfileDetailLine: {
    fontSize: SIZES.BASE * 2.8,
    fontWeight: "bold",
  },
  dividerOfProfileDetailsLines: {
    marginTop: SIZES.BASE * 1,
    width: windowWidth * 0.6,
    backgroundColor: COLORS.RED,
    opacity: 0.5,
    height: windowHeight * 0.001,
  },
  boxContainerIncomesAndSpendings: {
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: COLORS.BLACK,
    flexDirection: "row",
    marginBottom: SIZES.BASE * 2,
  },
  simpleBox: {
    borderRightColor: COLORS.BLACK,
    borderRightWidth: 1,
    backgroundColor: COLORS.TOTALINCOMES,
    flexDirection: "row",
    width: "50%",
    // height: windowHeight * 0.12,
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
  },

  containerImageBudget: {
    marginTop: SIZES.BASE * 3,
    width: windowWidth * 0.35,
    height: windowHeight * 0.18,
    borderRadius: 300,
    borderColor: COLORS.PRIMARY,
    borderWidth: 2,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  arrowIcon: {
    size: 50,
  },

  imageBudget: {
    width: "100%",
    height: "100%",
    opacity: 0.12,
  },
  viewTextInside: {
    position: "absolute",
  },
  textInside: {
    fontWeight: "bold",
    fontSize: 25,
    color: COLORS.PRIMARY,
  },
  viewMyBudgetTitle: {
    flexDirection: "row",
    justifyContent: "center",
    color: COLORS.PRIMARY,
    marginBottom: SIZES.BASE * 2,
  },
  myBudgetTitle: {
    fontSize: 24,
    color: COLORS.PRIMARY,
  },
});
