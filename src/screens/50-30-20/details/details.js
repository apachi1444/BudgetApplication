import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { VictoryPie } from "victory-native";

import { globalStyles } from "../../../global/styles/globalStyles";
import { SIZES, SIZESS } from "../../../consts/theme";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { detailsStyle } from "./detailsStyle";
import COLORS from "../../../consts/color";

const Details = ({ navigation, route }) => {
  let { item } = route.params;

  const renderHeader = () => {
    return (
      <View style={detailsStyle.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-undo-circle-outline" size={42} />
        </TouchableOpacity>
        <Text style={detailsStyle.title}>{item.name}</Text>
        <TouchableOpacity onPress={() => navigation.open()}>
          <Image
            style={detailsStyle.profileImage}
            source={require("../../../assets/images/elon_musk.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderRectangleDetailsChart = () => {
    const renderTitleAndIcon = () => {
      return (
        <View style={detailsStyle.titleAndIcon}>
          <Entypo name="dots-three-vertical" size={26} />
          <Text style={detailsStyle.title}>Details</Text>
        </View>
      );
    };

    const dataProcess = () => {
      let { normal, actual, y, label } = item;

      let percentageRemaining = (((normal - actual) / normal) * 100).toFixed(0);
      let percentageUsed = 100 - percentageRemaining;
      if (percentageUsed > 100) {
        percentageRemaining = 0;
      }

      console.log(y);
      let finalDataChart = [
        {
          id: 1,
          y: percentageRemaining == 0 ? Number(0) : Number(y),
          color: COLORS.MEDUIMGREY,
          label: `${percentageRemaining}%`,
          name: "Remaining",
          total: Number(150 - Number(y)),
        },
        {
          id: 2,
          total: Number(y),
          y: Number(percentageUsed),
          color: COLORS.SECONDARY,
          label: `${percentageUsed}%`,
          name: "Used",
        },
      ];
      return finalDataChart;
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
            labelRadius={({ innerRadius }) =>
              (SIZES.BASE * 30 + innerRadius) / 2.5
            }
            style={{
              labels: {
                fill: "black",
                fontWeight: "bold",
                fontSize: SIZES.BASE * 3.5,
              },
            }}
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
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: SIZESS.base * 1.85,
                }}
              >
                {item.total} DH - {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      };

      return (
        <View>
          <View>
            <FlatList
              data={data}
              renderItem={(item) => renderItem(item)}
              keyExtractor={(item) => `${item.id}`}
              showsVerticalScrollIndicator={true}
              // numColumns={2}
            />
          </View>
        </View>
      );
    };
    return (
      <View style={detailsStyle.containerChart}>
        {renderTitleAndIcon()}
        {chart()}
        {renderGuideExpensesSummary()}
      </View>
    );
  };

  const renderRectangleDetailsList = () => {
    return (
      <View>
        <Text>Hahahah</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      {renderHeader()}
      {renderRectangleDetailsChart()}

      {renderRectangleDetailsList()}
    </SafeAreaView>
  );
};

export default Details;
