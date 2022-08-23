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

export const handleSubmit = async (email, password) => {
  const user = { email, password };
  await AsyncStorage.setItem("user", JSON.stringify(user));
};

export const findUser = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return user;
  } catch (error) {
    return error;
  }
};

export const extractTransactions = async (setter) => {
  try {
    const transactions = await AsyncStorage.getItem("transactions");
    if (transactions != null) {
      setter(JSON.parse(transactions));
    }
  } catch (e) {
    console.log(e);
  }
};

export const addTransaction = async (payload, list, setter) => {
  const transaction = { ...payload };
  const updatedTransactions = [...list, transaction];
  setter(transaction);
  await AsyncStorage.setItem(
    "transactions",
    JSON.stringify(updatedTransactions)
  );
};

export const deleteTransaction = async (note) => {
  const results = await AsyncStorage.getItem("transactions");
  let notes = [];
  if (results != null) {
    notes = JSON.parse(results);
  }
  const newNotes = notes.filter((n) => n.id != note.id);
  await AsyncStorage.setItem("transactions", newNotes);
};
