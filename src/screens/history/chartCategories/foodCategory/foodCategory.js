import React from "react";
import { View, Text, Button } from "react-native";
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
} from "victory-native";
const FoodCategory = ({ navigation }) => {
  return (
    <View>
      <Text>Hahah this is the charts of food Category</Text>
      <Text>
        this is will be the list of all subCategories and their stats of course
      </Text>

      <Button
        title="Go To Food SubCategory : Shopping"
        onPress={() => {
          navigation.navigate("food-sub-categories");
        }}
      ></Button>

      <VictoryChart>
        <VictoryGroup offset={100}>
          <VictoryBar></VictoryBar>
        </VictoryGroup>
        <VictoryLegend orientation="horizontal"></VictoryLegend>
      </VictoryChart>
    </View>
  );
};

export default FoodCategory;
