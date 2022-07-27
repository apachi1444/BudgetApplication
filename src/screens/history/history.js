import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../../consts/color";
import { SIZES } from "./../../consts/theme";

import Grid from "react-native-grid-component";

import { globalStyles } from "../../global/styles/globalStyles";
import { historyStyle } from "./historyStyle";

const renderProfileInformations = () => {
  return (
    <View style={historyStyle.containerProfileInformations}>
      <Avatar.Image
        source={require("../../assets/images/elon_musk.jpg")}
        size={85}
        style={historyStyle.imageProfile}
      />
      <View>
        <View>
          <Text style={historyStyle.nameUser}>Yessine Jaoua</Text>
        </View>
        <View>
          <Text style={historyStyle.titleDashboard}>
            Spendings And Incomes Dashboard
          </Text>
        </View>
      </View>
    </View>
  );
};

import styles from "./../login/loginStyle";

const renderOneCircle = (name, price) => {
  var color;

  switch (name) {
    case "Incomes":
      color = COLORS.GREEN;
      break;
    case "Budget":
      color = COLORS.PRIMARY;
      break;
    case "Spendings":
      color = COLORS.RED;
      break;

    default:
      break;
  }
  return (
    <View>
      <View style={historyStyle.containerImageBudget(color)}>
        <Image
          source={require("../../assets/images/welcomePage.png")}
          style={historyStyle.imageBudget}
        />
        <View style={historyStyle.viewTextInside}>
          <Text style={historyStyle.textInside(color)}>{price}DH</Text>
        </View>
      </View>
      <View style={historyStyle.viewMyBudgetTitle(color)}>
        <Text style={historyStyle.myBudgetTitle(color)}>{name}</Text>
      </View>
    </View>
  );
};

const renderThreeCirclesIncomesBudgetAndSpendings = () => {
  return (
    <View style={historyStyle.containerThreeCircles}>
      {renderOneCircle("Incomes", 0)}
      {renderOneCircle("Budget", 1000)}
      {renderOneCircle("Spendings", 2000)}
    </View>
  );
};

const History = ({ navigation }) => {
  const renderCategoryHeaderSection = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="grid" style={historyStyle.categoryIcon} />
        <View>
          <Text>Categories</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <View style={historyStyle.wholeContainer}>
        {renderProfileInformations()}
        {renderThreeCirclesIncomesBudgetAndSpendings()}
        {renderCategoryHeaderSection()}
        <TouchableOpacity
          style={historyStyle.buttonGoToCategoryList}
          title="goToChart"
          onPress={() => navigation.navigate("charts")}
        >
          <Text>See More Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default History;
