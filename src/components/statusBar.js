import React from "react";
import { StatusBar } from "react-native";

const StatusBarCustomized = () => {
  return (
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor="transparent"
      translucent={false}
    />
  );
};

export default StatusBarCustomized;
