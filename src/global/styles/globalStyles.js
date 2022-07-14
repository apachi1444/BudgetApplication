import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
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

import COLORS from "../../consts/color";
import { windowHeight, windowWidth } from "../../utils/dimensions";

export const STYLES = StyleSheet.create({
  inputContainer: {
    marginStart: 30,
    marginEnd: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {
    marginTop: 15,
    position: "absolute",
  },
  btnPrimary: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  line: {
    width: 30,
    borderWidth: 1,
    color: COLORS.light,
  },
  btnSecondary: {
    flexDirection: "row",
    height: 50,
    borderWidth: 1,
    borderColor: "#a5a5a5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 50,
    flex: 1,
  },
  btnImage: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});
