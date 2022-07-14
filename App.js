import { NavigationContainer } from "@react-navigation/native";
import IncomesAndSpendingsStack from "./src/routes/IncomesAndSpendingsStack";

import ProfileUserStack from "./src/routes/profileUserStack";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <IncomesAndSpendingsStack></IncomesAndSpendingsStack>
      </NavigationContainer>
    </>
  );
}
