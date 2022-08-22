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
import { useSelector } from "react-redux";
import { globalStyles } from "../../../global/styles/globalStyles";
import COLORS from "../../../consts/color";
import { guideStyle as styles } from "./guide_50_30_20_summaryStyle";
import { SIZES, SIZESS } from "../../../consts/theme";
import { ScrollView } from "react-native-gesture-handler";
import { calculateAllIncomes } from "../../../global/functions/store";
import {
  needsSpendings,
  returnColorAppropriateBorder,
  returnOverpassedOrRemaining,
  returnPercentageWantAndNeedAndSaveAndGuideExpensesAndGuideExpensesSummary,
  savesSpedings,
  wantsSpendings,
} from "../logic";
import DetailsOptimalIncomes from "./detailsOptimalIncomes";
import { Ionicons } from "@expo/vector-icons";

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

  const totalWants = wantsSpendings(data);
  const totalSaves = savesSpedings(data);
  const totalNeeds = needsSpendings(data);

  const arraySpendings = [totalWants, totalNeeds, totalSaves];

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const processCategoryDataToDisplay = () => {
    // Filter expenses with "Confirmed" status

    const { finalGuideDataExpenses, finalGuideDataExpensesSummary } =
      returnPercentageWantAndNeedAndSaveAndGuideExpensesAndGuideExpensesSummary(
        totalIncomes,
        data,
        totalWants,
        totalSaves,
        totalNeeds
      );

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

        <View style={styles.mainContainerTitle}>
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
                  <Text style={[styles.textNoHistory, { color: "red" }]}>
                    No Incomes And Spendings
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
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.PRIMARY,
                    marginTop: SIZES.BASE * 2,
                    padding: SIZES.BASE * 2,
                    marginBottom: -SIZES.BASE * 6,
                    borderRadius: SIZES.BASE * 2,
                  }}
                  onPress={() => {
                    handleModal(true);
                  }}
                >
                  <Text style={{ color: "white" }}>
                    Click Here More Details About Incomes
                  </Text>
                  <DetailsOptimalIncomes
                    isModalVisible={isModalVisible}
                    handleModal={handleModal}
                    totalIncomes={totalIncomes}
                    totals={arraySpendings}
                  />
                </TouchableOpacity>
                <VictoryPie
                  data={finalGuideDataExpenses}
                  labels={(datum) => {
                    return null;
                  }}
                  radius={SIZES.BASE * 25}
                  innerRadius={60}
                  labelRadius={50000}
                  colorScale={colorScales}
                />
              </View>
              {renderGuideExpensesSummary()}
            </View>
          )}
        {totalIncomes != 0 &&
          totalNeeds == 0 &&
          totalSaves == 0 &&
          totalWants == 0 && (
            <View style={styles.mainContainer}>
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: SIZES.BASE * 4,
                }}
              >
                <Ionicons name="sad" size={35} />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: "2%",
                  }}
                >
                  No Spendings For The Moment
                </Text>
              </View>
              {renderGuideExpensesSummary()}
            </View>
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Guide_50_30_20_Summary;
