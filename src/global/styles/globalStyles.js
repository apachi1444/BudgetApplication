import COLORS from "../../consts/color";
import { windowWidth } from "../../utils/dimensions";
import { StyleSheet, Platform, StatusBar } from "react-native";

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};
export const globalStyles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
  },

  inputContainer: {
    padding: SIZES.PADDING * 1.5,
    paddingLeft: SIZES.BASE * 2.5,
    fontSize: SIZES.FONT,
    backgroundColor: COLORS.WHITE, // "rgba(255, 255, 255, 0.5)",
    borderRadius: SIZES.BASE * 2.5,
    marginBottom: SIZES.PADDING * 1.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputIcon: { marginRight: windowWidth * 0.04 },

  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: SIZES.BASE * 3,
  },
  socialButton: {
    height: SIZES.BASE * 8,
    marginHorizontal: SIZES.BASE * 2,
    width: SIZES.BASE * 8,
  },

  facebook: {
    backgroundColor: COLORS.FACEBOOK,
  },
  google: {
    backgroundColor: COLORS.GOOGLE,
  },

  titleText: {
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },

  date: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: "#aaa",
  },
  iconDate: { marginHorizontal: 10, fontWeight: "bold" },

  image: {
    backgroundColor: "transparent",
  },

  semiContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconDelete: {
    marginLeft: windowWidth * 0.02,
    color: COLORS.PRIMARY,
  },

  priceText: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: windowWidth * 0.2,
  },
  containerPriceAndTitle: {},

  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 6,
    textAlign: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// export const images = {
//   ratings: {
//     1: require("../assets/images/rating-1.png"),
//     2: require("../assets/images/rating-2.png"),
//     3: require("../assets/images/rating-3.png"),
//     4: require("../assets/images/rating-4.png"),
//     5: require("../assets/images/rating-5.png"),
//   },
// };
