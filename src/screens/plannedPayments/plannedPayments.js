import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { SIZES, SIZESS } from "../../consts/theme";
import { plannedPaymentsStyle } from "./plannedPaymentsStyle";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import { globalStyles } from "../../global/styles/globalStyles";

import { warningZoneRemainingDays } from "../../consts/plannedPayments";
import { total } from "../../global/functions/store";
import { useSelector, useDispatch } from "react-redux";
import {
  deletePlan,
  updatePlan,
} from "../../redux/features/spendings/plannedPayments";
const PlannedPayments = ({ navigation }) => {
  const finalList = useSelector((state) => state.userPlannedSpending);
  const dispatch = useDispatch();
  const filteredNonEmptyCategories = finalList.filter((item) => {
    return item.elements.length != 0;
  });

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
    const { id, title, elements } = item;

    let totalSpendings = total(elements);

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
          <Text style={plannedPaymentsStyle.price}>{totalSpendings}</Text>
        </View>
      </View>
    );

    const renderLineDetailEachItem = (element) => {
      let { date, key, period, price } = element;
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      let finalStringDate = `${year}-${month}-${day}`;

      let differenceBetweenDatesMilliSeconds = new Date() - date;
      if (differenceBetweenDatesMilliSeconds < 0) {
        differenceBetweenDatesMilliSeconds *= -1;
      }

      let daysRemaining =
        differenceBetweenDatesMilliSeconds / (1000 * 60 * 60 * 24);

      let yearsRemaining = Math.ceil(daysRemaining) / 365;
      yearsRemaining = Math.floor(yearsRemaining);
      let newDaysRemaining = daysRemaining;
      if (yearsRemaining >= 1) {
        newDaysRemaining =
          Math.ceil(daysRemaining) - 365 * Math.floor(yearsRemaining);
      }

      let remaining = date - new Date() > 0;
      let color = COLORS.GREEN;
      let message = "Remaining";
      if (!remaining) {
        color = COLORS.RED;
        message = "Passed";
      } else if (
        remaining &&
        newDaysRemaining < warningZoneRemainingDays &&
        yearsRemaining == 0
      ) {
        color = COLORS.ORANGE;
      }
      const renderTitleAndPriceAndPeriod = () => {
        let { date, key, period } = element;
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
                    {element.price}DH ( {element.duration} Days )
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
                <Text style={globalStyles.primaryColor}>{finalStringDate}</Text>
                <Ionicons
                  name="calendar-outline"
                  style={globalStyles.primaryColor}
                />
              </View>
            );
          };

          const renderTimeRemaining = () => {
            let stringYear = yearsRemaining == 1 ? "year" : "years";
            let finalString = "";
            if (yearsRemaining != 0 && newDaysRemaining == 0) {
              finalString = `${yearsRemaining} ${stringYear}`;
            } else if (yearsRemaining != 0 && newDaysRemaining != 0) {
              finalString = `${yearsRemaining} ${stringYear} ${newDaysRemaining.toFixed(
                0
              )} days`;
            } else {
              finalString = `${newDaysRemaining.toFixed(0)} days`;
            }

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
        let { date, key, duration } = element;
        const deleteItem = () => {
          dispatch(
            deletePlan({
              id,
              duration,
              key,
              date,
            })
          );
        };
        const updateItem = () => {
          dispatch(
            updatePlan({
              id,
              duration,
              key,
              date,
            })
          );
        };
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
            {renderIcon("checkmark-done-circle")}
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
            if (element.duration != 0) {
              return renderLineDetailEachItem(element);
            } else {
              return null;
            }
          })}
        </View>
      );
    };
    return totalSpendings == 0 ? null : (
      <View style={plannedPaymentsStyle.containerItem}>
        {renderTitleAndImageAndPriceHeader()}
        {renderContainerDetails()}
      </View>
    );
  };

  const renderEmptyContent = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.PRIMARY,
          margin: "5%",
          padding: "5%",
          paddingVertical: "15%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.BASE * 5,
        }}
      >
        <Ionicons name="sad" size={26} color="white" />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: "5%",
          }}
        >
          No Planned Payments
        </Text>
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
      {filteredNonEmptyCategories.length == 0 && renderEmptyContent()}
      <FlatList data={filteredNonEmptyCategories} renderItem={renderItem} />
    </View>
  );
};

export default PlannedPayments;
