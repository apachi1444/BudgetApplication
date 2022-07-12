import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles } from "../../global/styles/globalStyles";
const WelcomePage = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Organize Me</Text>
      <Image source={require("../../assets/images/facebook.png")} />
    </View>
  );
};

export default WelcomePage;
