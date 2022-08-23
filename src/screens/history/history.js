import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import { SIZES } from "./../../consts/theme";
import { globalStyles } from "../../global/styles/globalStyles";
import { historyStyle } from "./historyStyle";
import { windowHeight } from "../../utils/dimensions";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AllHistoryCategories from "./data/allHistoryCategories";
import { renderFinalDate } from "../../global/functions/time";
import { categories } from "../../consts/categories";

import { deleteTransaction } from "../../redux/features/user/userSpendingsAndIncomesCategories";

import {
  calculateBudgetAndIncomesAndSpendings,
  concatenateIncomesAndSpendings,
  renderColorCircleBudget,
  renderInformationsAboutBudgetIncomesAndSpendings,
} from "./logic";
import { deleteGuide } from "../../redux/features/user/userSpendingsAndIncomesTypeTransaction";
const displayData = async () => {
  try {
    var aa = await AsyncStorage.getItem("user");
  } catch (e) {
    console.warn("this is the error moth", e);
  }
};

const renderProfileInformations = (navigation) => {
  return (
    <View style={globalStyles.headerContainer}>
      <Text style={globalStyles.titleHistory}>
        Spendings And Incomes Dashboard
      </Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={globalStyles.profileImage}
          source={require("../../assets/images/elon_musk.jpg")}
        />
      </TouchableOpacity>
    </View>
  );
};

const renderOneCircle = (name, price) => {
  var color = renderColorCircleBudget(name, price);

  return (
    <View>
      <View style={historyStyle.containerImageBudget(color)}>
        <Image
          source={require("../../assets/images/welcomePage.png")}
          style={historyStyle.imageBudget}
        />
        <View style={historyStyle.viewTextInside}>
          <Text style={historyStyle.textInside(color)}>{price}DH</Text>
        </View>
      </View>
      <View style={historyStyle.viewMyBudgetTitle(color)}>
        <Text style={historyStyle.myBudgetTitle(color)}>{name}</Text>
      </View>
    </View>
  );
};

