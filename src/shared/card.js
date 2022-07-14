import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../consts/color";
// import {MaterialIcons} from '@expo/vector-icons';
export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 9,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#222",
    shadowOpacity: 0.9,
    marginHorizontal: 4,
    marginVertical: 5,
    padding: 8,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
