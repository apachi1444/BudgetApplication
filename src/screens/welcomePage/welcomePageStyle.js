import COLORS from "../../consts/color";
import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../../utils/dimensions";

const SIZES = {
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  fontSizeInsideSecondContainer: 25,
};

export const welcomePageStyle = StyleSheet.create({
  container: {},
  imageLogin: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.25,
  },
  organizeMeText: {
    fontSize: 25,
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    marginBottom: 50,
  },
  firstContainer: {
    alignItems: "center",
    height: windowHeight * 0.5,
    paddingTop: 55,
  },
  secondContainer: {
    backgroundColor: COLORS.PRIMARY,
    height: windowHeight * 0.5,
    borderTopLeftRadius: SIZES.borderTopLeftRadius,
    borderTopRightRadius: SIZES.borderTopRightRadius,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textInsideSecondContainer: {
    fontSize: SIZES.fontSizeInsideSecondContainer,
    color: "white",
  },
  buttonInsideSecondContainer: {
    marginTop: 30,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 25,
    padding: 15,
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.25,
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});
