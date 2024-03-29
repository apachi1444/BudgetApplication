import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import authStack from "./authStack";
import welcomePageStack from "./welcomePageStack";
const WelcomeStack = createNativeStackNavigator();

export default function () {
  const user = useSelector((state) => state.userInformations);
  const visited = user.visited;
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
    <WelcomeStack.Navigator>
      {visited != true && (
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
