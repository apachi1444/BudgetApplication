import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { VictoryPie } from "victory-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { globalStyles } from "../../../global/styles/globalStyles";
import { SIZES, SIZESS } from "../../../consts/theme";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { detailsStyle } from "./detailsStyle";
import COLORS from "../../../consts/color";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import {
  concatenateIncomesAndSpendingsOneTypeTransactionAndTotalSpendingAndTotalIncomes,
  renderAppropriateOptimalIncomes,
  renderAppropriateSpendings,
  renderCurrentBudget,
  returnFinalChartData,
  returnPercentageUsedAndRemaining,
  returnListIncomes,
  returnListSpendings,
  returnListSpendingsAndTotalSpendings,
  returnFinalStringDate,
} from "../logic";
import { renderFinalDate } from "../../../global/functions/time";
import { deleteGuide } from "../../../redux/features/user/userSpendingsAndIncomesTypeTransaction";
import { deleteTransaction } from "../../../redux/features/user/userSpendingsAndIncomesCategories";
import {
  calculateAllIncomes,
  calculateFinalPriceTransaction,
  returnNewFormDisplayPrice,
} from "../../../global/functions/store";
import { displayDeleteAlert } from "../../../components/alertDelete";
import StatusBarCustomized from "../../../components/statusBar";

