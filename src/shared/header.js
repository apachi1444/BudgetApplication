import React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
export default function Header({ navigation, title }) {
  const openMenu = ({ navigation, title }) => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.headerTitle}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 3,
    color: "#333",
  },
  headerTitle: {
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
