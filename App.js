import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import IncomesAndSpendingsStack from "./src/routes/historyIncomesAndSpendingsStack";

import ProfileUserStack from "./src/routes/profileUserStack";
import WelcomeStack from "./src/routes/welcomeStack";

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <WelcomeStack></WelcomeStack>
        </NavigationContainer>
      </Provider>
    </>
  );
}
