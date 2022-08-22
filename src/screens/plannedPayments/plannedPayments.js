import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { SIZES, SIZESS } from "../../consts/theme";
import { plannedPaymentsStyle } from "./plannedPaymentsStyle";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import { globalStyles } from "../../global/styles/globalStyles";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteTransaction,
  updateTransaction,
} from "../../redux/features/user/userSpendingsAndIncomesCategories";
import {
  convertDateToMilliseconds,
  renderDifferenceBetweenDatesMilliseconds,
  returnColorMessageAppriopriate,
  returnDaysRemainingYearsRemainingAndNewDaysRemaining,
  returnfilteredNonEmptyCategories,
  returnTimeRemaining,
  returnTotalSpendingWithNonNullPeriod,
} from "./logic";
import { returnYearMonthDay } from "../../global/functions/time";
import { deleteGuide } from "../../redux/features/user/userSpendingsAndIncomesTypeTransaction";
const PlannedPayments = ({ navigation }) => {
  let finalList = useSelector(
    (state) => state.userSpendingsAndIncomesCategories
  );
  const dispatch = useDispatch();
  const filteredNonEmptyCategories =
    returnfilteredNonEmptyCategories(finalList);

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
    const { id, title, spendingElements } = item;

    let totalSpendings = returnTotalSpendingWithNonNullPeriod(
      filteredNonEmptyCategories
    );

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
      let { date, period } = element;

      const periodMilliseconds = convertDateToMilliseconds(period);
      const newDateAfterPeriod = new Date(periodMilliseconds + date.getTime());

      const {
        year: yearNewDateAfterPeriod,
        month: monthNewDateAfterPeriod,
        day: dayNewDateAfterPeriod,
      } = returnYearMonthDay(newDateAfterPeriod);

      let finalStringDate = `${yearNewDateAfterPeriod}-${monthNewDateAfterPeriod}-${dayNewDateAfterPeriod}`;

      const differenceBetweenDatesMilliSeconds =
        renderDifferenceBetweenDatesMilliseconds(newDateAfterPeriod);

      const { yearsRemaining, newDaysRemaining } =
        returnDaysRemainingYearsRemainingAndNewDaysRemaining(
          differenceBetweenDatesMilliSeconds
        );

      let { color, message } = returnColorMessageAppriopriate(
        date,
        newDaysRemaining,
        yearsRemaining
      );

      const renderTitleAndPriceAndPeriodAndButtons = () => {
        const renderPriceAndTitle = () => {
          return (
            <View style={[plannedPaymentsStyle.containerPriceAndTitle]}>
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
                  {element.price}DH ( {element.period} Days )
                </Text>
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
            let finalString = returnTimeRemaining(
              yearsRemaining,
              newDaysRemaining
            );

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
              <View>{renderTimeRemaining()}</View>
              <View>{renderDate()}</View>
            </View>
          );
        };
        const renderDeleteAndEditButtons = () => {
          let { date, key, period, transaction, type } = element;

          const deleteItem = () => {
            dispatch(deleteTransaction(element));
            dispatch(deleteGuide(element));
          };
          const updateItem = () => {
            dispatch(
              updateTransaction({
                id,
                period,
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
          <View style={plannedPaymentsStyle.containerEachLine}>
            {renderPriceAndTitle()}
            {renderDateAndTimeRemaining()}
            {renderDeleteAndEditButtons()}
          </View>
        );
      };

      return (
        <View>
          <View>{renderTitleAndPriceAndPeriodAndButtons()}</View>
        </View>
      );
    };

    const renderContainerDetails = () => {
      return (
        <View style={plannedPaymentsStyle.containerDetails}>
          {spendingElements.map((element, index) => {
            if (element.period != 0) {
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
      <View style={plannedPaymentsStyle.containerEmptyContent}>
        <Ionicons name="sad" size={26} color="white" />
        <Text style={plannedPaymentsStyle.textEmptyContent}>
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
