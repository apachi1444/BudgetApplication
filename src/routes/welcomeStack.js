import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { findUser } from "../global/async-storage";
import authStack from "./authStack";
import welcomePageStack from "./welcomePageStack";

const WelcomeStack = createNativeStackNavigator();

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

  console.log("this is the value of the boolean ", loggedIn);

  return (
    <WelcomeStack.Navigator>
      {loggedIn == false && (
        <WelcomeStack.Screen
          name="WelcomePageStack"
          component={welcomePageStack}
          options={{
            // headerTitle: () => <Header title="About YessineZone" />,
            headerShown: false,
            headerStyle: { backgroundColor: "#eee" },
          }}
        />
      )}
      <WelcomeStack.Screen
        name="AuthStack"
        component={authStack}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </WelcomeStack.Navigator>
  );
}
