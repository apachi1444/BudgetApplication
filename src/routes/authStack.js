import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";
import WelcomePage from "../screens/welcomePage/welcomePage";
import Login from "./../screens/login/login";
import SignUp from "./../screens/signup/signup";
import ProfileUserStack from "./profileUserStack";
import { DrawerNavigator } from "./drawerNavigationStack";
import { findUser } from "../global/async-storage";
const AuthStack = createNativeStackNavigator();

export default function () {
  const [loggedIn, setLoggedIn] = useState(true);
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

  return (
    <AuthStack.Navigator>
      {loggedIn == false && (
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
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </AuthStack.Navigator>
  );
}
