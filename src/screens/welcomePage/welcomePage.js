import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowWidth, windowHeight } from "../../utils/dimensions";
import { welcomePageStyle } from "./welcomePageStyle";
const WelcomePage = ({ navigation }) => {
  return (
    <View style={welcomePageStyle.container}>
      <View style={welcomePageStyle.firstContainer}>
        <Text style={welcomePageStyle.organizeMeText}>Organize Me</Text>
        <Image
          source={require("../../assets/images/welcomePage.png")}
          style={welcomePageStyle.imageLogin}
        />
      </View>
      <View style={welcomePageStyle.secondContainer}>
        <Text style={welcomePageStyle.textInsideSecondContainer}>
          Welcome To Our Application
        </Text>
        <Button
          title="haha"
          style={welcomePageStyle.buttonInsideSecondContainer}
          onPress={() => navigation.navigate("AuthStack")}
        />
        <TouchableOpacity
          onPressIn={() => navigation.navigate("AuthStack")}
          style={welcomePageStyle.buttonInsideSecondContainer}
        >
          <Text>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;
