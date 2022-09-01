import React, { useState, useRef } from "react";
import { useLayoutEffect } from "react";
import {
  Animated,
  View,
  Text,
  Image,
  TouchableOpacity,
  PanResponder,
} from "react-native";

import { displayData } from "../../global/async-storage";

import { welcomePageStyle } from "./style";
import StatusBarCustomized from "../../components/statusBar";
import { useDispatch, useSelector } from "react-redux";
import { renderAppVisisted } from "../../redux/features/user/userInformations";
const WelcomePage = ({ navigation }) => {
  // useLayoutEffect(() => {
  //   (async () => {
  //     await AsyncStorage.clear();
  //     const value = await findUser();
  //     const obj = JSON.parse(value);
  //     if (obj.email != "") {
  //       navigation.navigate("AuthStack");
  //     }
  //   })();
  // }, []);

  const dispatch = useDispatch();
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const opacityRef = useRef(new Animated.Value(0)).current;

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (_, gesture) => {
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {},
    })
  ).current;

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
      <StatusBarCustomized />
      <View style={welcomePageStyle.firstContainer}>
        <View>
          <Animated.View style={value.getLayout()}>
            <Animated.View
              style={[
                {
                  width: 100,
                  height: 100,
                  backgroundColor: "red",
                  borderRadius: 20,
                  opacity: opacityRef,

                  // this is one method that should be called when the animation  is finished
                  // left: pan.x,
                  // top: pan.y,

                  // or
                  transform: [
                    {
                      translateX: pan.x,
                    },
                    {
                      translateY: pan.y,
                    },
                  ],
                },
                // pan.getLayout(),
              ]}
              {...panResponder.panHandlers}
            />
          </Animated.View>
          {/* <View onStartShouldSetResponder={() => moveTheBall()}>
            <Text>Click here</Text>
          </View> */}
        </View>
        <Text style={welcomePageStyle.organizeMeText}>E-Wall$T</Text>
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
          onPressIn={async () => {
            let userLoggedIn = await displayData();
            dispatch(renderAppVisisted());
            if (!userLoggedIn) {
              navigation.navigate("AuthStack");
            } else {
              navigation.navigate("AuthStack");
            }
          }}
          style={welcomePageStyle.buttonInsideSecondContainer}
        >
          <Text>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;
