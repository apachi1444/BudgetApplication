import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { SIZES, SIZESS } from "../../consts/theme";
import { plannedPaymentsStyle } from "./plannedPaymentsStyle";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import { globalStyles } from "../../global/styles/globalStyles";

import {
  arrayPlannedPayments,
  warningZoneRemainingDays,
} from "../../consts/plannedPayments";
import { calculateTotalSpendingsAllCategories } from "../../global/functions/store";
const PlannedPayments = ({ navigation }) => {
  const numberPages = [1, 2, 3, 4];

  let listTotalSpendingsCategories =
    calculateTotalSpendingsAllCategories(arrayPlannedPayments);

  const renderHeader = () => {
    return (
      <View style={plannedPaymentsStyle.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-undo-circle-outline" size={42} />
        </TouchableOpacity>
        <Text style={plannedPaymentsStyle.titleHeader}>Planned Payments</Text>
        <TouchableOpacity onPress={() => navigation.open()}>
          <Image
            style={globalStyles.profileImage}
            source={require("../../assets/images/elon_musk.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const { id, title, price, elements } = item;

    const renderTitleAndImageAndPriceHeader = () => (
      <View style={plannedPaymentsStyle.containerTitleImageTotalPrice}>
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
          <Text style={plannedPaymentsStyle.price}>
            {listTotalSpendingsCategories[title]}
          </Text>
        </View>
      </View>
    );

    const renderLineDetailEachItem = (element) => {
      let { datePayment } = element;
      let arrayComponentsDate = datePayment.split("-");
      let day = Number(arrayComponentsDate[0]);
      let month = Number(arrayComponentsDate[1]);
      let year = Number(arrayComponentsDate[2]);
      let differenceBetweenDatesMilliSeconds =
        new Date() - new Date(year, month - 1, day);

      if (differenceBetweenDatesMilliSeconds < 0) {
        differenceBetweenDatesMilliSeconds *= -1;
      }

      let daysRemaining =
        differenceBetweenDatesMilliSeconds / (1000 * 60 * 60 * 24);
      let yearsRemaining = Math.ceil(daysRemaining) / 365;
      yearsRemaining = Math.floor(yearsRemaining);
      let newDaysRemaining = daysRemaining;
      if (yearsRemaining > 1) {
        newDaysRemaining =
          Math.ceil(daysRemaining) - 365 * Math.floor(yearsRemaining);
      }
      let remaining = new Date(year, month, day) - new Date() > 0;
      let color = COLORS.GREEN;
      let message = "Remaining";
      if (!remaining) {
        color = COLORS.RED;
        message = "Passed";
      } else if (remaining && newDaysRemaining < warningZoneRemainingDays) {
        color = COLORS.ORANGE;
      }
      const renderTitleAndPriceAndPeriod = () => {
        const renderImageAndTitle = () => {
          return (
            <View style={[plannedPaymentsStyle.containerAndImageAndTitle]}>
              <View>
                <Text
                  style={{
                    fontSize: SIZESS.body1 / 1.7,
                    fontWeight: "bold",
                  }}
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
                      marginTop: "1.5%",
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
            let stringYear = yearsRemaining == 1 ? "year" : "years";
            let finalString =
              yearsRemaining != 0
                ? `${yearsRemaining} ${stringYear} ${newDaysRemaining.toFixed(
                    0
                  )} days`
                : `${newDaysRemaining.toFixed(0)} days`;
            return (
              <View
                style={[
                  plannedPaymentsStyle.containerRemainingTime,
                  {
                    backgroundColor: color,
                  },
                ]}
              >
                <Text style={[plannedPaymentsStyle.timeRemaining]}>
                  {finalString} {message}
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
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={false}
      />
      {renderHeader()}
      <FlatList data={arrayPlannedPayments} renderItem={renderItem} />
      {renderPagination()}
    </View>
  );
};

export default PlannedPayments;
