import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../../global/styles/globalStyles";
const Login = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>LoginPage Page</Text>
      <Button
        title="goToSignUp"
        onPress={navigation.navigate("SignUpPage")}
      ></Button>
    </View>
  );
};

export default Login;
