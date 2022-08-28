import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { styleModal } from "./style";
import { SIZES } from "../../../consts/theme";
import { returnNewFormDisplayPrice } from "../../../global/functions/store";

const DetailsPlanned = (props) => {
  const { isModalVisible, handleModal } = props;

  const renderTotalIncomesTotalSpendings = () => {
    return (
      <View style={styleModal.containerOneDetail}>
        <Text style={styleModal.title}>Total Incomes :</Text>

        <Text style={styleModal.totalIncome}>
          {returnNewFormDisplayPrice(15000)} DH
        </Text>
      </View>
    );
  };

  const renderModal = () => {
    return (
      <View>
        <Modal
          presentationStyle="overFullScreen"
          isVisible={isModalVisible}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <ScrollView
            style={{
              width: "100%",
              backgroundColor: "transparent",
              // flex: 1,
              borderTopRightRadius: SIZES.BASE * 15,
              borderTopLeftRadius: SIZES.BASE * 3,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                padding: SIZES.BASE,
              }}
              onPress={() => handleModal(!isModalVisible)}
            >
              <Ionicons name="close-circle-outline" size={90} />
            </TouchableOpacity>

            {renderTotalIncomesTotalSpendings()}
          </ScrollView>
        </Modal>
      </View>
    );
  };
  return <View>{renderModal()}</View>;
};

export default DetailsPlanned;
