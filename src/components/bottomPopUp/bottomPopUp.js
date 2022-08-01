import React, { useState } from "react";
import { Text, View, Modal } from "react-native";

const BottomPopUp = () => {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };
  return (
    <Modal
      onRequestClose={close}
      visible={show}
      animationType="fade"
      transparent={true}
    />
  );
};

export default BottomPopUp;
