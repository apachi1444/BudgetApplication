import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { loginStyle as styles } from "./style";
import COLORS from "../../consts/color";
import { globalStyles } from "../../global/styles/globalStyles";
import Input from "../../components/input/index";
import { handleSubmit } from "../../global/async-storage/index";
import { addUser } from "../../redux/features/user/userInformations";
import { useDispatch } from "react-redux";
import { displayEmptyContentInput } from "../../components/alertEmptyContentInput";
export default ({ navigation }) => {
  const [email, setEmail] = useState("");
  // var db = openDatabase(
  //   {
  //     name: "mine",
  //     location: "default",
  //     createFromLocation: "~mine.db",
  //   },
  //   () => {},
  // );

  // useEffect(() => {
  //   db.transaction(function (txn) {
  //     txn.executeSql(
  //       "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
  //       [],
  //       function (tx, res) {
  //         if (res.rows.length == 0) {
  //           txn.executeSql("DROP TABLE IF EXISTS table_user", []);
  //           txn.executeSql(
  //             "CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))",
  //             []
  //           );
  //         }
  //       }
  //     );
  //   });
  // }, []);

  // useLayoutEffect(() => {
  //   (async () => {
  //     const value = await findUser();
  //     const obj = JSON.parse(value);
  //     if (obj.email != "") {
  //       navigation.navigate("loggedIn");
  //     }
  //   })();
  // }, []);

  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
            handleSubmit(email, password);
            if (email == "" || password == "") {
              displayEmptyContentInput();
            } else {
              dispatch(
                addUser({
                  email,
                })
              );
              navigation.navigate("loggedIn");
            }
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
