import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { SIZES, SIZESS } from "../../consts/theme";
import { plannedPaymentsStyle } from "./style";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import { globalStyles } from "../../global/styles/globalStyles";

import { useSelector, useDispatch } from "react-redux";
import {
  deletePlannedTransactionCategories,
  updateTransaction,
} from "../../redux/features/user/userSpendingsAndIncomesCategories";
import {
  renderDifferenceBetweenDatesMilliseconds,
  returnColorMessageAppriopriate,
  returnDaysRemainingYearsRemainingAndNewDaysRemaining,
  returnFilteredData,
  returnFinalNewDateAfterPeriodAndFinalString,
  returnTimeRemaining,
  returnTotalSpendingWithNonNullPeriod,
  returnTotalSpendingWithNonNullPeriodTotal,
} from "./logic";
import {
  deletePlannedTransactionTypeTransactions,
  updateTypeTransaction,
} from "../../redux/features/user/userSpendingsAndIncomesTypeTransaction";
import { displayDeleteAlert } from "../../components/alertDelete";
import StatusBarCustomized from "../../components/statusBar";
import DetailsPlanned from "./detail";
import { displayUpdatePlanned } from "../../components/alertUpdatePlanned";
const PlannedPayments = ({ navigation }) => {
  let list = useSelector((state) => state.userSpendingsAndIncomesCategories);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const dispatch = useDispatch();

  const filteredListNonEmptyCategories = returnFilteredData(list);
  // const filteredNonEmptyCategories = returnfilteredNonEmptyCategories(list);

  const renderHeader = () => {
    return (
      <View style={plannedPaymentsStyle.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-undo-circle-outline" size={42} />
        </TouchableOpacity>
        <Text style={plannedPaymentsStyle.titleHeader}>Planned Payments</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={globalStyles.profileImage}
            source={require("../../assets/images/elon_musk.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const { id, title, plannedSpendingsElements } = item;

    let totalSpendings = returnTotalSpendingWithNonNullPeriod(
      plannedSpendingsElements
    );

    let totalSpendingsHeader = returnTotalSpendingWithNonNullPeriodTotal(
      plannedSpendingsElements
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
          <Text style={plannedPaymentsStyle.price}>
            {totalSpendingsHeader} {"(Payed)"}
          </Text>
        </View>
      </View>
    );

    const renderLineDetailEachItem = ({ item: element }) => {
      let { date, period, numberTimesPaid, title, price, key } = element;

      const { newDateAfterPeriod, finalStringDate } =
        returnFinalNewDateAfterPeriodAndFinalString(
          period,
          numberTimesPaid,
          date
        );

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
                {title}
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
                  {price}DH ( {period} Days )
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
          const deleteItem = () => {
            dispatch(deletePlannedTransactionTypeTransactions(element));
            dispatch(deletePlannedTransactionCategories(element));
          };
          const updateItem = () => {
            dispatch(
              updateTransaction({
                ...element,
              })
            );
            dispatch(
              updateTypeTransaction({
                ...element,
              })
            );
          };

          const renderIcon = (name, cb = null, secondary = null) => {
            const onPress = () => {
              if (name == "information-circle") {
                handleModal();
              } else {
                secondary(cb);
              }
            };
            return (
              <TouchableOpacity
                style={plannedPaymentsStyle.button}
                onPress={onPress}
              >
                <Ionicons
                  name={name}
                  size={SIZES.BASE * 3}
                  color={COLORS.WHITE}
                />
                {name == "information-circle" && (
                  <DetailsPlanned
                    isModalVisible={isModalVisible}
                    handleModal={handleModal}
                    element={element}
                  />
                )}
              </TouchableOpacity>
            );
          };
          return (
            <View style={plannedPaymentsStyle.containerDeleteAndEditButtons}>
              {renderIcon("trash", deleteItem, displayDeleteAlert)}
              {renderIcon(
                "checkmark-done-circle",
                updateItem,
                displayUpdatePlanned
              )}
              {renderIcon("information-circle")}
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
          <FlatList
            data={plannedSpendingsElements}
            renderItem={renderLineDetailEachItem}
          />
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
      <StatusBarCustomized />
      {renderHeader()}

      {filteredListNonEmptyCategories.length == 0 && renderEmptyContent()}
      <FlatList data={filteredListNonEmptyCategories} renderItem={renderItem} />
    </View>
  );
};

export default PlannedPayments;
