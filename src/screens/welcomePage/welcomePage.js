import React, { useState, useRef } from "react";
import { Animated, View, Text, Image, TouchableOpacity } from "react-native";
import { welcomePageStyle } from "./welcomePageStyle";
const WelcomePage = ({ navigation }) => {
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const opacityRef = useRef(new Animated.Value(0)).current;

  function moveTheBall() {
    Animated.sequence([
      Animated.timing(opacityRef, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(value, {
        toValue: { x: 100, y: 100 },
        duration: 3000,
        useNativeDriver: false,
      }),
    ]).start();
  }
  return (
    <View style={welcomePageStyle.container}>
      <View style={welcomePageStyle.firstContainer}>
        <View>
          <Animated.View style={value.getLayout()}>
            <Animated.View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "red",
                borderRadius: 20,
                opacity: opacityRef,
              }}
            />
          </Animated.View>
          <View onStartShouldSetResponder={() => moveTheBall()}>
            <Text>Click here</Text>
          </View>
        </View>
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
