import { StyleSheet } from "react-native";
import { windowHeight } from "../../utils/dimensions";
import COLORS from "./../../consts/color";
import { SIZESS } from "./../../consts/theme";

export const plannedPaymentsStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: "4%",
    borderWidth: 4,
  },

  containerItem: {
    borderWidth: 2,
    borderColor: "red",
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
    backgroundColor: COLORS.GREEN,
    borderWidth: 3,
    marginTop: SIZESS.base * 2,
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
    margin: "2%",
    borderRadius: SIZESS.body1 / 1.5,
    padding: "3%",
  },

  textDeleteAll: {
    fontSize: 16,
  },

  divider: {
    borderWidth: 3,
    backgroundColor: COLORS.BLACK,
  },

  containerEditAndDeleteButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  containerCheckboxAndImageAndTitle: {
    flexDirection: "row",
    alignItems: "center",
  },

  containerEachLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
