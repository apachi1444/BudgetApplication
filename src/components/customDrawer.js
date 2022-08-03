import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import COLORS from "../consts/color";
import { SIZES } from "../consts/theme";
import { windowHeight, windowWidth } from "../utils/dimensions";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.PRIMARY }}
      >
        <ImageBackground style={{ padding: 20 }}>
          <Image
            source={require("../assets/images/elon_musk.jpg")}
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
        <View style={{ backgroundColor: "white", padding: 10, flex: 1 }}>
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
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              marginBottom: 10,
            }}
          >
            <Ionicons name="bulb" size={30} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                }}
              >
                Dark Mode
              </Text>
              <View
                style={{
                  marginLeft: 15,
                  borderRadius: 40,
                  height: 26,
                  width: 40,
                  backgroundColor: COLORS.PRIMARY,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 20,
                    height: 18,
                    width: 18,
                    backgroundColor: COLORS.WHITE,
                  }}
                ></View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
            }}
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
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              marginTop: 10,
            }}
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
