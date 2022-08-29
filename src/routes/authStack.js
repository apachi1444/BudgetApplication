import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./../screens/login/login";
import SignUp from "./../screens/signup/signup";
import ProfileUserStack from "./profileUserStack";
import { findUser } from "../global/async-storage";
import loggedStack from "./loggedStack";
import config from "../../config";

const AuthStack = createNativeStackNavigator();

export default function () {
  // useLayoutEffect(() => {
  //   (async () => {
  //     console.log("haha");
  //     const value = await findUser();
  //     const obj = JSON.parse(value);
  //     console.log(obj, "this is the object");
  //     if (obj.email != "") {
  //       // navigation.navigate("AuthStack");
  //       setLoggedIn(true);
  //     }
  //   })();
  // }, []);
  console.log("this is the value of the config ", config.LOGGEDIN);
  return (
    <AuthStack.Navigator>
      {config.LOGGEDIN != "true" && (
        <>
          <AuthStack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: "#eee" },
            }}
          />
          <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: "#eee" },
            }}
          />
        </>
      )}
      <AuthStack.Screen
        name="loggedIn"
        component={loggedStack}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </AuthStack.Navigator>
  );
}
