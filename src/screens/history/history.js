import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";

import DatePicker from "react-native-date-picker";

import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../../consts/color";
import { SIZES } from "./../../consts/theme";

import { globalStyles } from "../../global/styles/globalStyles";
import { historyStyle } from "./historyStyle";
import { windowHeight, windowWidth } from "../../utils/dimensions";

const renderProfileInformations = () => {
  return (
    <View style={historyStyle.containerProfileInformations}>
      <Avatar.Image
        source={require("../../assets/images/elon_musk.jpg")}
        size={85}
        style={historyStyle.imageProfile}
      />
      <View>
        <View>
          <Text style={historyStyle.nameUser}>Yessine Jaoua</Text>
        </View>
        <View>
          <Text style={historyStyle.titleDashboard}>
            Spendings And Incomes Dashboard
          </Text>
        </View>
      </View>
    </View>
  );
};

const renderOneCircle = (name, price) => {
  var color;

  switch (name) {
    case "Incomes":
      color = COLORS.GREEN;
      break;
    case "Budget":
      color = COLORS.PRIMARY;
      break;
    case "Spendings":
      color = COLORS.RED;
      break;

    default:
      break;
  }
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

const renderThreeCirclesIncomesBudgetAndSpendings = () => {
  return (
    <View style={historyStyle.containerThreeCircles}>
      {renderOneCircle("Incomes", 0)}
      {renderOneCircle("Budget", 1000)}
      {renderOneCircle("Spendings", 2000)}
    </View>
  );
};

const History = ({ navigation }) => {
  let categoriesData = [
    {
      id: 1,
      name: "Education",
      icon: "fast-food",
      color: COLORS.GREEN,
      history: [
        {
          id: 1,
          title: "Tuition Fee",
          date: "20 July 2022",
          total: 100.0,
        },
        {
          id: 2,
          title: "Tuition Fee",
          date: "20 July 2022",
          total: 100.0,
        },
        {
          id: 3,
          title: "Tuition Fee",
          date: "20 July 2022",
          total: 100.0,
        },
        {
          id: 4,
          title: "Tuition Fee",
          date: "20 July 2022",
          total: 100.0,
        },
        {
          id: 5,
          title: "Tuition Fee",
          date: "20 July 2022",
          total: 100.0,
        },
        {
          id: 6,
          title: "Tuition Fee",
          date: "20 July 2022",
          total: 100.0,
        },
        {
          id: 7,
          title: "Tuition Fee",
          date: "20 July 2022",
          total: 100.0,
        },
        {
          id: 8,
          title: "Tuition Fee",
          date: "20 July 2022",
          total: 100.0,
        },
      ],
    },
    {
      id: 2,
      name: "Nutrition",
      icon: "fast-food",
      color: COLORS.BLACK,
      history: [],
    },
    {
      id: 3,
      name: "Child",
      icon: "fast-food",
      color: COLORS.DELETEBUTTONRED,
      history: [
        {
          id: 2,
          title: "Pampers",
          date: "20 July 2022",
          total: 100.0,
        },
      ],
    },
    {
      id: 4,
      name: "Beauty & Care",
      icon: "fast-food",
      color: COLORS.SECONDARY,
      history: [
        {
          id: 3,
          title: "Face Mask",
          date: "20 July 2022",
          total: 50.0,
        },
      ],
    },
    {
      id: 5,
      name: "Beauty & Care",
      icon: "fast-food",
      color: COLORS.LIGHTGREY,
      history: [
        {
          id: 4,
          title: "Sunscreen cream",
          date: "20 July 2022",
          total: 50.0,
        },
      ],
    },
    {
      id: 6,
      name: "Beauty & Care",
      icon: "fast-food",
      color: COLORS.FACEBOOK,
      history: [
        {
          id: 5,
          title: "Face Mask",
          date: "20 July 2022",
          total: 50.0,
        },
      ],
    },
    {
      id: 7,
      name: "Education",
      icon: "fast-food",
      color: COLORS.BOTTOMBAR,
      history: [
        {
          id: 6,
          title: "Tuition Fee",
          date: "20 July 2022",
          total: 100.0,
        },
      ],
    },
  ];

  const heightAnimationValue = useRef(
    new Animated.Value(windowHeight * 0.17)
  ).current;

  const [categories, setCategories] = useState(categoriesData);
  const [viewMode, setViewMode] = useState("chart");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMoreToggle, setShowMoreToggle] = useState(false);

  const renderCategoryList = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        onPress={() => setSelectedCategory(item)}
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 5,
          paddingVertical: SIZES.BASE * 2,
          paddingHorizontal: SIZES.PADDING * 1,
          borderRadius: 5,
          backgroundColor: COLORS.WHITE,
          borderWidth: 1,
          borderColor: COLORS.PRIMARY,
          ...historyStyle.shadow,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons
          name="bar-chart"
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

    return (
      <View>
        <Animated.View style={{ height: heightAnimationValue }}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </Animated.View>

        <TouchableOpacity
          style={historyStyle.moreLessButton}
          onPress={() => {
            if (showMoreToggle) {
              Animated.timing(heightAnimationValue, {
                toValue: windowHeight * 0.165,
                duration: 500,
                useNativeDriver: false,
              }).start();
            } else {
              Animated.timing(heightAnimationValue, {
                toValue: windowHeight * 0.24,
                duration: 500,
                useNativeDriver: false,
              }).start();
            }

            setShowMoreToggle(!showMoreToggle);
          }}
        >
          <Text>{showMoreToggle ? "LESS" : "MORE"}</Text>
          <Ionicons
            name={showMoreToggle ? "arrow-up" : "arrow-down"}
            size={22}
          />
        </TouchableOpacity>
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
          <Text>No Item Selected</Text>
        </View>
      </View>
    );
  };

  const renderHistoryCategory = () => {
    let allHistory = selectedCategory ? selectedCategory.history : [];
    console.log(selectedCategory);
    console.log("this is the list of history ", allHistory);
    const renderHistoryItem = () => {
      return (
        <View>
          <Text>Hahaha</Text>
        </View>
      );
    };
    return (
      <View style={{ padding: SIZES.PADDING }}>
        {renderHistoryTitleCategory()}
        {allHistory.length > 0 && (
          <View
            style={{
              marginTop: SIZES.BASE * 2,
              borderWidth: 0.1,
              backgroundColor: COLORS.LIGHTGREY,
              padding: 20,
              flex: 1,
            }}
          >
            <FlatList
              data={allHistory}
              keyExtractor={(item) => `${item.id}`}
              showsVerticalScrollIndicator={true}
              renderItem={renderHistoryItem}
            />
          </View>
        )}
        {allHistory.length == 0 && (
          <View>
            <Text>No Results for the moment</Text>
            <Text>No Results for the moment</Text>
            <Text>No Results for the moment</Text>
            <Text>No Results for the moment</Text>
            <Text>No Results for the moment</Text>
            <Text>No Results for the moment</Text>
            <Text>No Results for the moment</Text>
            <Text>No Results for the moment</Text>
            <Text>No Results for the moment</Text>
          </View>
        )}
      </View>
    );
  };

  // this is part for the rectangle to navigate to the chart page

  const renderChartRectangle = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("charts", categoriesData)}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 12,
          alignSelf: "center",
          height: windowHeight * 0.25,
          width: windowWidth * 0.8,
          backgroundColor: COLORS.LIGHTGREY,
          ...historyStyle.shadow,
        }}
      >
        <Ionicons name="add-circle-sharp" style={historyStyle.categoryIcon} />
        <Text style={historyStyle.moreDetailsText}>
          Click Here To See More Chart Details
        </Text>
      </TouchableOpacity>
    );
  };

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const renderCalendarRectangle = () => {
    return (
      <TouchableOpacity
        style={globalStyles.inputContainerHistoryPage}
        onPress={() => setOpen(true)}
      >
        <Ionicons name="filter" />
        <Text>All Time</Text>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Ionicons name="calendar-outline" />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <View style={historyStyle.wholeContainer}>
        {renderProfileInformations()}
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
    </SafeAreaView>
  );
};

export default History;
