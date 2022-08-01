import { Ionicons, FontAwesome } from "@expo/vector-icons";

import React, {
  useState,
  useCallback,
  useMemo,
  createRef,
  useRef,
  forwardRef,
} from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";

import { windowHeight, windowWidth } from "../../utils/dimensions";

import COLORS from "../../consts/color";
import { Avatar } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import BottomPopUp from "../../components/bottomPopUp/bottomPopUp";
import AnimatedBottomSheet from "../../components/animatedBottomSheet/animatedBottomSheet";

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};

export default EditProfile = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  // the percentage of the screen that we want to take
  // const snapPoints = ["10%", "60%"];

  const renderInputs = () => {
    return (
      <SafeAreaView>
        {/* <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          borderRadius={10}
          renderContent={renderContent}
          enabledGestureInteraction={true}
          enabledBottomInitialAnimation={true}
          enabledManualSnapping={true}
          onCloseEnd={() => setIsOpen(false)}
        /> */}

        <View style={[editProfileStyle.imageContainer]}>
          <Avatar.Image
            source={require("../../assets/images/facebook.png")}
            size={130}
            style={editProfileStyle.imageProfile}
          />
          <TouchableOpacity
          // onPress={handlePresentModalPress}
          // onPress={onShowPopUp}
          // onPress={() => sheetRef.current.snapTo(0)}
          >
            <FontAwesome name="camera" size={22} />
          </TouchableOpacity>
          {/* <BottomPopUp innerRef={console.log("jkhjk", popupRef.current)} /> */}
          {/* <BottomPopUp innerRef={(target) => (popupRef = target)} /> */}
          {/* <Button onPress={handleBottomPopUp} title="handleBottomPopUp" /> */}
        </View>
        <View>
          {/* this is for the username */}

          <Text style={editProfileStyle.titleInput}>USERNAME</Text>

          <View style={editProfileStyle.inputContainer}>
            <Ionicons
              name="ios-person"
              size={SIZES.FONT * 1.5}
              color={COLORS.PRIMARY}
              style={editProfileStyle.inputIcon}
            />
            <View style={editProfileStyle.input}>
              <TextInput
                value={username}
                placeholder="Type Your UserName Here"
                placeholderTextColor={COLORS.GREY}
                onChangeText={(value) => setUsername(value)}
              />
            </View>
          </View>

          {/* this is for the email */}

          <Text style={editProfileStyle.titleInput}>USERNAME</Text>

          <View style={editProfileStyle.inputContainer}>
            <Ionicons
              name="ios-mail"
              size={SIZES.FONT * 1.5}
              color={COLORS.PRIMARY}
              style={editProfileStyle.inputIcon}
            />
            <View style={editProfileStyle.input}>
              <TextInput
                value={email}
                placeholder="you@email.com"
                placeholderTextColor={COLORS.GREY}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
          </View>

          {/* this is for the birthDate  */}

          <Text style={editProfileStyle.titleInput}>USERNAME</Text>
          <View style={editProfileStyle.inputContainer}>
            <Ionicons
              name="person"
              size={SIZES.FONT * 1.5}
              color={COLORS.PRIMARY}
              style={editProfileStyle.inputIcon}
            />
            <View style={editProfileStyle.input}>
              <TextInput
                value={city}
                placeholder="choose your city"
                placeholderTextColor={COLORS.GREY}
                onChangeText={(value) => setCity(value)}
              />
            </View>
          </View>
          <TouchableOpacity
            disabled={true}
            style={[editProfileStyle.button, editProfileStyle.signin]}
          >
            <Text
              style={{
                fontWeight: "500",
                letterSpacing: 0.5,
                color: COLORS.WHITE,
                backgroundColor: "transparent",
              }}
            >
              UPDATE PROFILE
            </Text>
          </TouchableOpacity>
        </View>
        {/* <BottomSheet
          ref={sheetRef}
          snapPoints={[450, 300, 0]}
          borderRadius={10}
          renderContent={renderContent}
        /> */}
      </SafeAreaView>
    );
  };

  return <View style={editProfileStyle.container}>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    backgroundColor: "red",
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "red",
    flex: 1,
    height: 500,
  },
});

const editProfileStyle = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cameraIcon: {
    marginLeft: "-7%",
    marginTop: "5%",
    borderRadius: windowHeight * 0.05,
    borderColor: COLORS.WHITE,
    borderWidth: 3,
    height: windowHeight * 0.035,
  },

  imageProfile: {
    borderRadius: windowHeight * 0.3,
    borderColor: "rgba(255, 255, 0, .9)",
    borderWidth: 2,
    height: windowWidth * 0.3,
    width: windowWidth * 0.3,
    marginBottom: "15%",
  },
  titleInput: {
    paddingBottom: SIZES.BASE * 2,
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.BASE * 4,
    height: SIZES.BASE * 8,
    padding: SIZES.PADDING,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "10%",
    paddingVertical: SIZES.PADDING * 2,
  },
  divider: {
    color: COLORS.BLACK,
    fontSize: SIZES.TITLE,
    marginBottom: SIZES.BASE * 2,
    textAlign: "center",
  },
  facebook: {
    backgroundColor: COLORS.FACEBOOK,
  },
  google: {
    backgroundColor: COLORS.GOOGLE,
  },
  input: {
    padding: SIZES.PADDING * 1.5,
    paddingLeft: SIZES.BASE * 7.5,
    fontSize: SIZES.FONT,
    backgroundColor: COLORS.WHITE, // "rgba(255, 255, 255, 0.5)",
    borderWidth: 0,
    borderRadius: SIZES.BASE * 2.5,
  },
  inputContainer: {
    marginBottom: SIZES.PADDING * 1.2,
  },
  inputIcon: {
    left: SIZES.BASE * 2.8,
    position: "absolute",
    top: SIZES.BASE * 3.68,
    zIndex: 1,
  },
  passwordIcon: {
    top: SIZES.BASE * 2.2,
  },
  signin: {
    borderRadius: SIZES.BASE * 2,
    backgroundColor: COLORS.PRIMARY,
    marginVertical: SIZES.BASE * 3,
    marginBottom: SIZES.BASE * 2,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: SIZES.BASE * 0.2,
  },
  socialButton: {
    height: SIZES.BASE * 8,
    marginHorizontal: SIZES.BASE * 2,
    width: SIZES.BASE * 8,
  },
  title: {
    color: COLORS.BLACK,
    fontSize: SIZES.TITLE,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: SIZES.BASE * 1.2,
  },
  containerGoToSignUpPage: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textGoToSignUpPage: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    marginHorizontal: SIZES.BASE * 1,
  },
});
