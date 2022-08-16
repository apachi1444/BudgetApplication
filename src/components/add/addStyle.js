import { StyleSheet } from "react-native";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import { windowWidth } from "../../utils/dimensions";

export const addStyle = StyleSheet.create({
  containerCloseButton: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "6%",
    marginTop: "-4%",
    borderRadius: SIZES.BASE * 10,
    alignSelf: "center",
    alignItems: "center",
  },
  iconClose: {
    fontWeight: "bold",
    fontSize: SIZES.BASE * 10,
  },
  container: {
    backgroundColor: COLORS.LIGHTGREY,
    borderTopLeftRadius: SIZES.BASE * 5,
    borderTopRightRadius: SIZES.BASE * 5,
    padding: SIZES.BASE * 4,
    flex: 1,
  },
  containerButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerButton: {
    backgroundColor: COLORS.WHITE,
    padding: SIZES.BASE * 2,
    borderRadius: SIZES.BASE * 3,
    flex: 1,
    alignItems: "center",
    marginHorizontal: SIZES.BASE * 1.5,
    flexDirection: "row",
    justifyContent: "center",
  },
  textButton: {
    fontSize: SIZES.BASE * 3,
    color: COLORS.PRIMARY,
  },
  containerBudget: {
    padding: SIZES.BASE * 2,
  },
  containerBudgetText: {
    marginTop: SIZES.BASE * 2,
    backgroundColor: COLORS.WHITE,
    padding: SIZES.BASE * 1,
    borderRadius: SIZES.BASE * 4,
    flexDirection: "row",
    alignItems: "center",
  },
  iconCashCurrentBudget: {
    color: COLORS.RED,
    fontSize: SIZES.BASE * 7,
    padding: SIZES.BASE * 0.5,
  },
  currentBudgetNumber: {
    alignSelf: "center",
    marginLeft: "32%",
    fontWeight: "bold",
    fontSize: SIZES.BASE * 3,
  },

  containerInput: {
    padding: SIZES.BASE * 2,
    paddingVertical: SIZES.BASE * 0.5,
  },
  title: {
    fontSize: SIZES.BASE * 3.5,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subTitle: {
    fontSize: SIZES.BASE * 2.2,
    fontWeight: "300",
    textTransform: "uppercase",
    marginBottom: SIZES.BASE * 2,
  },

  input: {
    padding: SIZES.BASE * 2,
    margin: SIZES.BASE * 1,
  },
  inputCategorie: {
    padding: SIZES.BASE * 3,
    paddingHorizontal: SIZES.BASE * 2,
    margin: SIZES.BASE * 1,
    marginRight: SIZES.BASE * 2,
    marginLeft: 0,
    flex: 1,
    borderRadius: SIZES.BASE * 3.5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  iconCategory: {
    marginRight: SIZES.BASE * 2,
  },

  containerCategories: {
    flexDirection: "row",
  },

  textCategory: {
    fontSize: SIZES.BASE * 3,
    fontWeight: "bold",
    color: COLORS.PRIMARY,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.BASE * 4,
    height: SIZES.BASE * 8,
    backgroundColor: COLORS.PRIMARY,
    marginBottom: SIZES.BASE * 4,
  },
  done: {
    borderRadius: SIZES.BASE * 2,
  },
  textLoginButton: {
    fontWeight: "500",
    letterSpacing: 0.5,
    color: COLORS.WHITE,
    backgroundColor: "transparent",
  },
});
