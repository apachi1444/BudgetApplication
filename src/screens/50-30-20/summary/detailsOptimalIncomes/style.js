import { StyleSheet } from "react-native";
import COLORS from "../../../../consts/color";
import { SIZES } from "../../../../consts/theme";

export const styleModal = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: SIZES.BASE,
    color: COLORS.SECONDARY,
  },
  titleCategory: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 20,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
  totalIncome: {
    fontWeight: "bold",
    fontSize: 25,
  },
  containerOneDetail: {
    backgroundColor: COLORS.PRIMARY,
    padding: SIZES.BASE * 4,
    margin: SIZES.BASE * 3,
    borderRadius: SIZES.BASE * 3,
  },
});
