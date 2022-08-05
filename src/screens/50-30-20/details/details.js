import React, { useState } from "react";
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
import { ScrollView } from "react-native-gesture-handler";

import { guideData } from "../../../consts/guideData";

const Details = ({ navigation, route }) => {
  let { item } = route.params;
  const [mode, setMode] = useState("chart");

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

  const renderHistoryCategory = () => {
    let allHistory = selectedCategory ? selectedCategory.history : [];
    // const [historyItems, setHistoryItems] = useState([allHistory]);
    const renderHistoryItem = (item) => {
      const { type } = item;

      const renderArrowAndImageAndTitleAndPriceAndDate = () => {
        const renderImageAndTitle = () => {
          return (
            <View style={historyStyle.containerCheckboxAndImageAndTitle}>
              {/* <Avatar.Image
                source={require("../../assets/images/elon_musk.jpg")}
                size={SIZESS.body1 * 2}
                style={{
                  marginRight: 4,
                }}
              /> */}
              <Text
                style={{
                  // color: type == "Spending" ? COLORS.RED : COLORS.GREEN,
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
                  color: type == "Spending" ? COLORS.RED : COLORS.GREEN,
                  fontWeight: "bold",
                  fontSize: SIZES.BASE * 3,
                }}
              >
                {item.total} DH
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
                    // color: type == "Spending" ? COLORS.RED : COLORS.GREEN,
                    fontWeight: "bold",
                    fontSize: SIZES.BASE * 2.4,
                    fontWeight: "bold",
                  }}
                >
                  {item.date}
                </Text>
                <Ionicons
                  name="calendar-outline"
                  style={{
                    // color: type == "Spending" ? COLORS.RED : COLORS.GREEN,
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
            const id = item.id;
            console.log(item.id);
            console.log(selectedCategory);
            selectedCategory.history.filter((item) => {
              console.log(item);
              item.id === id;
            });
          };
          const updateItem = () => {};
          const renderIcon = (name) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor:
                    type == "Spending" ? COLORS.RED : COLORS.GREEN,
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
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                bottom: "-41%",
                alignSelf: "center",
                right: "4%",
              }}
            >
              {renderIcon("trash")}
              {renderIcon("pencil-outline")}
            </View>
          );
        };
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: SIZES.BASE * 2,
              backgroundColor: COLORS.BOTTOMBAR,
              padding: SIZES.BASE * 2.5,
              borderRadius: SIZES.BASE * 3.5,
              // ...historyStyle.shadowProp,
            }}
          >
            <View>
              <Ionicons
                name={
                  type == "Income" ? "arrow-up-circle" : "arrow-down-circle"
                }
                color={type == "Spending" ? COLORS.RED : COLORS.GREEN}
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
        {allHistory.length > 0 && (
          <View
            style={{
              borderWidth: 0.1,
            }}
          >
            {allHistory.map((item, index) => {
              return renderHistoryItem(item);
            })}
          </View>
        )}
        {allHistory.length == 0 && (
          <View>
            <Text
              style={{
                alignSelf: "center",
                marginTop: SIZES.BASE * 2,
                fontWeight: "bold",
                fontSize: SIZES.BASE * 3,
                marginBottom: SIZES.BASE * 6,
              }}
            >
              No Results for the moment
            </Text>
          </View>
        )}
      </View>
    );
  };

  const renderRectangleDetailsChart = () => {
    const renderTitleAndIcon = () => {
      return (
        <View style={detailsStyle.titleAndIcon}>
          <Entypo name="dots-three-vertical" size={26} />
          <Text style={detailsStyle.title}>Details</Text>
          <View style={detailsStyle.containerSwitch}>
            <TouchableOpacity
              onPress={() => {
                setMode("chart");
              }}
              style={detailsStyle.containerButtonSwitch(
                mode == "chart" ? COLORS.PRIMARY : COLORS.WHITE
              )}
            >
              <Text style={detailsStyle.textButtonSwitch}>Chart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log(mode);
                setMode("list");
              }}
              style={detailsStyle.containerButtonSwitch(
                mode == "list" ? COLORS.PRIMARY : COLORS.WHITE
              )}
            >
              <Text style={detailsStyle.textButtonSwitch}>List</Text>
            </TouchableOpacity>
          </View>
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
      <ScrollView>
        {renderHeader()}
        {mode == "chart" && <View>{renderRectangleDetailsChart()}</View>}
        {mode == "list" && <View>{renderRectangleDetailsList()}</View>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
