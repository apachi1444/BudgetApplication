import { StyleSheet } from "react-native";

import React from "react";
import { SIZES } from "../../consts/theme";
import COLORS from "../../consts/color";

export const loginStyle = StyleSheet.create({
  loginImage: {
    width: "97%",
    height: "28%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.BASE * 4,
    height: SIZES.BASE * 8,
    backgroundColor: COLORS.PRIMARY,
  },
  signin: {
    borderRadius: SIZES.BASE * 2,
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
    marginVertical: SIZES.BASE * 0.003,
    textAlign: "center",
  },

  title: {
    color: COLORS.BLACK,
    fontSize: SIZES.TITLE,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: SIZES.BASE * 0.1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  containerGoToSignUpPage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    // marginTop: "-8%",
  },
  textGoToSignUpPage: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    marginHorizontal: SIZES.BASE * 1,
  },
  textLoginButton: {
    fontWeight: "500",
    letterSpacing: 0.5,
    color: COLORS.WHITE,
    backgroundColor: "transparent",
  },
});
