import { Ionicons, FontAwesome } from "@expo/vector-icons";

import React, { useState, useCallback } from "react";
import {
  Alert,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";

import COLORS from "../../consts/color";
// import styless from "./loginStyle";

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};

export default SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const renderInputs = () => {
    return (
      <View>
        {/* this is for the username */}

        <View style={styles.inputContainer}>
          <Ionicons
            name="ios-person"
            size={SIZES.FONT * 1.5}
            color={COLORS.PRIMARY}
            style={styles.inputIcon}
          />
          <View style={styles.input}>
            <TextInput
              value={username}
              placeholder="Type Your UserName Here"
              placeholderTextColor={COLORS.GREY}
              onChangeText={(value) => setUsername(value)}
            />
          </View>
        </View>

        {/* this is for the email */}

        <View style={styles.inputContainer}>
          <Ionicons
            name="ios-mail"
            size={SIZES.FONT * 1.5}
            color={COLORS.PRIMARY}
            style={styles.inputIcon}
          />
          <View style={styles.input}>
            <TextInput
              value={email}
              placeholder="you@email.com"
              placeholderTextColor={COLORS.GREY}
              onChangeText={(value) => setEmail(value)}
            />
          </View>
        </View>

        {/* this is for the birthDate  */}

        <View style={styles.inputContainer}>
          <Ionicons
            name="ios-calendar"
            size={SIZES.FONT * 1.5}
            color={COLORS.PRIMARY}
            style={styles.inputIcon}
          />
          <View style={styles.input}>
            <TextInput
              value={birthDate}
              placeholder="choose your birthDate"
              placeholderTextColor={COLORS.GREY}
              onChangeText={(value) => setBirthDate(value)}
            />
          </View>
        </View>

        {/* this is for the city */}

        <View style={styles.inputContainer}>
          <Ionicons
            name="house"
            size={SIZES.FONT * 1.5}
            color={COLORS.PRIMARY}
            style={styles.inputIcon}
          />
          <View style={styles.input}>
            <TextInput
              value={city}
              placeholder="choose your city"
              placeholderTextColor={COLORS.GREY}
              onChangeText={(value) => setCity(value)}
            />
          </View>
        </View>

        {/* this is for the password */}

        <View style={styles.inputContainer}>
          <Ionicons
            name="md-lock-closed"
            color={COLORS.PRIMARY}
            size={SIZES.FONT * 1.8}
            style={[styles.inputIcon, styles.passwordIcon]}
          />
          <View style={styles.input}>
            <TextInput
              secureTextEntry
              value={password}
              placeholder="Enter your password..."
              placeholderTextColor={COLORS.GREY}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="md-lock-closed"
            color={COLORS.PRIMARY}
            size={SIZES.FONT * 1.8}
            style={[styles.inputIcon, styles.passwordIcon]}
          />
          <View style={styles.input}>
            <TextInput
              secureTextEntry
              value={confirmPassword}
              placeholder="Enter your password again ..."
              placeholderTextColor={COLORS.GREY}
              onChangeText={(value) => setConfirmPassword(value)}
            />
          </View>
        </View>

        {renderActions()}
      </View>
    );
  };

  // this is for showing the buttons of google and facebook sign up
  const renderSocials = () => {
    return (
      <View style={styles.social}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, styles.socialButton, styles.facebook]}
        >
          <FontAwesome size={18} name="facebook" color={COLORS.WHITE} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, styles.socialButton, styles.google]}
        >
          <FontAwesome name="google" size={18} color={COLORS.WHITE} />
        </TouchableOpacity>
      </View>
    );
  };

  // this is for the button of the sign in
  const renderActions = () => {
    const isValid = email && password;
    return (
      <>
        <TouchableOpacity
          disabled={!isValid}
          style={[styles.button, styles.signin]}
        >
          {loading ? (
            <ActivityIndicator size={SIZES.FONT * 1.4} color={COLORS.WHITE} />
          ) : (
            <Text
              style={{
                fontWeight: "500",
                letterSpacing: 0.5,
                color: COLORS.WHITE,
                backgroundColor: "transparent",
              }}
            >
              Register
            </Text>
          )}
        </TouchableOpacity>
        <Text style={styles.divider}>or</Text>
        {renderSocials()}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>REGISTER NOW</Text>
      {renderInputs()}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.BASE * 4,
    height: SIZES.BASE * 8,
    padding: SIZES.PADDING,
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: "12%",
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
    top: SIZES.BASE * 2.8,
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
