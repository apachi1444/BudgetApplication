import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../utils/dimensions";
import COLORS from "./../../consts/color";
import { SIZESS } from "./../../consts/theme";
export const plannedPaymentsStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: "4%",
  },

  containerItem: {
    padding: "2%",
  },

  imageAndTitle: {
    borderRadius: SIZESS.body1 / 1.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.GREY,
    height: windowHeight * 0.08,
  },
  title: {
    fontSize: SIZESS.base * 3,
    fontWeight: "400",
    marginLeft: SIZESS.base * 2,
  },

  containerDetails: {
    backgroundColor: COLORS.LIGHTGREY,
    marginVertical: SIZESS.base * 1.5,
    borderRadius: SIZESS.body1 / 1.5,
    paddingHorizontal: SIZESS.base,
  },

  priceAndDeleteButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconAndPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 20,
    color: COLORS.PRIMARY,
  },

  deleteButton: {
    backgroundColor: COLORS.GOOGLE,
    borderRadius: SIZESS.body1 / 1.5,
    padding: "3%",
    marginVertical: "3%",
  },

  textDeleteAll: {
    fontSize: 16,
  },

  divider: {
    borderWidth: 0.3,
    fontWeight: "200",
    width: windowWidth * 0.5,
    alignSelf: "center",
    backgroundColor: COLORS.BLACK,
    marginVertical: SIZESS.base / 1.8,
  },

  iconStyle: {
    fontSize: 18,
    marginHorizontal: SIZESS.base / 1.8,
  },

  containerEditAndDeleteButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZESS.base,
  },

  containerCheckboxAndImageAndTitle: {
    flexDirection: "row",
    alignItems: "center",
  },

  containerEachLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZESS.base / 2,
  },

  timeRemaining: {
    fontSize: 10,
    fontWeight: "bold",
    color: "red",
  },

  containerCalendarAndTimeRemaining: {
    alignItems: "flex-end",
  },

  containerDetailsEachLine: {
    alignItems: "space-between",
  },
});
