import { StyleSheet } from "react-native";
import COLORS from "../../../consts/color";
import { FONTS, SIZES, SIZESS } from "../../../consts/theme";
import { windowWidth } from "../../../utils/dimensions";

export const chartCategoriesStyle = StyleSheet.create({
  container: {
    margin: "5%",
    padding: "4%",
    backgroundColor: COLORS.LIGHTGREY,
    borderWidth: 3,
    borderColor: COLORS.GREY,
    borderRadius: SIZES.BASE * 3,
  },
  containerIncomesAndSpendingsTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTitle: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: SIZES.BASE * 3,
    padding: SIZES.BASE * 2,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.BASE * 2,
  },
  title: {
    fontSize: SIZES.BASE * 2.7,
    fontWeight: "bold",
  },
  chartImageContainer: {
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "row",
  },
  switchButtonContainer: {},
  detailsEachChart: {},
  shadow: {
    shadowColor: "#aaa",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },

  containerButtonSwitch: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "80%",
    borderWidth: 4,
  },
  circleInsideContainerButtonSwitch: {
    borderWidth: 3,
    borderColor: COLORS.PRIMARY,
  },
  iconInsideCircleInsideContainerButtonSwitch: {
    fontSize: 30,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5%",
    marginBottom: "1%",
    marginTop: "10%",
  },
  title: {
    fontSize: SIZES.BASE * 3,
    fontWeight: "300",
  },

  containerNumberCategoriesChart: {
    position: "absolute",
    top: "42%",
    left: "39%",
    alignSelf: "center",
  },

  numberCategoriesChart: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },

  titleCategories: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
  },

  // this must be preced with the key labels
  labelChart: {
    fill: "black",
    ...FONTS.body3,
    fontWeight: "bold",
    fontSize: SIZESS.body1 / 1.6,
  },

  containerOneLineSummaryChart: {
    flexDirection: "row",
    paddingHorizontal: SIZESS.radius / 2,
    paddingVertical: SIZES.BASE,
    borderRadius: 10,
    backgroundColor: COLORS.BOTTOMBAR,
    marginBottom: SIZESS.base * 2,
  },

  littleRectangleCategoryColor: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },

  titleCategorySummaryLine: {
    marginLeft: SIZESS.base,
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: SIZESS.base * 2,
  },

  textPriceAndPercentageSummaryLine: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: SIZESS.base * 2,
  },
});
