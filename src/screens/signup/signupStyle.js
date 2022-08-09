import { StyleSheet } from "react-native";
import COLORS from "../../consts/color";

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};

export const signUpStyle = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.BASE * 4,
    height: SIZES.BASE * 8,
    padding: SIZES.PADDING,
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: "12%",
    paddingVertical: SIZES.PADDING * 2,
  },
  divider: {
    color: COLORS.BLACK,
    fontSize: SIZES.TITLE,
    textAlign: "center",
  },

  signup: {
    borderRadius: SIZES.BASE * 2,
    backgroundColor: COLORS.PRIMARY,
    marginBottom: SIZES.BASE * 2,
  },

  title: {
    color: COLORS.BLACK,
    fontSize: SIZES.TITLE,
    fontWeight: "600",
    letterSpacing: 1,
  },
  textButtonSignUp: {
    fontWeight: "500",
    letterSpacing: 0.5,
    color: COLORS.WHITE,
    backgroundColor: "transparent",
  },
  containerGoToSignInPage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    // marginTop: "-8%",
  },
  textGoToSignInPage: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    marginHorizontal: SIZES.BASE * 1,
  },
});
