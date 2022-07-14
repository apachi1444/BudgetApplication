import { StyleSheet } from "react-native";
// export default styles = StyleSheet.create({
//   body: {
//     paddingHorizantal: 20,
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   textView: {
//     flexDirection: "row",
//     marginTop: 40,
//     marginStart: 30,
//   },
//   logoOne: {
//     lineHeight: 30,
//     color: COLORS.dark,
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   title: {
//     marginTop: 40,
//     marginStart: 30,
//   },
//   welcome: {
//     fontSize: 27,
//     fontWeight: "bold",
//     color: COLORS.dark,
//   },
//   orline: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 30,
//     marginVertical: 20,
//   },
// });

// export const SIZESS = {
//   BASE: 6,
//   FONT: 12,
//   TITLE: 24,
//   SUBTITLE: 11,
//   LABEL: 12,
//   PADDING: 12,
// };

import React from "react";
export const aa = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: SIZES.BASE * 4,
    height: SIZES.BASE * 8,
    justifyContent: "center",
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
    marginVertical: SIZES.BASE * 2,
    textAlign: "center",
  },
  facebook: {
    backgroundColor: COLORS.FACEBOOK,
  },
  google: {
    backgroundColor: COLORS.GOOGLE,
  },
  input: {
    padding: SIZES.PADDING * 1.5,
    paddingLeft: SIZES.BASE * 7.5,
    fontSize: SIZES.FONT,
    backgroundColor: COLORS.WHITE, // "rgba(255, 255, 255, 0.5)",
    borderRadius: SIZES.BASE * 2,
    borderWidth: 0,
    outlineStyle: "none",
  },
  inputContainer: {
    marginBottom: SIZES.PADDING * 2,
  },
  inputIcon: {
    left: SIZES.BASE * 2.8,
    position: "absolute",
    top: SIZES.BASE * 2.8,
    zIndex: 1,
  },
  passwordIcon: {
    top: SIZES.BASE * 2.2,
  },
  signin: {
    backgroundColor: COLORS.PRIMARY,
    marginVertical: SIZES.BASE * 3,
  },
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
  title: {
    color: COLORS.BLACK,
    fontSize: SIZES.TITLE,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
  },
});
