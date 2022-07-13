import { NavigationContainer } from "@react-navigation/native";

import ProfileUserStack from "./src/routes/profileUserStack";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ProfileUserStack></ProfileUserStack>
      </NavigationContainer>
    </>
  );
}
