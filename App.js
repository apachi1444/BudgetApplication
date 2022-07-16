import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/stateManagement/store";
import IncomesAndSpendingsStack from "./src/routes/IncomesAndSpendingsStack";

import ProfileUserStack from "./src/routes/profileUserStack";
import WelcomeStack from "./src/routes/welcomeStack";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <WelcomeStack></WelcomeStack>
        </NavigationContainer>
      </Provider>
    </>
  );
}
