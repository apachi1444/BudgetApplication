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
import Input from "../../components/input/input";

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
        <Input
          nameIcon="ios-mail"
          value={email}
          placeholder="you@email.com"
          isPassword={false}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          nameIcon="md-lock-closed"
          value={password}
          placeholder="password must contain at least 6 chars"
          isPassword={true}
          onChangeText={(value) => setPassword(value)}
        />

        <Text style={styles.divider}>or </Text>
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
        <View
          onStartShouldSetResponder={() => {
            navigation.navigate("UserProfile");
          }}
          disabled={!isValid}
          style={[styles.button, styles.signin]}
        >
          <View>
            <Text style={styles.textLoginButton}>Login</Text>
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
      {renderSocials()}
      {renderActions()}
      {renderGoToSignUpPage()}
    </View>
  );
};
