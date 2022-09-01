import { FontAwesome } from "@expo/vector-icons";

import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { globalStyles } from "../../global/styles/globalStyles";
import { signUpStyle as styles } from "./style";
import { Formik } from "formik";
import * as yup from "yup";
import COLORS from "../../consts/color";
import Input from "../../components/input/index";
import StatusBarCustomized from "../../components/statusBar";
export default SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const renderInputs = () => {
    const ReviewSchema = yup.object({
      title: yup.string().required().min(4),
      body: yup.string().required().min(8),
      rating: yup
        .string()
        .required()
        .test("is-num-1-5", "Rating must be a number 1 -5 ", (val) => {
          return parseInt(val) < 6 && parseInt(val) > 0;
        }),
    });

    return (
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          // addReview(values);
        }}
      >
        {(props) => (
          <View>
            <Input
              nameIcon="ios-mail"
              value={email}
              placeholder="you@email.com"
              isPassword={false}
              onChangeText={(value) => setEmail(value)}
            />

            <Input
              nameIcon="person"
              value={username}
              placeholder="type your username here"
              isPassword={false}
              onChangeText={(value) => setUsername(value)}
            />

            <Input
              nameIcon="ios-calendar"
              value={birthDate}
              placeholder="type your birthDate Here"
              isPassword={false}
              onChangeText={(value) => setBirthDate(value)}
            />

            <Input
              nameIcon="arrow-forward-circle-sharp"
              value={city}
              placeholder="type your city here"
              isPassword={false}
              onChangeText={(value) => setCity(value)}
            />

            <Input
              nameIcon="md-lock-closed"
              value={password}
              placeholder="password must contain at least 6 chars"
              isPassword={true}
              onChangeText={(value) => setPassword(value)}
            />

            <Input
              nameIcon="md-lock-closed"
              value={confirmPassword}
              placeholder="password must contain at least 6 chars"
              isPassword={true}
              onChangeText={(value) => setConfirmPassword(value)}
            />
          </View>
        )}
      </Formik>
    );
  };

  // this is for showing the buttons of google and facebook sign up
  const renderSocials = () => {
    return (
      <>
        <Text style={styles.divider}>or</Text>
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
      </>
    );
  };

  // this is for the button of the sign in
  const renderActions = () => {
    const isValid = email && password;
    return (
      <>
        <TouchableOpacity
          disabled={!isValid}
          style={[styles.button, styles.signup]}
        >
          <Text style={styles.textButtonSignUp}>Register</Text>
        </TouchableOpacity>
        {renderGoToSignInPage()}
      </>
    );
  };

  const renderGoToSignInPage = () => {
    return (
      <View style={styles.containerGoToSignInPage}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textGoToSignInPage}>Please Sign In Here!</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      <StatusBarCustomized />
      <Text style={styles.title}>REGISTER NOW</Text>
      {renderInputs()}
      {renderSocials()}
      {renderActions()}
    </View>
  );
};
