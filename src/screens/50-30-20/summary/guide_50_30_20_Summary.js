import React from "react";
import { Text, View, Button } from "react-native";

const Guide_50_30_20_Summary = ({ navigation }) => {
  return (
    <View>
      <Text>This is the page of 50_30_20 Summary</Text>
      <Button
        title="goToWants "
        onPress={() => {
          navigation.navigate("Wants");
        }}
      ></Button>
    </View>
  );
};

export default Guide_50_30_20_Summary;
