import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import { categories } from "../../../consts/categories";
import COLORS from "../../../consts/color";
import { SIZES } from "../../../consts/theme";
import { renderFinalDate } from "../../../global/functions/time";
import { globalStyles } from "../../../global/styles/globalStyles";
import { windowHeight, windowWidth } from "../../../utils/dimensions";
import { historyStyle } from "../historyStyle";
import {
  concatenateIncomesAndSpendings,
  concatenateIncomesAndSpendingsOneCategory,
  renderIconCategory,
  renderImageCategory,
} from "../logic";
import { allHistoryStyle } from "./allHistoryCategoriesStyle";

const AllHistoryCategories = (props) => {
  const { list } = props;

  const renderOneCategory = (item) => {
    let arrayIncomesSpendings = concatenateIncomesAndSpendingsOneCategory(item);
    const iconCategory = renderIconCategory(categories, item.title);
    const categoryRecordsLength = arrayIncomesSpendings.length;

    const renderRecordLine = (item) => {
      const finalDate = renderFinalDate(item?.date);
      const nameIconArrow =
        item.transaction == "Spending"
          ? "arrow-down-circle"
          : "arrow-up-circle";
      const color = item.transaction == "Spending" ? COLORS.RED : COLORS.GREEN;
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
                  color: COLORS.RED,
                  fontWeight: "bold",
                  fontSize: SIZES.BASE * 3,
                }}
              >
                {item?.price} DH
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
          const deleteItem = () => {};
          const updateItem = () => {};
          const renderIcon = (name) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.RED,
                  borderRadius: SIZES.BASE * 4,
                  padding: SIZES.BASE * 1.5,
                  marginHorizontal: windowHeight * 0.005,
                }}
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
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                bottom: "-41%",
                alignSelf: "center",
                right: "4%",
              }}
            >
              {renderIcon("trash")}
              {renderIcon("pencil-outline")}
            </View>
          );
        };
        return (
          <View style={allHistoryStyle.containerRecordLine}>
            <View>
              <Ionicons
                name={nameIconArrow}
                color={color}
                size={SIZES.BASE * 7}
              />
            </View>
            {renderImageAndTitle()}
            {renderPrice()}
            {renderDate()}
            {/* {renderEditAndDeleteButton()} */}
          </View>
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
              {categoryRecordsLength} Records
            </Text>
          </View>
        </View>
      );
    };

    return (
      <View style={allHistoryStyle.containerCategory}>
        {renderImageAndTitle()}

        {arrayIncomesSpendings.length == 0 && (
          <View
            style={{
              backgroundColor: COLORS.LIGHTGREY,
              padding: "8%",
              margin: "5%",
              alignSelf: "center",
              borderRadius: SIZES.BASE * 3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="sad" size={25} />
            <Text style={{ marginLeft: "5%" }}>
              There is no data for the moment
            </Text>
          </View>
        )}

        {arrayIncomesSpendings.length > 0 &&
          arrayIncomesSpendings.map((item, index) => {
            return renderRecordLine(item);
          })}
      </View>
    );
  };
  return (
    <ScrollView>
      {list.map((item) => {
        return renderOneCategory(item);
      })}
    </ScrollView>
  );
};

export default AllHistoryCategories;
