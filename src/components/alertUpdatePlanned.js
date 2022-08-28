import { Alert } from "react-native";

export const displayUpdatePlanned = (updatePlanned) => {
  Alert.alert(
    "Are you sure ! ",
    "This action will decrease your budget and change the period of your planned payment",
    [
      {
        text: "Pay Now !",
        onPress: () => updatePlanned(),
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
