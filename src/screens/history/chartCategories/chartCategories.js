import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
  // function setSelectCategoryByName(name) {
  //   let category = categories.filter((a) => a.name == name);
  //   setSelectedCategory(category[0]);
  // }

  const processCategoryDataToDisplay = () => {
    // Filter expenses with "Confirmed" status
    let chartData = categories.map((item) => {
      let totalIncomes = 0;
      let totalExpenses = 0;
      item.history.map((item) => {
        item.type == "Income"
          ? (totalIncomes += item.total)
          : (totalExpenses += item.total);
      });

      // let totalSpendings = listSpendings.reduce(
      //   (a, b) => a + (b.total || 0),
      //   0
      // );

      return {
        name: item.name,
        expenseCount: totalExpenses,
        incomeCount: totalIncomes,
        color: item.color,
        id: item.id,
      };
    });

    // filter out categories with no data/expenses
    let filterChartDataExpenses = chartData.filter((a) => {
      return a.expenseCount < 0;
    });

    // Calculate the total expenses
    let totalExpense = filterChartDataExpenses.reduce(
      (a, b) => a + (b.expenseCount || 0),
      0
    );

    let categoriesExpenses = filterChartDataExpenses.reduce((a, b) => a + 1, 0);
    // filter out categories with no data/expenses
    let filterChartDataIncomes = chartData.filter((a) => {
      return a.incomeCount > 0;
    });

    // Calculate the total expenses
    let totalIncome = filterChartDataIncomes.reduce(
      (a, b) => a + (b.incomeCount || 0),
      0
    );

    let categoriesIncomes = filterChartDataIncomes.reduce((a, b) => a + 1, 0);
    // Calculate percentage and repopulate chart data
    let finalChartDataIncome = filterChartDataIncomes.map((item) => {
      let percentageIncome = ((item.incomeCount / totalIncome) * 100).toFixed(
        0
      );
      return {
        labelIncome: `${percentageIncome}%`,
        y: Number(item.incomeCount),
        incomeCount: item.incomeCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });

    let finalChartDataExpense = filterChartDataExpenses.map((item) => {
      let percentageExpense = (
        (item.expenseCount / totalExpense) *
        100
      ).toFixed(0);
      return {
        labelExpense: `${percentageExpense}%`,
        y: Number(item.expenseCount),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });

    return {
      finalChartDataIncome,
      finalChartDataExpense,
      categoriesExpenses,
      categoriesIncomes,
    };
  };

  const renderChartExpense = () => {
    let { finalChartDataExpense, categoriesExpenses, finalChartDataIncome } =
      processCategoryDataToDisplay();

    let colorScales = finalChartDataExpense.map((item) => item.color);

    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <VictoryPie
          data={finalChartDataExpense}
          labels={(datum) => {
            return datum.datum.labelExpense;
          }}
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
            {categoriesExpenses}
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

  const renderChartIncome = () => {
    let { finalChartDataIncome, categoriesIncomes } =
      processCategoryDataToDisplay();

    let colorScales = finalChartDataIncome.map((item) => item.color);

    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <VictoryPie
          data={finalChartDataIncome}
          labels={(datum) => {
            return datum.datum.labelIncome;
          }}
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
            {categoriesIncomes}
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
    let { finalChartDataExpense, categoriesExpenses, categoriesIncomes } =
      processCategoryDataToDisplay();

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
            {item.expenseCount} DH - {item.labelExpense}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{ padding: SIZESS.padding / 2 }}>
        <View style={{ flexGrow: 1 }}>
          <FlatList
            data={finalChartDataExpense}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </View>
    );
  };
  const renderIncomeSummary = () => {
    let { finalChartDataIncome } = processCategoryDataToDisplay();

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
            +{item.incomeCount} DH - {item.labelIncome}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{ padding: SIZESS.padding / 2 }}>
        <View style={{ flexGrow: 1 }}>
          <FlatList
            data={finalChartDataIncome}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
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

        {modeSelected == "Spendings" && (
          <View>
            <View style={chartCategoriesStyle.chartImageContainer}>
              {renderChartExpense()}
            </View>

            {/* {renderSwitchButton()} */}

            <View>{renderExpenseSummary()}</View>
          </View>
        )}

        {modeSelected == "Incomes" && (
          <View>
            <View style={chartCategoriesStyle.chartImageContainer}>
              {renderChartIncome()}
            </View>

            <View>{renderIncomeSummary()}</View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ChartCategories;
