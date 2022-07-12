import { Ionicons, FontAwesome } from "@expo/vector-icons";

import React, { useState, useCallback } from "react";
import {
  Alert,
  Text,
  TextInput,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const COLORS = {
  WHITE: "#FFF",
  BLACK: "#000",
  PRIMARY: "#9C7DE4",
  BLUE: "#4856B7",
  GREY: "#AFAFAF",
  GOOGLE: "#DC4E41",
  FACEBOOK: "#3A5896",
};

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};

export default () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("contact@react-ui-kit.com");
  const [password, setPassword] = useState("subscribe");

  const renderInputs = () => {
    return (
      <View>
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
              placeholderTextColor={COLORS.BLACK}
              onChangeText={(value) => setEmail(value)}
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
              value={password}
              placeholderTextColor={COLORS.BLACK}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>
        <Text style={styles.divider}>or</Text>
        {renderActions()}
      </View>
    );
  };

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

  const renderActions = () => {
    const isValid = email && password;
    return (
      <>
        {renderSocials()}
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
              Login
            </Text>
          )}
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: "center" }]}>Login</Text>
      {renderInputs()}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: SIZES.BASE * 4,
    height: SIZES.BASE * 8,
    justifyContent: "center",
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
    marginVertical: SIZES.BASE * 2,
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
    borderRadius: SIZES.BASE * 2,
  },
  inputContainer: {
    marginBottom: SIZES.PADDING * 2,
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
    backgroundColor: COLORS.PRIMARY,
    marginVertical: SIZES.BASE * 3,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: SIZES.BASE * 3,
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
    marginBottom: SIZES.BASE,
  },
});
