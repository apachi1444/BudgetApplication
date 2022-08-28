import { Alert } from "react-native";

export const displayResetAllAlert = (resetAllFunction) => {
  Alert.alert(
    "Are you sure ! ",
    "This action will reset all your history !",
    [
      {
        text: "Reset Now !",
        onPress: () => resetAllFunction(),
      },
      {
        text: "No Thanks ",
      },
    ],
    {
      cancelable: true,
    }
  );
};
