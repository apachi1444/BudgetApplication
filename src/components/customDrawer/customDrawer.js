import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { SIZES } from "../../consts/theme";
import { windowHeight, windowWidth } from "../../utils/dimensions";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { CustomDrawerStyle } from "./customDrawerStyle";
import { globalStyles } from "../../global/styles/globalStyles";
import COLORS from "../../consts/color";
const CustomDrawer = (props) => {
  const [isEnabledSettings, setIsEnabledSettings] = useState(false);

  const toggleSwitch = () => {
    setIsEnabledSettings(!isEnabledSettings);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const logOut = async () => {
    await AsyncStorage.clear();
    navigation.popUp();
  };

  const showLanguages = () => {
    Alert.alert(
      "Change Applicatino Language",
      "There is only ENGLISH for the moment",
      [
        {
          text: "Try later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.PRIMARY }}
      >
        <ImageBackground style={{ padding: 20 }}>
          <Image
            source={require("../../assets/images/elon_musk.jpg")}
            style={{
              opacity: 1,
              alignSelf: "center",
              borderRadius: windowHeight * 0.2,
              height: windowHeight * 0.2,
              width: windowWidth * 0.4,
            }}
          ></Image>
          <Text
            style={{
              fontFamily: "Roboto",
              alignSelf: "center",
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: SIZES.BASE * 2,
            }}
          >
            JAOUA YESSINE
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                alignSelf: "center",
                fontSize: 20,
                marginRight: SIZES.BASE * 2,
              }}
            >
              200 dollar
            </Text>
            <Ionicons name="cash" size={25} color={COLORS.WHITE} />
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            borderColor: COLORS.RED,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: SIZES.BASE * 6,
          borderTopWidth: 1,
          borderTopColor: "black",
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              marginBottom: 10,
            }}
          >
            <Ionicons name="bulb" size={30} />
            <View style={globalStyles.flexRowAndAlignCenter}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                }}
              >
                Dark Mode
              </Text>
              <View
                style={[
                  CustomDrawerStyle.toggleSetting,
                  {
                    backgroundColor: isEnabledSettings
                      ? COLORS.GREY
                      : COLORS.PRIMARY,
                  },
                ]}
                onStartShouldSetResponder={toggleSwitch}
              >
                <View
                  style={[
                    CustomDrawerStyle.circleInsideToggleSetting,
                    {
                      left: isEnabledSettings ? "10%" : "55%",
                    },
                  ]}
                ></View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
            }}
            onStartShouldSetResponder={() => showLanguages()}
          >
            <Ionicons name="language" size={30} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 18,
                  marginHorizontal: 10,
                  marginLeft: 20,
                }}
              >
                English
              </Text>
              <FontAwesome5 name="arrow-right" />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            marginTop: 10,
          }}
          onStartShouldSetResponder={logOut}
        >
          <Ionicons name="log-out-outline" size={30} />
          <Text
            style={{
              fontSize: 18,
              marginLeft: 20,
            }}
          >
            Log Out
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
