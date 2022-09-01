import { StyleSheet } from "react-native";
import COLORS from "../../../consts/color";
import { SIZES } from "../../../consts/theme";

export const styleModal = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: SIZES.BASE,
    color: COLORS.SECONDARY,
  },

  totalIncome: {
    fontWeight: "bold",
    fontSize: 19,
  },
  titleDetail: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.SECONDARY,
  },
  containerOneDetail: {
    backgroundColor: COLORS.PRIMARY,
    padding: SIZES.BASE * 4,
    margin: SIZES.BASE * 3,
    borderRadius: SIZES.BASE * 3,
  },
});
