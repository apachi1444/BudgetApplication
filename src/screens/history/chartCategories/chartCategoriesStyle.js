import { StyleSheet } from "react-native";
import COLORS from "../../../consts/color";
import { SIZES } from "../../../consts/theme";
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
    right: "45%",
    width: windowWidth * 0.5,
    borderWidth: 4,
    position: "absolute",
  },
  circleInsideContainerButtonSwitch: {},
  iconInsideCircleInsideContainerButtonSwitch: {
    fontSize: 30,
  },
});
