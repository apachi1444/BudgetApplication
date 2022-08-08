import { StyleSheet } from "react-native";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";

export const addStyle = StyleSheet.create({
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
});
