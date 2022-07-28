import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
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

    // Android workaround by wrapping VictoryPie with SVG
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Svg
          width={SIZESS.width}
          height={SIZESS.width}
          style={{ width: "100%", height: "auto" }}
        >
          <VictoryPie
            data={chartData}
            labels={(datum) => `${datum.y}`}
            radius={({ datum }) =>
              selectedCategory && selectedCategory.name == datum.name
                ? SIZESS.width * 0.4
                : SIZESS.width * 0.4 - 10
            }
            innerRadius={70}
            labelRadius={({ innerRadius }) =>
              (SIZESS.width * 0.4 + innerRadius) / 2.5
            }
            style={{
              labels: { fill: "white", ...FONTS.body3 },
              parent: {
                ...chartCategoriesStyle.shadow,
              },
            }}
            width={SIZESS.width * 0.8}
            height={SIZESS.width * 0.8}
            colorScale={colorScales}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPress: () => {
                    return [
                      {
                        target: "labels",
                        mutation: (props) => {
                          let categoryName = chartData[props.index].name;
                          console.log(categoryName);
                          setSelectCategoryByName(categoryName);
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </Svg>
        <View style={{ position: "absolute", top: "29%", left: "43%" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 25 }}
          >
            {totalExpenseCount}
          </Text>
          <Text
            style={{ textAlign: "center", fontWeight: "400", fontSize: 20 }}
          >
            Expenses
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
        <View style={chartCategoriesStyle.circleInsideContainerButtonSwitch}>
          <Ionicons
            name="add-circle"
            style={
              chartCategoriesStyle.iconInsideCircleInsideContainerButtonSwitch
            }
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderExpenseSummary = () => {
    let data = processCategoryDataToDisplay();

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 40,
          paddingHorizontal: SIZESS.radius,
          borderRadius: 10,
          backgroundColor:
            selectedCategory && selectedCategory.name == item.name
              ? item.color
              : COLORS.WHITE,
        }}
        onPress={() => {
          let categoryName = item.name;
          setSelectCategoryByName(categoryName);
        }}
      >
        {/* Name/Category */}
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.WHITE
                  : item.color,
              borderRadius: 5,
            }}
          />

          <Text
            style={{
              marginLeft: SIZESS.base,
              color:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.WHITE
                  : COLORS.PRIMARY,
            }}
          >
            {item.name}
          </Text>
        </View>

        {/* Expenses */}
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              color:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.WHITE
                  : COLORS.PRIMARY,
            }}
          >
            {item.y} USD - {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{ padding: SIZESS.padding }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
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
          <Text style={chartCategoriesStyle.title}>Total Spendings</Text>
        </TouchableOpacity>
      </View>

      <View style={chartCategoriesStyle.chartImageContainer}>
        {renderChart()}
      </View>

      <View>{renderSwitchButton()}</View>

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
