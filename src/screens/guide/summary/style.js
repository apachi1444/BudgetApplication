import { StyleSheet } from "react-native";
import COLORS from "../../../consts/color";
import { SIZES, SIZESS } from "../../../consts/theme";

export const guideStyle = StyleSheet.create({
  page: {
    paddingVertical: "5%",
    paddingHorizontal: "4%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.BASE * 3,
    fontWeight: "400",
    marginRight: "25%",
  },
  profileImage: {
    width: SIZES.BASE * 8,
    height: SIZES.BASE * 8,
    borderRadius: SIZES.BASE * 4,
  },
  topText: {
    marginTop: SIZES.BASE * 6,
    fontSize: SIZES.BASE * 4,
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: SIZES.BASE * 3,
    fontWeight: "400",
    marginLeft: SIZES.BASE * 1.2,
  },
  mainContainer: {
    backgroundColor: COLORS.LIGHTGREY,
    margin: SIZES.BASE * 3,
    padding: SIZES.BASE * 1,
    borderRadius: SIZES.BASE * 5,
    marginBottom: SIZES.BASE * 10,
    // height: windowHeight * 0.5,
  },
  mainContainerTitle: {
    backgroundColor: COLORS.LIGHTGREY,
    margin: SIZES.BASE * 3,
    padding: SIZES.BASE * 1,
    borderRadius: SIZES.BASE * 5,
    // height: windowHeight * 0.5,
  },
  mainContainerEmpty: {
    backgroundColor: COLORS.LIGHTGREY,
    margin: SIZES.BASE * 3,
    padding: SIZES.BASE * 3,
    borderRadius: SIZES.BASE * 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
    // height: windowHeight * 0.5,
  },
  textNoHistory: {
    fontSize: 16,
    fontWeight: "bold",
  },
  summaryText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: SIZES.BASE * 4,
  },
  containerOneExpenseSummary: {
    flexDirection: "row",
    paddingHorizontal: SIZESS.radius,
    paddingVertical: SIZES.BASE,
    borderRadius: 10,
    backgroundColor: COLORS.BOTTOMBAR,
    marginBottom: SIZESS.base * 2,
    borderWidth: 2,
    marginHorizontal: SIZES.BASE * 2,
  },
  containerModal: {
    backgroundColor: COLORS.PRIMARY,
    marginTop: SIZES.BASE * 2,
    padding: SIZES.BASE * 2,
    marginBottom: -SIZES.BASE * 6,
    borderRadius: SIZES.BASE * 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerErrorMessage: {
    backgroundColor: COLORS.RED,
    padding: SIZES.BASE * 4,
    borderRadius: SIZES.BASE * 2,
  },
});
