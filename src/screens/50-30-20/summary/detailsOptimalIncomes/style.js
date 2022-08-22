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
});
