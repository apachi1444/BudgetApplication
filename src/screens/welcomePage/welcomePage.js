import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../../global/styles/globalStyles";
const WelcomePage = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Page</Text>
      <Button
        title="Start Now"
        onPress={navigation.navigate("AuthStack")}
      ></Button>
    </View>
  );
};

export default WelcomePage;
