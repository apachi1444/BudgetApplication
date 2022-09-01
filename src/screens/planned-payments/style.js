import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../utils/dimensions";
import COLORS from "../../consts/color";
import { SIZES, SIZESS } from "../../consts/theme";
export const plannedPaymentsStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: "4%",
  },

  containerItem: {
    padding: "2%",
  },

  imageAndTitle: {
    borderRadius: SIZESS.body1 / 1.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: windowHeight * 0.08,
  },
  title: {
    fontSize: SIZESS.base * 3,
    fontWeight: "400",
    marginLeft: SIZESS.base * 2,
  },

  containerDetails: {
    marginVertical: SIZESS.base * 1.5,
    borderRadius: SIZESS.body1 / 1.5,
    paddingHorizontal: SIZESS.base / 10,
  },

  priceAndDeleteButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconAndPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 20,
    color: COLORS.PRIMARY,
  },

  deleteButton: {
    backgroundColor: COLORS.GOOGLE,
    borderRadius: SIZESS.body1 / 1.5,
    padding: "3%",
    marginVertical: "3%",
  },

  textDeleteAll: {
    fontSize: 16,
  },

  divider: {
    borderWidth: 0.3,
    fontWeight: "200",
    width: windowWidth * 0.5,
    alignSelf: "center",
    backgroundColor: COLORS.BLACK,
    marginVertical: SIZESS.base / 1.8,
  },

  iconStyle: {
    fontSize: 18,
    marginHorizontal: SIZESS.base / 1.8,
  },

  containerEditAndDeleteButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZESS.base,
  },

  containerPriceAndTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "3%",
  },

  containerEachLine: {
    backgroundColor: COLORS.LIGHTGREY,
    borderRadius: SIZESS.base * 1.9,
    paddingHorizontal: SIZESS.base,
    paddingVertical: "6%",
    marginHorizontal: 0,
    marginVertical: SIZES.BASE * 2.5,
  },

  button: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: SIZES.BASE * 4,
    padding: SIZES.BASE * 0.7,
    marginHorizontal: windowHeight * 0.005,
  },

  containerDeleteAndEditButtons: {
    flexDirection: "row",
    position: "absolute",
    bottom: "-18%",
    alignSelf: "center",
    justifyContent: "center",
  },

  containerTitleImageTotalPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.BASE * 2,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: SIZES.BASE * 4,
    paddingHorizontal: SIZES.BASE * 3.5,
  },

  timeRemaining: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },

  containerRemainingTime: {
    padding: SIZES.BASE * 0.6,
    paddingHorizontal: SIZES.BASE * 1.3,
    borderRadius: SIZES.BASE * 1,
    marginVertical: SIZES.BASE * 0.6,
  },

  containerCalendarAndTimeRemaining: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZESS.base,
    marginTop: "3%",
  },

  containerDetailsEachLine: {
    alignItems: "space-between",
    padding: SIZES.BASE * 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5%",
    marginBottom: "7%",
    marginTop: "10%",
  },
  titleHeader: {
    fontSize: SIZES.BASE * 3,
    fontWeight: "400",
  },
  containerEmptyContent: {
    backgroundColor: COLORS.PRIMARY,
    margin: "5%",
    padding: "5%",
    paddingVertical: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.BASE * 5,
  },
  textEmptyContent: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "5%",
  },
});
