import React from "react";
import { View, Text, Button } from "react-native";

const ChartCategories = ({ navigation }) => {
  return (
    <View>
      <Text>Hahah this is the charts of all categories</Text>
      <Text>
        this is will be the list of all categories and their stats of course
      </Text>

      <Button
        title="Go To Food Category"
        onPress={() => {
          navigation.navigate("food-category");
        }}
      ></Button>
    </View>
  );
};

export default ChartCategories;
