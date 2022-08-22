import { StyleSheet } from "react-native";
import COLORS from "../../../consts/color";
import { SIZES } from "../../../consts/theme";
import { windowHeight, windowWidth } from "../../../utils/dimensions";

export const detailsStyle = StyleSheet.create({
  containerChart: {
    backgroundColor: COLORS.LIGHTGREY,
    borderRadius: SIZES.BASE * 4,
    padding: SIZES.BASE * 4,
    margin: SIZES.BASE * 4,
    marginBottom: SIZES.BASE * 0,
  },
  titleAndIcon: {
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: SIZES.BASE * 3,
  },
  page: {
    backgroundColor: COLORS.LIGHTGREY,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  containerSummary: {
    marginTop: -SIZES.BASE * 4,
  },
  profileImage: {
    borderRadius: SIZES.BASE * 3.6,
    height: windowHeight * 0.06,
    width: windowWidth * 0.12,
  },

  containerButtonSwitch: (color) => {
    return {
      backgroundColor: color,
      padding: SIZES.BASE * 2,
      paddingHorizontal: SIZES.BASE * 4.5,
      borderRadius: SIZES.BASE * 4,
      marginHorizontal: SIZES.BASE,
    };
  },
  textButtonSwitch: {
    fontSize: SIZES.BASE * 2.5,
    fontWeight: "bold",
  },

  iconBriefcase: {
    fontSize: 25,
    color: COLORS.PRIMARY,
    marginRight: "8%",
  },

  historyTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  containerHistoryTitle: {
    flexDirection: "row",
    alignItems: "center",
  },

  containerHistoryTitleAndFilterIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.LIGHTGREY,
    borderRadius: SIZES.BASE * 4,
    padding: SIZES.BASE * 4,
    margin: SIZES.BASE * 4,
    marginBottom: SIZES.BASE * 5,
  },

  containerHistoryDetails: {
    padding: SIZES.BASE * 2,
    paddingHorizontal: SIZES.BASE * 3,
    borderRadius: SIZES.BASE * 4,
    marginHorizontal: SIZES.BASE,
  },

  containerHistoryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: SIZES.BASE * 2,
    backgroundColor: COLORS.BOTTOMBAR,
    padding: SIZES.BASE * 3.5,
    paddingHorizontal: SIZES.BASE,
    borderRadius: SIZES.BASE * 3.5,
  },
  containerHistoryItemWithButtons: {
    marginBottom: SIZES.BASE * 3,
  },

  titleHistoryItem: {
    fontWeight: "bold",
    fontSize: SIZES.BASE * 2.5,
    marginLeft: "12%",
  },

  priceHistoryItem: {
    color: COLORS.RED,
    fontWeight: "bold",
    fontSize: SIZES.BASE * 3,
  },

  dateHistoryItem: {
    fontWeight: "bold",
    fontSize: SIZES.BASE * 2.4,
    fontWeight: "bold",
  },

  iconDateHistoryItem: {
    fontWeight: "bold",
    fontSize: SIZES.BASE * 2.5,
    marginLeft: "4%",
  },

  containerIcon: {
    backgroundColor: COLORS.RED,
    borderRadius: SIZES.BASE * 4,
    padding: SIZES.BASE * 1.2,
    marginHorizontal: windowHeight * 0.005,
  },

  containerEditDeleteButtonHistoryItem: {
    flexDirection: "row",
    position: "absolute",
    bottom: "-8%",
    alignSelf: "center",
    right: "4%",
  },

  containerChoosenDate: {
    marginHorizontal: SIZES.BASE * 4,
    padding: SIZES.BASE * 2,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.LIGHTGREY,
    borderRadius: SIZES.BASE * 3,
  },
  textDateChoosen: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.PRIMARY,
    marginLeft: "2%",
  },
});
