import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { globalStyles } from "../../global/styles/globalStyles";

const History = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <View>
        <Text>
          this is the main page of the history of transactions incomes and
          spendings
        </Text>
        <Button
          title="goToChart"
          onPress={() => navigation.navigate("charts")}
        />
      </View>
    </SafeAreaView>
  );
};

export default History;
