import { NavigationContainer } from "@react-navigation/native";
import IncomesAndSpendingsStack from "./src/routes/IncomesAndSpendingsStack";

import ProfileUserStack from "./src/routes/profileUserStack";
import WelcomeStack from "./src/routes/welcomeStack";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <WelcomeStack></WelcomeStack>
      </NavigationContainer>
    </>
  );
}
