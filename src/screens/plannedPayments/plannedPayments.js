import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { SIZES, SIZESS } from "../../consts/theme";
import { plannedPaymentsStyle } from "./plannedPaymentsStyle";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import CheckBox from "expo-checkbox";
import { globalStyles } from "../../global/styles/globalStyles";

import { arrayPlannedPayments } from "../../consts/plannedPayments";
import { windowHeight } from "../../utils/dimensions";
const PlannedPayments = () => {
  const [isSelected, setSelection] = useState(false);

  const numberPages = [1, 2, 3, 4];

  const renderItem = ({ item }) => {
    console.log(item);
    const { id, title, price, elements } = item;

    const renderTitleAndImageAndPriceHeader = () => {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: SIZES.BASE * 1.5,
            backgroundColor: COLORS.SECONDARY,
            borderRadius: SIZES.BASE * 4,
            paddingHorizontal: SIZES.BASE * 3.5,
          }}
        >
          <View style={plannedPaymentsStyle.imageAndTitle}>
            <Avatar.Image
              source={require("../../assets/images/elon_musk.jpg")}
              size={SIZESS.body1 * 1.2}
            />
            <Text style={plannedPaymentsStyle.title}>{title}</Text>
          </View>
          <View style={plannedPaymentsStyle.iconAndPriceContainer}>
            <Ionicons
              name="cash"
              color={COLORS.PRIMARY}
              size={25}
              style={{ marginRight: SIZES.BASE * 1.5 }}
            />
            <Text style={plannedPaymentsStyle.price}>{price}</Text>
          </View>
        </View>
      );
    };

    const renderLineDetailEachItem = (element) => {
      const renderTitleAndPriceAndPeriod = () => {
        const renderImageAndTitle = () => {
          return (
            <View
              style={plannedPaymentsStyle.containerCheckboxAndImageAndTitle}
            >
              <CheckBox
                disabled={false}
                value={isSelected}
                onValueChange={(newValue) => setSelection(newValue)}
              />
              <Avatar.Image
                source={require("../../assets/images/elon_musk.jpg")}
                size={SIZESS.body1 * 1.4}
                style={{
                  marginHorizontal: 10,
                }}
              />
              <View>
                <Text
                  style={{ fontSize: SIZESS.body1 / 1.7, fontWeight: "bold" }}
                >
                  {element.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    color: COLORS.PRIMARY,
                  }}
                >
                  <Ionicons
                    name="cash"
                    style={{
                      color: COLORS.PRIMARY,
                      fontSize: 20,
                      marginRight: "4%",
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: COLORS.PRIMARY,
                      fontSize: SIZES.BASE * 2.8,
                    }}
                  >
                    {element.price} ( {element.period} )
                  </Text>
                </View>
              </View>
            </View>
          );
        };

        const renderDateAndTimeRemaining = () => {
          const renderDate = () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={globalStyles.primaryColor}>
                  {element.datePayment}
                </Text>
                <Ionicons
                  name="calendar-outline"
                  style={globalStyles.primaryColor}
                />
              </View>
            );
          };

          const renderTimeRemaining = () => {
            console.log(element.datePayment);
            console.log(new Date());
            const calculateTimeRemaining = () => {};
            return (
              <View style={plannedPaymentsStyle.containerRemainingTime}>
                <Text style={plannedPaymentsStyle.timeRemaining}>
                  1 year Remaining
                </Text>
              </View>
            );
          };

          return (
            <View
              style={plannedPaymentsStyle.containerCalendarAndTimeRemaining}
            >
              <View>{renderDate()}</View>
              <View>{renderTimeRemaining()}</View>
            </View>
          );
        };
        return (
          <View style={plannedPaymentsStyle.containerEachLine}>
            {renderImageAndTitle()}
            {renderDateAndTimeRemaining()}
          </View>
        );
      };

      const renderDeleteAndEditButtons = () => {
        const deleteItem = () => {};
        const updateItem = () => {};
        const renderIcon = (name) => {
          return (
            <TouchableOpacity
              style={plannedPaymentsStyle.button}
              onPress={name == "trash" ? deleteItem : updateItem}
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
          <View style={plannedPaymentsStyle.containerDeleteAndEditButtons}>
            {renderIcon("trash")}
            {renderIcon("pencil-outline")}
          </View>
        );
      };

      return (
        <View>
          <View>{renderTitleAndPriceAndPeriod()}</View>
          <View>{renderDeleteAndEditButtons()}</View>
        </View>
      );
    };

    const renderContainerDetails = () => {
      return (
        <View style={plannedPaymentsStyle.containerDetails}>
          {elements.map((element, index) => {
            return <View>{renderLineDetailEachItem(element)}</View>;
          })}
        </View>
      );
    };

    return (
      <View style={plannedPaymentsStyle.containerItem}>
        {renderTitleAndImageAndPriceHeader()}
        {renderContainerDetails()}
      </View>
    );
  };

  const renderPagination = () => {
    return (
      <View>
        {numberPages.map((page) => {
          <View>{page}</View>;
        })}
      </View>
    );
  };
  return (
    <View style={plannedPaymentsStyle.container}>
      <FlatList data={arrayPlannedPayments} renderItem={renderItem} />
      {renderPagination()}
    </View>
  );
};

export default PlannedPayments;
