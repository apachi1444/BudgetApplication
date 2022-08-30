import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import COLORS from "../../../consts/color";
import { SIZES } from "../../../consts/theme";
import { renderFinalDate, returnNewDate } from "../../../global/functions/time";
import { globalStyles } from "../../../global/styles/globalStyles";
import { historyStyle } from "../historyStyle";
import { allHistoryStyle } from "./allHistoryCategoriesStyle";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../../redux/features/user/userSpendingsAndIncomesCategories";
import { deleteGuide } from "../../../redux/features/user/userSpendingsAndIncomesTypeTransaction";
import { displayDeleteAlert } from "../../../components/alertDelete";
import {
  calculateFinalPriceTransaction,
  concatenateIncomesAndSpendings,
  filterResultsDependingOnCategoryAndDate,
  returnFinalLengthSpecificCategory,
} from "../../../global/functions/store";
const AllHistoryCategories = (props) => {
  const { finalDate, firstDate, singleDate, timeOptionSelected } = props;

  let data = useSelector((state) => state.userSpendingsAndIncomesCategories);
  const dispatch = useDispatch();
  const { finalList } = filterResultsDependingOnCategoryAndDate(
    data,
    timeOptionSelected,
    "All",
    singleDate,
    firstDate,
    finalDate
  );
  const renderOneCategory = (item) => {
    // let arrayIncomesSpendings = finalListSpendings.concat(finalListIncomes);
    let categoryRecordsLength = returnFinalLengthSpecificCategory(item);
    const iconCategory = item.icon;
    let incomesAndSpendings = [];

    const renderRecordLine = (item, repeated) => {
      const finalDate = renderFinalDate(item?.date);
      const nameIconArrow =
        item.transaction == "Spending"
          ? "arrow-down-circle"
          : "arrow-up-circle";

      const color = item.transaction == "Spending" ? COLORS.RED : COLORS.GREEN;
      // const newDate = new Date(date);
      if (repeated) {
        newDate = returnNewDate(date, period);
      }
      const renderArrowAndImageAndTitleAndPriceAndDate = () => {
        const renderImageAndTitle = () => {
          return (
            <View style={historyStyle.containerCheckboxAndImageAndTitle}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: SIZES.BASE * 2.5,
                  marginRight: "4%",
                }}
              >
                {item.title}
              </Text>
            </View>
          );
        };
        const renderPrice = () => {
          return (
            <View>
              <Text
                style={{
                  color: color,
                  fontWeight: "bold",
                  fontSize: SIZES.BASE * 3,
                }}
              >
                {calculateFinalPriceTransaction(item)} DH
              </Text>
            </View>
          );
        };
        const renderDate = () => {
          const renderDate = () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "2%",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    // color: type == "Spending" ? COLORS.RED : COLORS.GREEN,
                    fontWeight: "bold",
                    fontSize: SIZES.BASE * 2.4,
                    fontWeight: "bold",
                  }}
                >
                  {finalDate}
                </Text>
                <Ionicons
                  name="calendar-outline"
                  style={{
                    // color: type == "Spending" ? COLORS.RED : COLORS.GREEN,
                    fontWeight: "bold",
                    fontSize: SIZES.BASE * 2.5,
                    marginLeft: SIZES.BASE,
                  }}
                />
              </View>
            );
          };

          return (
            <View style={historyStyle.containerCalendarAndTimeRemaining}>
              <View>{renderDate()}</View>
            </View>
          );
        };
        const renderEditAndDeleteButton = () => {
          const deleteItem = () => {
            dispatch(deleteTransaction(item));
            dispatch(deleteGuide(item));
          };
          const updateItem = () => {};
          const renderIcon = (name) => {
            return (
              <TouchableOpacity
                style={[
                  allHistoryStyle.containerEditAndDeleteButtons,
                  {
                    backgroundColor: color,
                  },
                ]}
                onPress={
                  name == "trash"
                    ? () => displayDeleteAlert(deleteItem)
                    : updateItem
                }
              >
                <Ionicons
                  name={name}
                  size={SIZES.BASE * 3}
                  color={COLORS.WHITE}
                />
              </TouchableOpacity>
            );
          };
          return (
            <View style={globalStyles.flexRowAndAlignCenter}>
              {renderIcon("trash")}
              {/* {renderIcon("pencil-outline")} */}
            </View>
          );
        };
        return (
          <>
            <View style={allHistoryStyle.containerRecordLine}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Ionicons
                    name={nameIconArrow}
                    color={color}
                    size={SIZES.BASE * 7}
                  />
                </View>
                {renderImageAndTitle()}
                {renderPrice()}
              </View>
              <View
                style={allHistoryStyle.containerDateAndEditAndDeleteButtons}
              >
                {renderDate()}
                {renderEditAndDeleteButton()}
              </View>
            </View>
          </>
        );
      };
      return (
        <View>
          <View>{renderArrowAndImageAndTitleAndPriceAndDate()}</View>
        </View>
      );
    };
    const renderImageAndTitle = () => {
      return (
        <View style={allHistoryStyle.containerImageAndTitle}>
          <Ionicons name={iconCategory} size={30} color="white" />
          <View>
            <View
              style={[
                globalStyles.flexRowAndAlignCenter,
                { marginBottom: SIZES.BASE * 1, justifyContent: "flex-end" },
              ]}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  alignSelf: "flex-end",
                }}
              >
                {item.title}
              </Text>
            </View>
            <Text
              style={{
                alignSelf: "flex-end",
                fontWeight: "400",
                fontSize: SIZES.BASE * 2,
                color: "white",
              }}
            >
              {incomesAndSpendings.length} Records
            </Text>
          </View>
        </View>
      );
    };
    {
      if (categoryRecordsLength != 0) {
        incomesAndSpendings = concatenateIncomesAndSpendings(item);

        return (
          <View style={allHistoryStyle.containerCategory}>
            {renderImageAndTitle()}

            {incomesAndSpendings.map((item) => {
              console.log(item, "hahah this is mine ");
              return renderRecordLine(item);
            })}
          </View>
        );
      } else {
        <View style={allHistoryStyle.noResultText}>
          <Ionicons name="sad" size={25} />
          <Text style={{ marginLeft: "5%" }}>
            There is no data for the moment
          </Text>
        </View>;
      }
    }
  };
  return (
    <ScrollView>
      {finalList.map((item) => {
        return renderOneCategory(item);
      })}
    </ScrollView>
  );
};

export default AllHistoryCategories;
