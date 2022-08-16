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
import COLORS from "../../../consts/color";
import { SIZES } from "../../../consts/theme";
import { globalStyles } from "../../../global/styles/globalStyles";
import { windowHeight, windowWidth } from "../../../utils/dimensions";
import { historyStyle } from "../historyStyle";
import { allHistoryStyle } from "./allHistoryCategoriesStyle";

const AllHistoryCategories = (props) => {
  const { list } = props;
  const renderOneCategory = (item) => {
    let aa = [1, 2, 3];
    const renderRecordLine = () => {
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
                haha
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
                {item.total} DH
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
                  12/05/2023
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: SIZES.BASE * 2,
              backgroundColor: COLORS.WHITE,
              padding: SIZES.BASE * 2.5,
              paddingVertical: SIZES.BASE * 1.8,
              borderRadius: SIZES.BASE * 3.5,
            }}
          >
            <View>
              <Ionicons
                name={"arrow-up-circle"}
                color={COLORS.RED}
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
          <Avatar.Image
            source={require("../../../assets/images/elon_musk.jpg")}
            size={40}
          />
          <View>
            <View
              style={[
                globalStyles.flexRowAndAlignCenter,
                { marginBottom: SIZES.BASE * 1 },
              ]}
            >
              <Ionicons
                name="add-circle"
                size={20}
                style={{ marginRight: "2%" }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                qdsklfjqskldfj
              </Text>
            </View>
            <Text
              style={{
                alignSelf: "flex-end",
                fontWeight: "400",
                fontSize: SIZES.BASE * 2,
              }}
            >
              15 Records
            </Text>
          </View>
        </View>
      );
    };
    return (
      <View style={allHistoryStyle.containerCategory}>
        {renderImageAndTitle()}
        {list.map((item, index) => {
          return renderRecordLine(item);
        })}
        {renderRecordLine()}
      </View>
    );
  };
  return (
    <ScrollView>
      {list.map((item, index) => {
        return renderOneCategory(item);
      })}
    </ScrollView>
  );
};

export default AllHistoryCategories;
