import React from "react";
import { View, Text, Button } from "react-native";

const History = ({ navigation }) => {
  return (
    <View>
      <Text>
        this is the main page of the history of transactions incomes and
        spendings
      </Text>
      <Button title="goToChart" onPress={() => navigation.navigate("charts")} />
    </View>
  );
};

export default History;