const History = ({ navigation }) => {
  const [viewMode, setViewMode] = useState("list");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMoreToggle, setShowMoreToggle] = useState(false);
  const [title, setSelectedTitle] = useState("All");

  const data = useSelector((state) => state.userSpendingsAndIncomesCategories);

  const [firstDate, setFirstDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const [singleDate, setSingleDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isFinalDatePickerVisible, setFinalDatePickerVisibility] =
    useState(false);

  const [isSingleDatePickerVisible, setSingleDatePickerVisibility] =
    useState(false);

  const dispatch = useDispatch();

  const [timeOptionSelected, setTimeOptionSelected] = useState(2);

  let finalStringSingleDate = renderFinalDate(singleDate);

  let finalStringDate = renderFinalDate(firstDate);

  let finalStringFinalDate = renderFinalDate(finalDate);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setFirstDate(date);
    hideDatePicker();
  };

  const showSingleDatePicker = () => {
    setSingleDatePickerVisibility(true);
  };

  const hideSingleDatePicker = () => {
    setSingleDatePickerVisibility(false);
  };

  const handleConfirmSingle = (date) => {
    setSingleDate(date);
    hideSingleDatePicker();
  };

  const showFinalDatePicker = () => {
    setFinalDatePickerVisibility(true);
  };

  const hideFinalDatePicker = () => {
    setFinalDatePickerVisibility(false);
  };

  const handleConfirmFinal = (date) => {
    setFinalDate(date);
    hideFinalDatePicker();
  };

  let list = useSelector((state) => state.userSpendingsAndIncomesCategories);

  const renderCalendarRectangle = () => {
    const renderDateInputsInterval = () => {
      const renderFirstDateInput = () => {
        return (
          <View
            onStartShouldSetResponder={() => {
              showDatePicker();
            }}
            style={historyStyle.containerDateItem}
          >
            <Ionicons
              name="calendar-outline"
              size={SIZES.BASE * 3.7}
              color={COLORS.PRIMARY}
              style={{ fontWeight: "bold" }}
            />
            <Text
              style={{
                fontSize: SIZES.BASE * 3,
                fontWeight: "bold",
              }}
            >
              {finalStringDate}
            </Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              maximumDate={
                new Date(
                  finalDate.getFullYear(),
                  finalDate.getMonth(),
                  finalDate.getDate()
                )
              }
            />
          </View>
        );
      };
      const renderFinalDateInput = () => {
        return (
          <View
            onStartShouldSetResponder={() => {
              showFinalDatePicker();
            }}
            style={historyStyle.containerDateItem}
          >
            <Ionicons
              name="calendar-outline"
              size={SIZES.BASE * 3.7}
              color={COLORS.PRIMARY}
              style={{ fontWeight: "bold" }}
            />
            <Text
              style={{
                fontSize: SIZES.BASE * 3,
                fontWeight: "bold",
              }}
            >
              {finalStringFinalDate}
            </Text>
            <DateTimePickerModal
              isVisible={isFinalDatePickerVisible}
              mode="date"
              onConfirm={handleConfirmFinal}
              onCancel={hideFinalDatePicker}
              minimumDate={
                new Date(
                  firstDate.getFullYear(),
                  firstDate.getMonth(),
                  firstDate.getDate()
                )
              }
            />
          </View>
        );
      };
      return (
        <View style={historyStyle.inputContainerHistoryPage}>
          {renderFirstDateInput()}
          {renderFinalDateInput()}
        </View>
      );
    };
    const renderDateInputsSingleDay = () => {
      return (
        <View style={historyStyle.inputContainerHistoryPage}>
          <View
            onStartShouldSetResponder={() => {
              showSingleDatePicker();
            }}
            style={[
              historyStyle.containerDateItem,
              {
                marginHorizontal: "26%",
                flex: 1,
              },
            ]}
          >
            <Ionicons
              name="calendar-outline"
              size={SIZES.BASE * 3.7}
              color={COLORS.PRIMARY}
              style={{ fontWeight: "bold" }}
            />
            <Text
              style={{
                fontSize: SIZES.BASE * 3,
                fontWeight: "bold",
              }}
            >
              {finalStringSingleDate}
            </Text>
          </View>

          <DateTimePickerModal
            isVisible={isSingleDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmSingle}
            s
            onCancel={hideSingleDatePicker}
          />
        </View>
      );
    };
    return (
      <>
        {renderSwitchTimeIntervals()}
        {timeOptionSelected == 1
          ? null
          : timeOptionSelected == 2
          ? renderDateInputsInterval()
          : renderDateInputsSingleDay()}
      </>
    );
  };

  const { finalListIncomes, finalListSpendings } =
    renderInformationsAboutBudgetIncomesAndSpendings(
      list,
      timeOptionSelected,
      singleDate,
      firstDate,
      finalDate
    );

  const { currentBudget, totalIncomes, totalSpendings } =
    calculateBudgetAndIncomesAndSpendings(finalListIncomes, finalListSpendings);

  const renderSwitchTimeIntervals = () => {
    const renderOneTime = (number, text) => {
      return (
        <View
          onStartShouldSetResponder={() => {
            setTimeOptionSelected(number);
          }}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "black",
            padding: SIZES.BASE * 4,
            borderLeftWidth: number == 2 ? 1 : 0,
            backgroundColor:
              number == timeOptionSelected
                ? COLORS.SECONDARY
                : COLORS.LIGHTGREY,
            borderRightWidth: number == 2 ? 1 : 0,
          }}
        >
          <Ionicons
            name="calendar-outline"
            size={SIZES.BASE * 3.7}
            color={COLORS.PRIMARY}
            style={{ fontWeight: "bold", marginHorizontal: "9%" }}
          />
          <Text>{text}</Text>
        </View>
      );
    };
    return (
      <View
        style={{
          marginBottom: SIZES.PADDING * 0.6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {renderOneTime(1, "All Time")}
        {renderOneTime(2, "Interval")}
        {renderOneTime(3, "Single Day")}
      </View>
    );
  };

  const renderThreeCirclesIncomesBudgetAndSpendings = () => {
    return (
      <View style={historyStyle.containerThreeCircles}>
        {renderOneCircle("Incomes", totalIncomes)}
        {renderOneCircle("Budget", currentBudget)}
        {renderOneCircle("Spendings", totalSpendings)}
      </View>
    );
  };

  const renderCategoryHeaderSection = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: SIZES.PADDING,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="grid" size={SIZES.BASE * 4.5} />
          <Text
            style={{
              color: COLORS.PRIMARY,
              fontSize: SIZES.TITLE,
              fontWeight: "bold",
              marginLeft: SIZES.BASE,
            }}
          >
            CATEGORIES
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: viewMode == "chart" ? COLORS.SECONDARY : null,
              height: SIZES.BASE * 8,
              width: SIZES.BASE * 8,
              borderRadius: SIZES.BASE * 4,
              marginLeft: SIZES.BASE,
            }}
            onPress={() => setViewMode("chart")}
          >
            <Ionicons
              name="bar-chart"
              style={{
                fontSize: 22,
                color: viewMode == "chart" ? COLORS.BLACK : COLORS.GREY,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: viewMode == "list" ? COLORS.SECONDARY : null,
              height: SIZES.BASE * 8,
              width: SIZES.BASE * 8,
              borderRadius: SIZES.BASE * 4,
              marginLeft: SIZES.BASE,
            }}
            onPress={() => setViewMode("list")}
          >
            <Ionicons
              name="menu"
              style={{
                fontSize: 22,
                color: viewMode == "list" ? COLORS.BLACK : COLORS.GREY,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderCategoryList = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            if (title == item.name) {
              setSelectedTitle("All");
            } else {
              setSelectedCategory(item);
              setSelectedTitle(item.name);
            }
          }}
          style={[
            {
              backgroundColor:
                title == item.name ? COLORS.SECONDARY : COLORS.WHITE,
              ...historyStyle.shadow,
            },
            historyStyle.containerOneBoxCategory,
          ]}
        >
          <Ionicons
            name={item.icon}
            style={{
              fontSize: 22,
              color: item.color,
            }}
          />
          <Text
            style={{
              ...historyStyle.textButtonCategory,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    const categoriesWithOnly6Elements = categories.slice(0, 6);
    return (
      <View>
        <View>
          {categories.length >= 7 && showMoreToggle == true ? (
            <FlatList
              data={categories}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
              numColumns={3}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <FlatList
              data={categoriesWithOnly6Elements}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
              numColumns={3}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
        {categories.length > 6 ? (
          <TouchableOpacity
            style={historyStyle.moreLessButton}
            onPress={() => {
              setShowMoreToggle(!showMoreToggle);
            }}
          >
            <Text>{showMoreToggle ? "LESS" : "MORE"}</Text>
            <Ionicons
              name={showMoreToggle ? "arrow-up" : "arrow-down"}
              size={22}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  const renderHistoryTitleCategory = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Ionicons name="briefcase" size={SIZES.BASE * 4.5} />
          <Text
            style={{
              color: COLORS.PRIMARY,
              fontSize: SIZES.TITLE,
              fontWeight: "bold",
              marginLeft: SIZES.BASE,
            }}
          >
            HISTORY
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: COLORS.PRIMARY,
              fontSize: SIZES.BASE * 3.2,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    );
  };

  const renderHistoryCategory = () => {
    let finalArray = concatenateIncomesAndSpendings(title, data);
    let allHistory = finalArray;

    console.log(
      "this is the final array that we must use in the end ",
      finalArray
    );

    const renderHistoryItem = (item) => {
      const { transaction } = item;

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
                  color: transaction == "Spending" ? COLORS.RED : COLORS.GREEN,
                  fontWeight: "bold",
                  fontSize: SIZES.BASE * 3,
                }}
              >
                {item.price} DH
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
                    fontWeight: "bold",
                    fontSize: SIZES.BASE * 2.4,
                    fontWeight: "bold",
                  }}
                >
                  {renderFinalDate(item.date)}
                </Text>
                <Ionicons
                  name="calendar-outline"
                  style={{
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
                style={{
                  backgroundColor:
                    transaction == "Spending" ? COLORS.RED : COLORS.GREEN,
                  borderRadius: SIZES.BASE * 4,
                  padding: SIZES.BASE * 1.5,
                  marginHorizontal: windowHeight * 0.005,
                }}
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
            <View style={historyStyle.containerEditAndDeleteButtons}>
              {renderIcon("trash")}
              {/* {renderIcon("pencil-outline")} */}
            </View>
          );
        };
        return (
          <View style={historyStyle.containerHistoryItem}>
            <View>
              <Ionicons
                name={
                  transaction == "Income"
                    ? "arrow-up-circle"
                    : "arrow-down-circle"
                }
                color={transaction == "Spending" ? COLORS.RED : COLORS.GREEN}
                size={SIZES.BASE * 7}
              />
            </View>
            {renderImageAndTitle()}
            {renderPrice()}
            {renderDate()}
            {renderEditAndDeleteButton()}
          </View>
        );
      };
      return (
        <View>
          <View>{renderArrowAndImageAndTitleAndPriceAndDate()}</View>
        </View>
      );
    };
    return (
      <View style={{ padding: SIZES.PADDING }}>
        {renderHistoryTitleCategory()}

        {allHistory.length > 0 && title != "All" && (
          <View>
            {allHistory.map((item, index) => {
              return renderHistoryItem(item);
            })}
          </View>
        )}
        {allHistory.length > 0 && title == "All" && (
          <AllHistoryCategories
            timeOptionSelected={timeOptionSelected}
            finalDate={finalDate}
            firstDate={firstDate}
            singleDate={singleDate}
          />
        )}
        {allHistory.length == 0 && (
          <View>
            <Text style={historyStyle.textInsideCategoryContent}>
              No Results for the moment
            </Text>
          </View>
        )}
      </View>
    );
  };

  // this is part for the rectangle to navigate to the chart page

  const renderChartRectangle = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("charts", {
            data,
          })
        }
        style={historyStyle.containerChartFigure}
      >
        <Ionicons name="add-circle-sharp" style={historyStyle.categoryIcon} />
        <Text style={historyStyle.moreDetailsText}>
          Click Here To See More Chart Details
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <ScrollView>
        <View style={historyStyle.wholeContainer}>
          {renderProfileInformations(navigation)}
          {renderCalendarRectangle()}
          {renderThreeCirclesIncomesBudgetAndSpendings()}
          {renderCategoryHeaderSection()}
          {viewMode == "list" && (
            <View>
              {renderCategoryList()}
              {renderHistoryCategory()}
            </View>
          )}
          {viewMode == "chart" && renderChartRectangle()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
