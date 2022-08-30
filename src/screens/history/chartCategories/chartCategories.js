import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";
import { chartCategoriesStyle } from "./chartCategoriesStyle";
import { SIZESS, FONTS } from "../../../consts/theme";
import COLORS from "../../../consts/color";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../../global/styles/globalStyles";
import {
  returnNewFormDisplayPrice,
  total,
} from "../../../global/functions/store";
import { useSelector } from "react-redux";
const ChartCategories = ({ navigation, route }) => {
  let data = useSelector((state) => state.userSpendingsAndIncomesCategories);

  const [modeSelected, setModeSelected] = useState("Spendings");
  // function setSelectCategoryByName(name) {
  //   let category = categories.filter((a) => a.name == name);
  //   setSelectedCategory(category[0]);
  // }

  const renderHeader = () => {
    return (
      <View style={chartCategoriesStyle.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-undo-circle-outline" size={42} />
        </TouchableOpacity>
        <Text style={chartCategoriesStyle.title}>Charts</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={globalStyles.profileImage}
            source={require("../../../assets/images/elon_musk.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const processCategoryDataToDisplay = () => {
    // Filter expenses with "Confirmed" status
    let chartData = data.map((item) => {
      let totalIncomes = total(item.incomeElements);
      let totalExpenses = total(item.spendingElements);

      return {
        title: item.title,
        expenseCount: totalExpenses,
        incomeCount: totalIncomes,
        color: item.color,
        id: item.id,
      };
    });

    // filter out categories with no data/expenses
    let filterChartDataExpenses = chartData.filter((a) => {
      return a.expenseCount > 0;
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
        2
      );
      return {
        labelIncome: `${percentageIncome}%`,
        y: Number(item.incomeCount),
        incomeCount: item.incomeCount,
        color: item.color,
        title: item.title,
        id: item.id,
      };
    });

    let finalChartDataExpense = filterChartDataExpenses.map((item) => {
      let percentageExpense = (
        (item.expenseCount / totalExpense) *
        100
      ).toFixed(2);
      return {
        labelExpense: `${percentageExpense}%`,
        y: Number(item.expenseCount),
        expenseCount: item.expenseCount,
        color: item.color,
        title: item.title,
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
            return null;
          }}
          radius={SIZESS.width * 0.4}
          innerRadius={70}
          labelRadius={({ innerRadius }) =>
            (SIZESS.width * 0.4 + innerRadius) / 2
          }
          colorScale={colorScales}
        />

        <View style={chartCategoriesStyle.containerNumberCategoriesChart}>
          <Text style={chartCategoriesStyle.numberCategoriesChart}>
            {categoriesExpenses}
          </Text>
          <Text style={chartCategoriesStyle.titleCategories}>Categories</Text>
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
            return null;
          }}
          radius={SIZESS.width * 0.4}
          innerRadius={70}
          labelRadius={({ innerRadius }) =>
            (SIZESS.width * 0.4 + innerRadius) / 2
          }
          colorScale={colorScales}
        />

        <View style={chartCategoriesStyle.containerNumberCategoriesChart}>
          <Text style={chartCategoriesStyle.numberCategoriesChart}>
            {categoriesIncomes}
          </Text>
          <Text style={chartCategoriesStyle.titleCategories}>Categories</Text>
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
    let { finalChartDataExpense } = processCategoryDataToDisplay();

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={chartCategoriesStyle.containerOneLineSummaryChart}
        onPress={() => {
          renderNavigationToTheDetailsCategoryChoosen();
        }}
      >
        {/* Name/Category */}
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View
            style={[
              chartCategoriesStyle.littleRectangleCategoryColor,
              { backgroundColor: item.color },
            ]}
          />

          <Text style={chartCategoriesStyle.titleCategorySummaryLine}>
            {item.title}
          </Text>
        </View>

        {/* Expenses */}
        <View style={{ justifyContent: "center" }}>
          <Text style={chartCategoriesStyle.textPriceAndPercentageSummaryLine}>
            -{returnNewFormDisplayPrice(item.expenseCount)} DH {"|"}
            {item.labelExpense}
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
        style={chartCategoriesStyle.containerOneLineSummaryChart}
        onPress={() => {
          renderNavigationToTheDetailsCategoryChoosen();
        }}
      >
        {/* Name/Category */}
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View
            style={[
              chartCategoriesStyle.littleRectangleCategoryColor,
              { backgroundColor: item.color },
            ]}
          />

          <Text style={chartCategoriesStyle.titleCategorySummaryLine}>
            {item.title}
          </Text>
        </View>

        {/* Expenses */}
        <View style={{ justifyContent: "center" }}>
          <Text style={chartCategoriesStyle.textPriceAndPercentageSummaryLine}>
            -{returnNewFormDisplayPrice(item.incomeCount)} DH {"  |  "}{" "}
            {item.labelIncome}
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
      {renderHeader()}
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
