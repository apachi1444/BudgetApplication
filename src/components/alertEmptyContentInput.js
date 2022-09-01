import { Alert } from "react-native";

export const displayEmptyContentInput = () => {
  Alert.alert(
    "Be Careful !",
    "You Have To Type Email And Password Before Going On!",
    [
      {
        text: "Ok!",
        onPress: () => {},
      },
    ],
    {
      cancelable: true,
    }
  );
};
