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
    var userInSystem = await AsyncStorage.getItem("email");
    if (userInSystem != null) {
      return true;
    }
    return false;
  } catch (e) {}
};
