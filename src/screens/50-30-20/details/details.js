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
  const [show, setShow] = useState(true);

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
        <View style={detailsStyle.containerSummary}>
          <FlatList
            data={data}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={true}
            // numColumns={2}
          />
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
    const renderHistoryItem = (item) => {
      const renderTitleAndPriceAndDate = () => {
        const renderImageAndTitle = () => {
          return (
            <View style={detailsStyle.containerCheckboxAndImageAndTitle}>
              <Text style={detailsStyle.titleHistoryItem}>haha</Text>
            </View>
          );
        };
        const renderPrice = () => {
          return (
            <View>
              <Text style={detailsStyle.priceHistoryItem}> 500 DH</Text>
            </View>
          );
        };
        const renderDate = () => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "2%",
              }}
            >
              <Text style={detailsStyle.dateHistoryItem}>12/08/2023</Text>
              <Ionicons
                name="calendar-outline"
                style={detailsStyle.iconDateHistoryItem}
              />
            </View>
          );
        };
        const renderEditAndDeleteButton = () => {
          const deleteItem = () => {};
          const updateItem = () => {};
          const renderIcon = (name) => {
            return (
              <TouchableOpacity
                style={detailsStyle.containerIcon}
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
            <View style={detailsStyle.containerEditDeleteButtonHistoryItem}>
              {renderIcon("trash")}
              {renderIcon("pencil-outline")}
            </View>
          );
        };
        return (
          <View style={detailsStyle.containerHistoryItemWithButtons}>
            <View style={detailsStyle.containerHistoryItem}>
              {renderImageAndTitle()}
              {renderPrice()}
              {renderDate()}
            </View>
            {renderEditAndDeleteButton()}
          </View>
        );
      };
      return (
        <View>
          <View>{renderTitleAndPriceAndDate()}</View>
        </View>
      );
    };
    const renderTitleHistoryAndFilter = () => {
      return (
        <>
          <View style={detailsStyle.containerHistoryTitleAndFilterIcon}>
            <View style={detailsStyle.containerHistoryTitle}>
              <Ionicons name="briefcase" style={detailsStyle.iconBriefcase} />
              <Text style={detailsStyle.historyTitle}>History</Text>
            </View>
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Ionicons
                name={
                  show == false
                    ? "arrow-down-circle-outline"
                    : "arrow-up-circle-outline"
                }
                size={30}
                color={COLORS.PRIMARY}
              />
            </TouchableOpacity>
          </View>
          {show && (
            <View style={detailsStyle.containerChoosenDate}>
              <Text style={detailsStyle.textDateChoosen}>12/07/2022</Text>
              <Ionicons name="filter" size={25} color={COLORS.PRIMARY} />
            </View>
          )}
        </>
      );
    };
    return (
      <>
        {renderTitleHistoryAndFilter()}

        {show && (
          <View style={detailsStyle.containerHistoryDetails}>
            {renderHistoryItem()}
            {renderHistoryItem()}
          </View>
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <ScrollView>
        {renderHeader()}
        {renderRectangleDetailsChart()}
        {renderRectangleDetailsList()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
