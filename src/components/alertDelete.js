import { Alert } from "react-native";

export const displayDeleteAlert = (deleteFunction) => {
  Alert.alert(
    "Are you sure ! ",
    "This action will delete your spending permanently",
    [
      {
        text: "Delete ",
        onPress: () => deleteFunction(),
      },
      {
        text: "No Thanks ",
        onPress: () => {
          console.log("no thanks");
        },
      },
    ],
    {
      cancelable: true,
    }
  );
};
