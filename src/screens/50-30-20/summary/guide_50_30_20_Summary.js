import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { VictoryPie } from "victory-native";
import { useSelector, useDispatch } from "react-redux";
import { globalStyles } from "../../../global/styles/globalStyles";
import { guideData } from "./../../../consts/guideData";
import COLORS from "../../../consts/color";
import { guideStyle as styles } from "./guide_50_30_20_summaryStyle";
import { SIZES, SIZESS } from "../../../consts/theme";
import { ScrollView } from "react-native-gesture-handler";
import { needs, saves, wants } from "../../../consts/percentages";
import {
  calculateAllIncomes,
  calculateSpendingsNeeds,
  calculateSpendingsSaves,
  calculateSpendingsWants,
  total,
} from "../../../global/functions/store";
import {
  needsSpendings,
  returnColorAppropriateBorder,
  returnOverpassedOrRemaining,
  returnTotalSavesWantsNeeds,
  savesSpedings,
  wantsSpendings,
} from "../guide";
const Guide_50_30_20_Summary = ({ navigation }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  useEffect(() => {
    Animated.timing(pan, {
      toValue: { x: 800, y: 0 },
      delay: 1000,
      useNativeDriver: false,
    });
  });

  let data = useSelector((state) => {
    return state.userSpendingsAndIncomes;
  });

  const totalIncomes = calculateAllIncomes(data);

  const totalOptimalSavesIncomes = (totalIncomes * 0.2).toFixed(0);
  const totalOptimamWantsIncomes = (totalIncomes * 0.3).toFixed(0);
  const totalOptimalNeedsIncomes = (totalIncomes * 0.5).toFixed(0);

  const totalWants = wantsSpendings(data);
  const totalSaves = savesSpedings(data);
  const totalNeeds = needsSpendings(data);

  const processCategoryDataToDisplay = () => {
    // Filter expenses with "Confirmed" status

    let percentageWant = (
      (totalWants / totalOptimamWantsIncomes) *
      100
    ).toFixed(0);

    let percentageNeed = (
      (totalNeeds / totalOptimalNeedsIncomes) *
      100
    ).toFixed(0);
    let percentageSave = (
      (totalSaves / totalOptimalSavesIncomes) *
      100
    ).toFixed(0);
    let finalGuideDataExpenses = [
      {
        y: totalWants,
        color: COLORS.WANTS,
        label: `${percentageWant}%`,
      },
      {
        y: totalSaves,
        color: COLORS.SAVES,
        label: `${percentageSave}%`,
      },
      {
        color: COLORS.NEEDS,
        y: totalNeeds,
        label: `${percentageNeed}%`,
      },
    ];
    let finalGuideDataExpensesSummary = [
      {
        id: 1,
        name: "Wants",
        y: totalWants,
        // label: `${percentageWant}%`,
        color: COLORS.WANTS,
        normal: wants,
        difference: `${wants - percentageWant}`,
        actual: percentageWant,
      },
      {
        id: 2,
        name: "Saves",
        y: totalSaves,
        // label: `${percentageSave}%`,
        actual: percentageSave,
        color: COLORS.SAVES,
        normal: saves,
        difference: `${saves - percentageSave}`,
      },
      {
        id: 3,
        name: "Needs",
        actual: percentageNeed,
        // label: `${percentageNeed}%`,
        y: totalNeeds,
        color: COLORS.NEEDS,
        normal: needs,
        difference: `${needs - percentageNeed}`,
      },
    ];

    return {
      finalGuideDataExpenses,
      finalGuideDataExpensesSummary,
    };
  };

  const renderNavigationToTheDetailsCategoryChoosen = (item) => {
    navigation.navigate("Details", { item });
  };

  const renderGuideExpensesSummary = () => {
    let { finalGuideDataExpensesSummary } = processCategoryDataToDisplay();

    const renderItem = ({ item }) => {
      let difference = item.difference;
      let colorAppropriate = returnColorAppropriateBorder(difference);
      let text = returnOverpassedOrRemaining(difference);
      if (difference < 0) {
        difference = difference * -1;
      }
      return (
        <TouchableOpacity
          style={[
            styles.containerOneExpenseSummary,
            { borderColor: colorAppropriate },
          ]}
          onPress={() => {
            renderNavigationToTheDetailsCategoryChoosen(item);
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
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colorAppropriate,
                fontWeight: "bold",
                fontSize: SIZESS.base * 1.85,
              }}
            >
              {item.y} DH - {difference} % {text}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <FlatList
          data={finalGuideDataExpensesSummary}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={true}
        />
      </View>
    );
  };

  let { finalGuideDataExpenses } = processCategoryDataToDisplay();
  let colorScales = finalGuideDataExpenses.map((item) => item.color);
  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <ScrollView style={styles.page}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Guide 50_30_20</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image
              style={styles.profileImage}
              source={require("../../../assets/images/elon_musk.jpg")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "flex-start" }}>
          <Text style={styles.topText}> Our Guide </Text>
          <Text style={styles.bottomText}>Let's Learn About Finance </Text>
        </View>

        <View style={styles.mainContainer}>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={styles.summaryText}>Your Summary</Text>
            {totalIncomes == 0 && (
              <View style={styles.mainContainerEmpty}>
                {totalNeeds == 0 && totalSaves == 0 && totalWants == 0 && (
                  <Text style={styles.textNoHistory}>
                    You Have No Income And Spendings For The Momenet
                  </Text>
                )}
                {totalNeeds != 0 ||
                  totalSaves != 0 ||
                  (totalWants != 0 && (
                    <Text style={styles.textNoHistory}>
                      You Have No Income For The Momenet
                    </Text>
                  ))}
              </View>
            )}
            {totalIncomes == 0 &&
              (totalIncomes != 0 || totalNeeds != 0 || totalSaves != 0) && (
                <Text style={styles.textNoHistory}>
                  You Should Add An Income Before
                </Text>
              )}
          </View>
        </View>

        {totalIncomes != 0 &&
          (totalNeeds != 0 || totalSaves != 0 || totalWants != 0) && (
            <View style={styles.mainContainer}>
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <VictoryPie
                  data={finalGuideDataExpenses}
                  labels={(datum) => {
                    return null;
                  }}
                  radius={SIZES.BASE * 25}
                  innerRadius={60}
                  labelRadius={({ innerRadius }) =>
                    (SIZES.BASE * 30 + innerRadius) / 2.5
                  }
                  colorScale={colorScales}
                />
              </View>
              {renderGuideExpensesSummary()}
            </View>
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Guide_50_30_20_Summary;
