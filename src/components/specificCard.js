import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { globalStyles } from "../global/styles/globalStyles";
import Card from "../shared/card";
const SpecificCard = ({ item }) => {
  const { title, body, image, date, price, rating } = item;
  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={globalStyles.semiContainer}>
          <Avatar.Image
            source={require("../assets/images/taskDone.png")}
            style={globalStyles.image}
            size={70}
          />
          <View style={globalStyles.containerPriceAndTitle}>
            <Text>{title}</Text>
            <Text style={globalStyles.priceText}>{price}</Text>
          </View>
        </View>
        <View style={globalStyles.date}>
          <FontAwesome
            name="calendar"
            size={20}
            style={globalStyles.iconDate}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18 }}> {date}</Text>
        </View>
      </Card>
    </View>
  );
};

export default SpecificCard;
