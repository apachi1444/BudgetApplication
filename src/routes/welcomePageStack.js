import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MoviesCarousel from "../screens/carousel/moviesCarouselGestureResponder";
import MoviesCarouselPanResponder from "../screens/carousel/moviesCarouselPanResponder";
import WelcomePage from "./../screens/welcomePage/welcomePage";

const WelcomePageStack = createNativeStackNavigator();

export default function () {
  return (
    <WelcomePageStack.Navigator>
      {/* we did it a stack for this welcomePage if we want to add some other pages in the welcoming Part so we won't find problems there */}

      <WelcomePageStack.Screen
        name="WelcomePage"
        component={WelcomePage}
        options={{
          // headerTitle: () => <Header title="About YessineZone" />,
          headerShown: false,
          headerStyle: { backgroundColor: "#eee" },
        }}
      />
    </WelcomePageStack.Navigator>
  );
}
