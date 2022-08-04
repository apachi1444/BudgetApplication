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

import { globalStyles } from "../../../global/styles/globalStyles";
import { guideData } from "./../../../consts/guideData";
import COLORS from "../../../consts/color";
import { guideStyle as styles } from "./guide_50_30_20_summaryStyle";
import { SIZES, SIZESS } from "../../../consts/theme";
import { ScrollView } from "react-native-gesture-handler";
const Guide_50_30_20_Summary = ({ navigation }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  useEffect(() => {
    Animated.timing(pan, {
      toValue: { x: 800, y: 0 },
      delay: 1000,
      useNativeDriver: false,
    });
  });

  const processCategoryDataToDisplay = () => {
    // Filter expenses with "Confirmed" status
    let totalNeeds = 0;
    let totalSaves = 0;
    let totalWants = 0;
    guideData.map((item) => {
      if (item.type === "save") {
        totalSaves += item.amout;
      } else if (item.type === "need") {
        totalNeeds += item.amout;
      } else {
        totalWants += item.amout;
      }
    });

    let totalExpenses = totalSaves + totalWants + totalNeeds;

    let percentageWant = ((totalWants / totalExpenses) * 100).toFixed(0);
    let percentageNeed = ((totalNeeds / totalExpenses) * 100).toFixed(0);
    let percentageSave = ((totalSaves / totalExpenses) * 100).toFixed(0);

    let finalGuideDataExpenses = [
      {
        count: totalWants,
        y: `${percentageWant}%`,
      },
      {
        count: totalSaves,
        y: `${percentageSave}%`,
      },
      {
        y: `${percentageNeed}%`,
        count: totalNeeds,
      },
    ];
    let finalGuideDataExpensesSummary = [
      {
        id: 1,
        name: "Wants",
        count: totalWants,
        y: `${percentageWant}%`,
        color: COLORS.PRIMARY,
      },
      {
        id: 2,
        name: "Saves",
        count: totalSaves,
        y: `${percentageSave}%`,
        color: COLORS.SECONDARY,
      },
      {
        id: 3,
        name: "Needs",
        y: `${percentageNeed}%`,
        count: totalNeeds,
        color: COLORS.RED,
      },
    ];

    return {
      finalGuideDataExpenses,
      finalGuideDataExpensesSummary,
    };
  };

  const renderNavigationToTheDetailsCategoryChoosen = (name) => {
    navigation.navigate("Details", { names: name });
  };

  const renderGuideExpensesSummary = () => {
    let { finalGuideDataExpensesSummary } = processCategoryDataToDisplay();
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
          renderNavigationToTheDetailsCategoryChoosen(item.name);
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
          {console.log(item.name, "klsdqjf")}
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
            +{item.count} DH - {item.y}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View>
        <View>
          <FlatList
            data={finalGuideDataExpensesSummary}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </View>
    );
  };

  let { finalGuideDataExpenses } = processCategoryDataToDisplay();
  let colorScales = [COLORS.PRIMARY, COLORS.SECONDARY, COLORS.RED];

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      {/* <Button
        title="goToWants "
        onPress={() => {
          navigation.navigate("Wants");
        }}
      ></Button> */}
      <ScrollView style={styles.page}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Guide 50_30_20</Text>
          <Image
            style={styles.profileImage}
            source={require("../../../assets/images/elon_musk.jpg")}
          />
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
            <VictoryPie
              data={finalGuideDataExpenses}
              labels={(datum) => {
                return datum.datum.y;
              }}
              radius={SIZES.BASE * 4}
              innerRadius={60}
              labelRadius={({ innerRadius }) =>
                (SIZES.BASE * 4 + innerRadius) / 2.5
              }
              style={{
                labels: {
                  fill: "black",
                  fontWeight: "bold",
                  fontSize: SIZES.BASE * 2,
                },
                parent: {
                  // ...chartCategoriesStyle.shadow,
                },
              }}
              colorScale={colorScales}
            />
          </View>
          {renderGuideExpensesSummary()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: COLORS.LIGHTGREY,
//     flex: 1,
//   },
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 40,
//     marginHorizontal: 20,
//   },
//   shadow: {
//     backgroundColor: COLORS.LIGHTGREY,
//     height: 320,
//     width: 20,
//     marginLeft: 195,
//     opacity: 0.5,
//     marginTop: 20,
//     borderRadius: 20,
//     position: "absolute",
//   },
//   textStorage: {
//     color: COLORS.GREEN,
//     fontSize: 15,
//   },
//   btn: {
//     alignSelf: "center",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 30,
//     backgroundColor: COLORS.SECONDARY,
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     borderRadius: 2,
//     borderWidth: 3,
//     borderColor: "#f04946",
//   },
//   textFree: {
//     color: COLORS.LIGHT,
//   },
//   circle: {
//     width: 10,
//     height: 15,
//     borderRadius: 3,
//     marginHorizontal: 10,
//   },
//   textUsed: {
//     color: COLORS.PRIMARY,
//   },
//   labelContainer: {
//     flexDirection: "row",
//     alignSelf: "center",
//     alignItems: "center ",
//     marginTop: 20,
//   },
//   av: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginLeft: 4,
//   },
//   topText: {
//     alignItems: "center",
//     marginHorizontal: 20,
//     flexDirection: "row",
//     marginTop: 40,
//   },
//   textFile: {
//     fontSize: 34,
//     color: COLORS.RED,
//     flex: 1,
//   },
// });

export default Guide_50_30_20_Summary;