const Details = ({ navigation, route }) => {
  let { item } = route.params;
  const dispatch = useDispatch();
  let data = useSelector((state) => {
    return state.userSpendingsAndIncomes;
  });

  let { name } = item;

  let final = data.filter((item) => {
    return item.type == name;
  });

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(true);
  const totalIncomes = calculateAllIncomes(data);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  let { finalArrayContainingSpendings, totalSpendings } =
    returnListSpendingsAndTotalSpendings(final[0], new Date(date));

  let { finalArrayContainingIncomes, totalIncomesDaySelected } =
    returnListIncomes(data, new Date(date));
  let finalArrayContainingSpendingsAndIncomes =
    finalArrayContainingSpendings.concat(finalArrayContainingIncomes);
  console.log("this iqsdfklsjdqlfk", finalArrayContainingSpendingsAndIncomes);
  let currentBudget = renderCurrentBudget(
    totalSpendings,
    totalIncomesDaySelected
  );

  let finalStringDate = returnFinalStringDate(date);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const renderHeader = () => {
    return (
      <View style={detailsStyle.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-undo-circle-outline" size={42} />
        </TouchableOpacity>
        <Text style={detailsStyle.title}>{item.name}</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={detailsStyle.profileImage}
            source={require("../../../assets/images/elon_musk.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderRectangleDetailsChart = () => {
    let y = renderAppropriateSpendings(item.name, data);
    let totalOptimal = renderAppropriateOptimalIncomes(item.type, totalIncomes);
    const renderOptimalIncome = () => {
      return (
        <View
          style={{
            backgroundColor: COLORS.PRIMARY,
            marginBottom: -SIZES.BASE * 6,
            marginTop: SIZES.BASE * 3,
            alignItems: "center",
            padding: SIZES.BASE * 2,
            borderRadius: SIZES.BASE * 3,
          }}
        >
          <Text style={[detailsStyle.title, { color: "white" }]}>
            Optimal {item.name} Income :
            {returnNewFormDisplayPrice(totalOptimal)} DH
          </Text>
        </View>
      );
    };

    const renderTitleAndIcon = () => {
      return (
        <>
          <View style={detailsStyle.titleAndIcon}>
            <View
              style={globalStyles.flexRowAndAlignCenter}
              onStartShouldSetResponder={() => renderDetailsOptimalIncomes()}
            >
              <Entypo name="dots-three-vertical" size={26} />
              <Text style={detailsStyle.title}>Details</Text>
            </View>
          </View>
        </>
      );
    };

    const dataProcess = () => {
      let { percentageRemaining, percentageUsed } =
        returnPercentageUsedAndRemaining(y, totalOptimal);

      const data = returnFinalChartData(
        y,
        totalOptimal,
        percentageUsed,
        percentageRemaining
      );
      return data;
    };

    const chart = () => {
      let data = dataProcess();
      let colorScales = data.map((item) => item.color);
      return (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <VictoryPie
            data={data}
            innerRadius={60}
            radius={SIZES.BASE * 25}
            labelRadius={20000}
            colorScale={colorScales}
          />
        </View>
      );
    };
    const renderGuideExpensesSummary = () => {
      let data = dataProcess();
      const renderItem = ({ item }) => {
        return (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 40,
              paddingHorizontal: SIZESS.radius,
              borderRadius: 10,
              backgroundColor: COLORS.BOTTOMBAR,
              marginBottom: SIZESS.base * 2,
            }}
          >
            {/* Name/Category */}
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: item.color,
                  borderRadius: 5,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZESS.base,
                  color: COLORS.PRIMARY,
                  fontWeight: "bold",
                  fontSize: SIZESS.base * 2,
                }}
              >
                {item.name}
              </Text>
            </View>

            {/* Expenses */}
            <View style={globalStyles.containerOneContainerSummary}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: SIZESS.base * 1.85,
                }}
              >
                {returnNewFormDisplayPrice(item.total)} DH - {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      };

      return (
        <View style={detailsStyle.containerSummary}>
          <FlatList
            data={data}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={true}
            // numColumns={2}
          />
        </View>
      );
    };
    return (
      <View style={detailsStyle.containerChart}>
        {renderTitleAndIcon()}
        {renderOptimalIncome()}
        {chart()}
        {renderGuideExpensesSummary()}
      </View>
    );
  };

  const renderRectangleDetailsList = () => {
    const renderHistoryItem = ({ item }) => {
      const { title, price, date, transaction } = item;
      const renderTitleAndPriceAndDate = () => {
        const renderImageAndTitle = () => {
          return (
            <View style={globalStyles.flexRowAndAlignCenter}>
              {/* <Ionicons
                name={
                  transaction == "Income"
                    ? "arrow-up-circle"
                    : "arrow-down-circle"
                }
                color={transaction == "Spending" ? COLORS.RED : COLORS.GREEN}
                size={SIZES.BASE * 7}
              /> */}
              <Text style={detailsStyle.titleHistoryItem}>{title}</Text>
            </View>
          );
        };
        const renderPrice = () => {
          const finalSign = transaction == "Income" ? "+" : "-";
          return (
            <View>
              <Text
                style={[
                  detailsStyle.priceHistoryItem,
                  {
                    color: transaction == "Income" ? COLORS.GREEN : COLORS.RED,
                  },
                ]}
              >
                {" "}
                {finalSign}
                {calculateFinalPriceTransaction(item)} DH
              </Text>
            </View>
          );
        };
        const renderDate = () => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "2%",
              }}
            >
              <Text style={detailsStyle.dateHistoryItem}>
                {renderFinalDate(new Date(date))}
              </Text>
              <Ionicons
                name="calendar-outline"
                style={detailsStyle.iconDateHistoryItem}
              />
            </View>
          );
        };
        const renderEditAndDeleteButton = () => {
          const deleteItem = () => {
            dispatch(deleteGuide(item));
            dispatch(deleteTransaction(item));
          };
          const updateItem = () => {};
          const renderIcon = (name) => {
            return (
              <TouchableOpacity
                style={[
                  detailsStyle.containerIcon,
                  {
                    backgroundColor:
                      transaction == "Income" ? COLORS.GREEN : COLORS.RED,
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
            <View style={detailsStyle.containerEditDeleteButtonHistoryItem}>
              {renderIcon("trash")}
              {/* {renderIcon("pencil-outline")} */}
            </View>
          );
        };
        return (
          <View style={detailsStyle.containerHistoryItemWithButtons}>
            <View style={detailsStyle.containerHistoryItem}>
              {renderImageAndTitle()}
              {renderPrice()}
              {renderDate()}
            </View>
            {renderEditAndDeleteButton()}
          </View>
        );
      };
      return (
        <View>
          <View>{renderTitleAndPriceAndDate()}</View>
        </View>
      );
    };
    const renderTitleHistoryAndFilter = () => {
      return (
        <>
          <View style={detailsStyle.containerHistoryTitleAndFilterIcon}>
            <View style={detailsStyle.containerHistoryTitle}>
              <Ionicons name="briefcase" style={detailsStyle.iconBriefcase} />
              <Text style={detailsStyle.historyTitle}>History</Text>
            </View>
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Ionicons
                name={
                  show == false
                    ? "arrow-down-circle-outline"
                    : "arrow-up-circle-outline"
                }
                size={30}
                color={COLORS.PRIMARY}
              />
            </TouchableOpacity>
          </View>
          {show && (
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={detailsStyle.containerChoosenDate}>
                <Ionicons name="calculator" size={25} color={COLORS.PRIMARY} />
                <Text style={detailsStyle.textDateChoosen}>
                  {returnNewFormDisplayPrice(currentBudget)} DH
                </Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
              <View
                style={detailsStyle.containerChoosenDate}
                onStartShouldSetResponder={() => showDatePicker()}
              >
                <Ionicons
                  name="calendar-outline"
                  size={25}
                  color={COLORS.PRIMARY}
                />
                <Text style={detailsStyle.textDateChoosen}>
                  {finalStringDate}
                </Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
            </View>
          )}
        </>
      );
    };
    return (
      <>
        {renderTitleHistoryAndFilter()}

        {show && (
          <View style={detailsStyle.containerHistoryDetails}>
            <FlatList
              data={finalArrayContainingSpendingsAndIncomes}
              renderItem={(item) => renderHistoryItem(item)}
              keyExtractor={(item) => `${item.id}`}
              showsVerticalScrollIndicator={true}
            />
          </View>
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <StatusBarCustomized />
      {totalIncomes != 0 && (
        <ScrollView>
          {renderHeader()}
          {renderRectangleDetailsChart()}
          {renderRectangleDetailsList()}
        </ScrollView>
      )}
      {totalIncomes == 0 && (
        <View>
          {renderHeader()}
          <View
            style={[
              detailsStyle.containerChart,
              {
                justifyContent: "center",
                alignItems: "center",
                padding: SIZES.BASE * 3,
              },
            ]}
          >
            <Text>Unfortunately u have deleted all your Incomes !</Text>
            <Text
              style={{
                marginVertical: SIZES.BASE * 2,
                fontSize: 20,
                color: "red",
                fontWeight: "bold",
              }}
            >
              Add An Income To Enable This Feature
            </Text>
            <Text
              style={{
                marginVertical: SIZES.BASE * 4,
                fontSize: 20,
                color: COLORS.PRIMARY,
                fontWeight: "bold",
              }}
            >
              Click On The Plus Button Below
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Details;
