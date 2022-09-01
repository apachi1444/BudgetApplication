import { Ionicons, FontAwesome } from "@expo/vector-icons";

import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import COLORS from "../../consts/color";
import { Avatar } from "react-native-paper";
import { globalStyles } from "../../global/styles/globalStyles";
import { editProfileStyle } from "./style";
import StatusBarCustomized from "../../components/statusBar";

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

  const renderHeader = () => {
    return (
      <View style={editProfileStyle.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-undo-circle-outline" size={42} />
        </TouchableOpacity>
        <Text style={editProfileStyle.title}>Charts</Text>
        <TouchableOpacity onPress={() => navigation.open()}>
          <Image
            style={globalStyles.profileImage}
            source={require("../../assets/images/elon_musk.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderInputs = () => {
    return (
      <SafeAreaView>
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
      </SafeAreaView>
    );
  };

  return (
    <>
      <StatusBarCustomized />
      {renderHeader()}
      <View style={editProfileStyle.container}>{renderInputs()}</View>
    </>
  );
};
