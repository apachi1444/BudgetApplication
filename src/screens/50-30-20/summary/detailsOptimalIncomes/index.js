import React from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";

const DetailsOptimalIncomes = () => {
  console.log("hahahah");
  const [isModalVisible, setIsModalVisible] = React.useState(true);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const renderModal = () => {
    return (
      <View>
        <Modal
          presentationStyle="overFullScreen"
          isVisible={isModalVisible}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "transparent",
              flex: 1,
            }}
          ></View>
        </Modal>
      </View>
    );
  };
  return <View>{renderModal()}</View>;
};

export default DetailsOptimalIncomes;
