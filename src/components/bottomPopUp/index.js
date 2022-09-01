import React, { useState } from "react";
import { Text, View, Modal } from "react-native";

const BottomPopUp = ({ innerRef }) => {
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
      animationType={"fade"}
      transparent={true}
    >
      <View
        style={{
          backgroundColor: "red",
          height: "50%",
          borderWidth: 3,
          borderColor: "blue",
        }}
      ></View>
    </Modal>
  );
};

export default BottomPopUp;
