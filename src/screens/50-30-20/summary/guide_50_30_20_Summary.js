import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { globalStyles } from "../../../global/styles/globalStyles";
const Guide_50_30_20_Summary = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <Text>This is the page of 50_30_20 Summary</Text>
      <Button
        title="goToWants "
        onPress={() => {
          navigation.navigate("Wants");
        }}
      ></Button>
    </SafeAreaView>
  );
};

export default Guide_50_30_20_Summary;
