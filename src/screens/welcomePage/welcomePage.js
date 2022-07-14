import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../global/styles/globalStyles";
import { windowWidth, windowHeight } from "../../utils/dimensions";
import COLORS from "./../../consts/color";
const WelcomePage = ({ navigation }) => {
  return (
    <View style={welcomePageStyle.container}>
      <View style={welcomePageStyle.firstContainer}>
        <Text style={welcomePageStyle.organizeMeText}>Organize Me</Text>
        <Image
          source={require("../../assets/images/welcomePage.png")}
          style={{
            width: windowWidth * 0.6,
            height: windowHeight * 0.25,
          }}
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

const SIZES = {
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  fontSizeInsideSecondContainer: 25,
};

const welcomePageStyle = StyleSheet.create({
  container: {},
  organizeMeText: {
    fontSize: 25,
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    marginBottom: 50,
  },
  firstContainer: {
    alignItems: "center",
    height: windowHeight * 0.5,
    paddingTop: 55,
  },
  secondContainer: {
    backgroundColor: COLORS.PRIMARY,
    height: windowHeight * 0.5,
    borderTopLeftRadius: SIZES.borderTopLeftRadius,
    borderTopRightRadius: SIZES.borderTopRightRadius,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textInsideSecondContainer: {
    fontSize: SIZES.fontSizeInsideSecondContainer,
    color: "white",
  },
  buttonInsideSecondContainer: {
    marginTop: 30,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 25,
    padding: 15,
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.25,
  },
});

export default WelcomePage;
