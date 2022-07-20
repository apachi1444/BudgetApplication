import React from "react";
import { View, Text, Button } from "react-native";
import FoodSubCategoryDetails from "./detailsSubCategories/foodSubCategoriesDetails";

const FoodSubCategories = ({ navigation }) => {
  return (
    <View>
      <Text>Hahah this is the charts of sub categories</Text>
      <Text>
        this is will be the list of all categories and their stats of course
      </Text>
      <FoodSubCategoryDetails />
    </View>
  );
};

export default FoodSubCategories;
