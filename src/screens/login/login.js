import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  login,
  incrementByAmount,
} from "../../redux/features/user/userSlice";
import React, { useRef, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";

import COLORS from "../../consts/color";
import { globalStyles } from "../../global/styles/globalStyles";

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};

export default ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const count = useSelector((state) => {
    console.log(state);
    return state.user.count;
  });

  const dispatch = useDispatch();

  const [incrementAmount, setIncremenetAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const renderInputs = () => {
    return (
      <View>
        <View style={globalStyles.inputContainer}>
          <Ionicons
            name="ios-mail"
            size={SIZES.FONT * 1.5}
            color={COLORS.PRIMARY}
            style={globalStyles.inputIcon}
          />
          <TextInput
            ref={inputRef}
            value={email}
            placeholder="you@email.com"
            placeholderTextColor={COLORS.GREY}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={globalStyles.inputContainer}>
          <Ionicons
            name="md-lock-closed"
            color={COLORS.PRIMARY}
            size={SIZES.FONT * 1.8}
            style={globalStyles.inputIcon}
          />
          <TextInput
            secureTextEntry
            value={password}
            placeholderTextColor={COLORS.GREY}
            placeholder="password contains minimum 6chars"
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <Text style={styles.divider}>or </Text>
        {renderActions()}
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text
            style={{
              fontWeight: "500",
              letterSpacing: 0.5,
              color: COLORS.WHITE,
              backgroundColor: "red",
            }}
          >
            Increment By One
          </Text>
        </TouchableOpacity>
        <TextInput
          value={incrementAmount}
          onChangeText={(value) => setIncremenetAmount(value)}
        />
        <TouchableOpacity onPress={() => dispatch(incrementByAmount(addValue))}>
          <Text
            style={{
              fontWeight: "500",
              letterSpacing: 0.5,
              color: COLORS.WHITE,
              backgroundColor: "red",
            }}
          >
            Increment By HAHA
          </Text>
        </TouchableOpacity>
        {renderGoToSignUpPage()}
      </View>
    );
  };

  // this is for showing the buttons of google and facebook sign up
  const renderSocials = () => {
    return (
      <View style={globalStyles.social}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button,
            globalStyles.socialButton,
            globalStyles.facebook,
          ]}
        >
          <FontAwesome size={18} name="facebook" color={COLORS.WHITE} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button,
            globalStyles.socialButton,
            globalStyles.google,
          ]}
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
        {renderSocials()}
        <TouchableOpacity
          disabled={!isValid}
          style={[styles.button, styles.signin]}
        >
          {loading ? (
            <ActivityIndicator size={SIZES.FONT * 1.4} color={COLORS.WHITE} />
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate("UserProfile")}
            >
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
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </>
    );
  };

  const renderGoToSignUpPage = () => {
    return (
      <View style={styles.containerGoToSignUpPage}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.textGoToSignUpPage}>Please Sign Up Here!</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/loginImage.png")}
        style={styles.loginImage}
      />
      <Text style={[styles.title]}>Login </Text>
      {renderInputs()}
    </View>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: "97%",
    height: "28%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.BASE * 4,
    height: SIZES.BASE * 8,
    padding: SIZES.PADDING,
    marginBottom: SIZES.BASE * 2,
    backgroundColor: COLORS.PRIMARY,
    marginVertical: SIZES.BASE * 0.5,
  },
  signin: {
    borderRadius: SIZES.BASE * 2,
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
    marginVertical: SIZES.BASE * 0.003,
    textAlign: "center",
  },

  title: {
    color: COLORS.BLACK,
    fontSize: SIZES.TITLE,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: SIZES.BASE * 0.1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
