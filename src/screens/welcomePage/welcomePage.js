import React, { useState } from "react";
import { Animated, View, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { welcomePageStyle } from "./welcomePageStyle";
const WelcomePage = ({ navigation }) => {
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const moveTheBall = () => {
    // 1de0b8b0218bd9634e85a3bbb9d93b4a8c87d6ed
    console.log("first");
    Animated.timing(value, {
      toValue: { x: 200, y: 200 },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={welcomePageStyle.container}>
      <View style={welcomePageStyle.firstContainer}>
        <View>
          <Animated.View>
            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: "red",
                borderRadius: 20,
              }}
            />
          </Animated.View>
          <Button title="ahah" onPress={moveTheBall}>
            <Text>Click here</Text>
          </Button>
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
