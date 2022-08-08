import { StyleSheet } from "react-native";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import { windowHeight, windowWidth } from "../../utils/dimensions";

export const editProfileStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5%",
    marginBottom: "1%",
    marginTop: "10%",
  },
  title: {
    fontSize: SIZES.BASE * 3,
    fontWeight: "350",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cameraIcon: {
    marginLeft: "-7%",
    marginTop: "5%",
    borderRadius: windowHeight * 0.05,
    borderColor: COLORS.WHITE,
    borderWidth: 3,
    height: windowHeight * 0.035,
  },

  imageProfile: {
    borderRadius: windowHeight * 0.3,
    borderColor: "rgba(255, 255, 0, .9)",
    borderWidth: 2,
    height: windowWidth * 0.3,
    width: windowWidth * 0.3,
    marginBottom: "15%",
  },
  titleInput: {
    paddingBottom: SIZES.BASE * 2,
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.BASE * 4,
    height: SIZES.BASE * 8,
    padding: SIZES.PADDING,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "10%",
    paddingVertical: SIZES.PADDING * 2,
  },
  divider: {
    color: COLORS.BLACK,
    fontSize: SIZES.TITLE,
    marginBottom: SIZES.BASE * 2,
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
    borderWidth: 0,
    borderRadius: SIZES.BASE * 2.5,
  },
  inputContainer: {
    marginBottom: SIZES.PADDING * 1.2,
  },
  inputIcon: {
    left: SIZES.BASE * 2.8,
    position: "absolute",
    top: SIZES.BASE * 3.68,
    zIndex: 1,
  },
  passwordIcon: {
    top: SIZES.BASE * 2.2,
  },
  signin: {
    borderRadius: SIZES.BASE * 2,
    backgroundColor: COLORS.PRIMARY,
    marginVertical: SIZES.BASE * 3,
    marginBottom: SIZES.BASE * 2,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: SIZES.BASE * 0.2,
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
    marginBottom: SIZES.BASE * 1.2,
  },
  containerGoToSignUpPage: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textGoToSignUpPage: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    marginHorizontal: SIZES.BASE * 1,
  },
});
