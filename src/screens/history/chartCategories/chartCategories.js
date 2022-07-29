import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";
import { chartCategoriesStyle } from "./chartCategoriesStyle";
import { SIZESS, FONTS } from "../../../consts/theme";
import COLORS from "../../../consts/color";
import { Ionicons } from "@expo/vector-icons";

const ChartCategories = ({ navigation, route }) => {
  const categories = route.params;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modeSelected, setModeSelected] = useState("Spendings");
  function setSelectCategoryByName(name) {
    let category = categories.filter((a) => a.name == name);
    setSelectedCategory(category[0]);
  }

  const processCategoryDataToDisplay = () => {
    // Filter expenses with "Confirmed" status
    let chartData = categories.map((item) => {
      var total = item.history.reduce((a, b) => a + (b.total || 0), 0);

      return {
        name: item.name,
        y: total,
        expenseCount: item.history.length,
        color: item.color,
        id: item.id,
      };
    });

    // filter out categories with no data/expenses
    let filterChartData = chartData.filter((a) => a.y > 0);

    // Calculate the total expenses
    let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

    // Calculate percentage and repopulate chart data
    let finalChartData = filterChartData.map((item) => {
      let percentage = ((item.y / totalExpense) * 100).toFixed(0);
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });

    return finalChartData;
  };

  const renderChart = () => {
    let chartData = processCategoryDataToDisplay();
    let colorScales = chartData.map((item) => item.color);
    let totalExpenseCount = chartData.reduce(
      (a, b) => a + (b.expenseCount || 0),
      0
    );
    console.log(chartData);
    // let totalCategories = chartData.sum();
    // console.log(totalCategories);
    let totalCategories = 0;
    totalCategories = chartData.reduce((a, b) => a + 1, totalCategories);
    console.log(totalCategories);

    // Android workaround by wrapping VictoryPie with SVG
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <VictoryPie
          data={chartData}
          labels={(datum) => `${datum.y}`}
          radius={SIZESS.width * 0.4}
          innerRadius={70}
          labelRadius={({ innerRadius }) =>
            (SIZESS.width * 0.4 + innerRadius) / 2
          }
          style={{
            labels: {
              fill: "black",
              ...FONTS.body3,
              fontWeight: "bold",
              fontSize: SIZESS.body1 / 1.6,
            },
            parent: {
              ...chartCategoriesStyle.shadow,
            },
          }}
          colorScale={colorScales}
        />
        <View
          style={{
            position: "absolute",
            top: "42%",
            left: "39%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 25 }}
          >
            {totalCategories}
          </Text>
          <Text
            style={{ textAlign: "center", fontWeight: "400", fontSize: 20 }}
          >
            Categories
          </Text>
        </View>
      </View>
    );
  };

  const [visualisationMode, setVisualisationMode] = useState("PIE");

  const renderSwitchButton = () => {
    return (
      <TouchableOpacity
        style={chartCategoriesStyle.containerButtonSwitch}
        onPress={() => {
          visualisationMode == "PIE"
            ? setVisualisationMode("HISTO")
            : setVisualisationMode("PIE");
        }}
      >
        {visualisationMode == "PIE" && (
          <View style={chartCategoriesStyle.circleInsideContainerButtonSwitch}>
            <Ionicons
              name="add-circle"
              style={
                chartCategoriesStyle.iconInsideCircleInsideContainerButtonSwitch
              }
            />
          </View>
        )}
        {console.log(visualisationMode)}
        {visualisationMode == "HISTO" && (
          <View style={chartCategoriesStyle.circleInsideContainerButtonSwitch}>
            <Ionicons
              name="add"
              style={
                chartCategoriesStyle.iconInsideCircleInsideContainerButtonSwitch
              }
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderNavigationToTheDetailsCategoryChoosen = () => {};
  const renderExpenseSummary = () => {
    let data = processCategoryDataToDisplay();

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 40,
          paddingHorizontal: SIZESS.radius,
          borderRadius: 10,
          backgroundColor: COLORS.BOTTOMBAR,
          marginBottom: SIZESS.base * 2,
        }}
        onPress={() => {
          renderNavigationToTheDetailsCategoryChoosen();
        }}
      >
        {/* Name/Category */}
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
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
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              color: COLORS.PRIMARY,
              fontWeight: "bold",
              fontSize: SIZESS.base * 1.7,
            }}
          >
            {item.y} DH - {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{ padding: SIZESS.padding / 2 }}>
        <View style={{ flexGrow: 1 }}>
          <FlatList
            data={data}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={chartCategoriesStyle.container}>
      {/* // this is for the spending and incomes titles 000 */}

      <View style={chartCategoriesStyle.containerIncomesAndSpendingsTitle}>
        <TouchableOpacity
          style={[
            chartCategoriesStyle.containerTitle,
            {
              backgroundColor:
                modeSelected == "Spendings" ? COLORS.PRIMARY : "white",
            },
          ]}
          onPress={() => {
            setModeSelected("Spendings");
          }}
        >
          <Text style={chartCategoriesStyle.title}>Spendings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            chartCategoriesStyle.containerTitle,
            {
              backgroundColor:
                modeSelected == "Incomes" ? COLORS.PRIMARY : "white",
            },
          ]}
          onPress={() => {
            setModeSelected("Incomes");
          }}
        >
          <Text style={chartCategoriesStyle.title}>Incomes</Text>
        </TouchableOpacity>
      </View>

      <View style={chartCategoriesStyle.chartImageContainer}>
        {renderChart()}
      </View>

      {/* {renderSwitchButton()} */}

      <View>{renderExpenseSummary()}</View>

      {/* <Button
        title="Go To Food Category"
        onPress={() => {
          navigation.navigate("food-category");
        }}
      ></Button> */}
    </View>
  );
};

export default ChartCategories;
