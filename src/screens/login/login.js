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
  Image,
} from "react-native";
import { loginStyle as styles } from "./loginStyle";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const count = useSelector((state) => {
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
        <View
          onStartShouldSetResponder={() => {
            navigation.navigate("UserProfile");
          }}
          disabled={!isValid}
          style={[styles.button, styles.signin]}
        >
          <View>
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
          </View>
        </View>
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
