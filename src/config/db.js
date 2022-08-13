import { Alert } from "react-native";
import { openDatabase } from "react-native-sqlite-storage";

global.db = openDatabase(
  {
    name: "mine",
    location: "default",
    createFromLocation: "~mine.db",
  },
  () => {},
  (error) => console.log(error)
);

export const createTable = () => {
  console.log(db);
};

export const insertUser = (user) => {
  const { email, password } = user;
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Users (email , password ) VALUES  ('" +
        email +
        "', '" +
        password +
        "' )"
    );
    tx.executeSql(
      "INSERT INTO Users (email , password ) VALUES (? , ?)",
      [email, password],
      () => {
        Alert.alert("Succes ! ", "You are logged in successfully");
      }
    );
  });
};

export const getData = () => {
  db.transaction((tx) =>
    tx.executeSql("SELECT email, password FROM Users ", [], (tx, results) => {
      var len = results.rows.length;
      if (len > 0) {
        var userEmail = results.rows.item(0).email;
        var userPassword = results.rows.item(0).password;
      }
    })
  );
};
