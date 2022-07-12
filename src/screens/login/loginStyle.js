import { StyleSheet } from "react-native";
import React from "react";
export default styles = StyleSheet.create({
  body: {
    paddingHorizantal: 20,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  textView: {
    flexDirection: "row",
    marginTop: 40,
    marginStart: 30,
  },
  logoOne: {
    lineHeight: 30,
    color: COLORS.dark,
    fontSize: 22,
    fontWeight: "bold",
  },
  title: {
    marginTop: 40,
    marginStart: 30,
  },
  welcome: {
    fontSize: 27,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  orline: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 20,
  },
});
