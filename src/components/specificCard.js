import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import COLORS from "../consts/color";
import { globalStyles } from "../global/styles/globalStyles";
import Card from "../shared/card";
const SpecificCard = (props) => {
  const { title, body, image, date, price, rating, key } = props.item;
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
          <TouchableOpacity onPress={() => props.deleteItem(key)}>
            <FontAwesome name="trash" size={28} color={COLORS.PRIMARY} />
          </TouchableOpacity>
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
