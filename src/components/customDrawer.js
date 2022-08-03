import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import COLORS from "../consts/color";
import { SIZES } from "../consts/theme";
import { windowHeight, windowWidth } from "../utils/dimensions";
import { Ionicons } from "@expo/vector-icons";
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
      <View>
        <Text>HAHAH</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;