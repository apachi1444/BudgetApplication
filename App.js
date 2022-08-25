import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import WelcomeStack from "./src/routes/welcomeStack";
import { LoadingMarkup } from "./src/components/loadingMarkup";

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
        {/* <PersistGate loading={<LoadingMarkup />} persistor={persistor}> */}
        <NavigationContainer theme={theme}>
          <WelcomeStack></WelcomeStack>
        </NavigationContainer>
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}
