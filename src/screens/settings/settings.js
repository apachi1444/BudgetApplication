import { StyleSheet, Text, View, Alert, SafeAreaView } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { globalStyles } from "../../global/styles/globalStyles";
import COLORS from "../../consts/color";
import { windowWidth, windowHeight } from "../../utils/dimensions";

import React, { useState } from "react";
export default function Settings({ navigation }) {
  const [isEnabledSettings, setIsEnabledSettings] = useState(false);

  const toggleSwitch = () => {
    setIsEnabledSettings(!isEnabledSettings);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const showLanguages = () => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const profileStyles = StyleSheet.create({
    container: {
      paddingVertical: "26%",
      flex: 1,
    },
    containerInformationsUser: {
      alignItems: "center",
    },
    imageProfile: {
      borderRadius: windowHeight * 0.35,
      borderColor: "rgba(255, 255, 0, .9)",
      borderWidth: 2,
      height: windowWidth * 0.35,
      width: windowWidth * 0.35,
    },
    nameUser: {
      fontWeight: "800",
      fontSize: 25,
    },
    buttonEditProfile: {
      width: windowWidth * 0.5,
      backgroundColor: COLORS.SECONDARY,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: SIZES.BASE * 3,
      borderRadius: SIZES.BASE * 6,
    },
    categorySettings: {
      width: windowWidth * 0.8,
      backgroundColor: COLORS.THIRD,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: SIZES.BASE * 2,
      marginVertical: SIZES.BASE * 3,
      padding: SIZES.BASE * 3,
    },
    editProfileText: {
      fontWeight: "700",
      fontSize: 20,
      marginVertical: SIZES.BASE * 2.5,
    },

    profileDetailLine: {
      marginVertical: SIZES.BASE * 1.5,
      flexDirection: "row",
      width: windowWidth * 0.6,
    },
    iconProfileDetailLine: { position: "absolute", left: 0 },
    textInsideProfileDetailLine: {
      fontSize: SIZES.BASE * 2.8,
      fontWeight: "bold",
      position: "absolute",
      left: "15%",
    },
    lastElementOfProfileDetailLine: {
      position: "absolute",
      right: 0,
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    specificLanguageText: {
      marginHorizontal: SIZES.BASE * 1.2,
    },
    toggleSetting: {
      backgroundColor: isEnabledSettings ? COLORS.GREY : COLORS.PRIMARY,
      width: windowWidth * 0.08,
      height: windowWidth * 0.05,
      borderRadius: SIZES.BASE * 8,
      padding: SIZES.BASE * 0.48,
    },
    circleInsideToggleSetting: {
      backgroundColor: COLORS.WHITE,
      borderRadius: 20,
      width: "50%",
      height: "100%",
      position: "absolute",
      left: isEnabledSettings ? "10%" : "55%",
      top: "16.5%",
    },
    dividerOfProfileDetailsLines: {
      marginTop: SIZES.BASE * 1,
      width: windowWidth * 0.6,
      backgroundColor: COLORS.RED,
      opacity: 0.5,
      height: windowHeight * 0.001,
    },
    boxContainerIncomesAndSpendings: {
      borderBottomColor: COLORS.BLACK,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderTopColor: COLORS.BLACK,
      flexDirection: "row",
      height: windowHeight * 0.1,
    },
    simpleBox: {
      flexDirection: "row",
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      marginTop: SIZES.BASE * 15,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: SIZES.BASE * 4,
      height: SIZES.BASE * 8,
      padding: SIZES.PADDING,
      width: windowWidth * 0.7,
    },
    saveButton: {
      borderRadius: SIZES.BASE * 2,
      backgroundColor: COLORS.PRIMARY,
      marginVertical: SIZES.BASE * 3,
      marginBottom: SIZES.BASE * 2,
    },
  });

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <View style={profileStyles.container}>
        <View style={profileStyles.containerInformationsUser}>
          <Avatar.Image
            source={require("../../assets/images/elon_musk.jpg")}
            size={130}
          />
          {/* <Image
            style={profileStyles.imageProfile}
            source={require("../../assets/images/facebook.png")}
          ></Image> */}
          <Text style={profileStyles.nameUser}>Yessine Jaoua</Text>

          <View style={profileStyles.categorySettings}>
            <Text>Preferences</Text>
          </View>
          {/* // this is for the each line of profile Details */}

          <View
            style={profileStyles.profileDetailLine}
            onStartShouldSetResponder={toggleSwitch}
          >
            <Ionicons
              name="bulb"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 4.2}
            />
            <Text style={profileStyles.textInsideProfileDetailLine}>
              Dark Mode
            </Text>
            <View
              style={[
                profileStyles.lastElementOfProfileDetailLine,
                profileStyles.toggleSetting,
              ]}
            >
              <View style={profileStyles.circleInsideToggleSetting}></View>
            </View>
          </View>

          <View
            style={profileStyles.profileDetailLine}
            onStartShouldSetResponder={showLanguages}
          >
            <Ionicons
              name="language"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 4.2}
              style={profileStyles.iconProfileDetailLine}
            />
            <Text style={profileStyles.textInsideProfileDetailLine}>
              Language
            </Text>
            <View style={profileStyles.lastElementOfProfileDetailLine}>
              <Text style={profileStyles.specificLanguageText}>English</Text>
              <FontAwesome
                name="arrow-right"
                color={COLORS.PRIMARY}
                size={SIZES.BASE * 2.9}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};
