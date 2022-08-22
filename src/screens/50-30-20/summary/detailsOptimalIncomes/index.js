import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { SIZES } from "../../../../consts/theme";
import { returnOptimalIncomes } from "../../logic";
import COLORS from "../../../../consts/color";
import { globalStyles } from "../../../../global/styles/globalStyles";
import { styleModal } from "./style";

const DetailsOptimalIncomes = (props) => {
  const { isModalVisible, handleModal, totalIncomes, totals } = props;
  const {
    totalOptimamWantsIncomes,
    totalOptimalNeedsIncomes,
    totalOptimalSavesIncomes,
  } = returnOptimalIncomes(totalIncomes);
  const array = [
    {
      totalOptimal: totalOptimamWantsIncomes,
      key: 1,
      name: "Wants",
      current: totals[0],
    },
    {
      totalOptimal: totalOptimalNeedsIncomes,
      key: 2,
      name: "Needs",
      current: totals[1],
    },
    {
      totalOptimal: totalOptimalSavesIncomes,
      key: 3,
      name: "Saves",
      current: totals[2],
    },
  ];

  console.log(totals);

  const renderModal = () => {
    const renderItem = (item) => {
      return (
        <>
          <View
            style={{
              backgroundColor: COLORS.PRIMARY,
              padding: SIZES.BASE * 4,
              margin: SIZES.BASE * 3,
              borderRadius: SIZES.BASE * 3,
            }}
          >
            <View
              style={globalStyles.flexRowAndAlignCenterAndSpaceBetweenJustify}
            >
              <Ionicons
                name="fast-food"
                style={{
                  color: COLORS.WHITE,
                  fontSize: 30,
                }}
              />
              <Text style={styleModal.titleCategory}>{item.name}</Text>
            </View>
            <Text style={styleModal.title}>Current Spendings </Text>
            <Text style={styleModal.price}>{item.current} DH </Text>
            <Text style={styleModal.title}>Optimal Spending </Text>
            <Text style={styleModal.price}>{item.totalOptimal} DH </Text>
          </View>
        </>
      );
    };

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
          <View
            style={{
              width: "100%",
              backgroundColor: "transparent",
              flex: 1,
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
            {array.map((item) => {
              return renderItem(item);
            })}
          </View>
        </Modal>
      </View>
    );
  };
  return <View>{renderModal()}</View>;
};

export default DetailsOptimalIncomes;
