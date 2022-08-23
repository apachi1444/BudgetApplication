import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    let { email, password } = value;
    // await AsyncStorage.clear();
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
  } catch (e) {}
};

export const displayData = async () => {
  try {
    var email = await AsyncStorage.getItem("email");
    var password = await AsyncStorage.getItem("password");
    var userLoggedInOrNot = false;
    if (email != null) {
      userLoggedInOrNot = true;
    }
    return { email, password, userLoggedInOrNot };
  } catch (e) {}
};
