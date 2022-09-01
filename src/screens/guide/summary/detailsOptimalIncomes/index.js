import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { SIZES } from "../../../../consts/theme";
import { returnOptimalIncomes } from "../../logic";
import COLORS from "../../../../consts/color";
import { globalStyles } from "../../../../global/styles/globalStyles";
import { styleModal } from "./style";
import { needs, saves, wants } from "../../../../consts/percentages";
import { need, save, want } from "../../../../consts/indexes";
import { returnNewFormDisplayPrice } from "../../../../global/functions/store";

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
      percentage: wants,
      current: totals[want],
      icon: "grid",
    },
    {
      totalOptimal: totalOptimalNeedsIncomes,
      key: 2,
      percentage: needs,
      name: "Needs",
      current: totals[need],
      icon: "fast-food",
    },
    {
      totalOptimal: totalOptimalSavesIncomes,
      percentage: saves,
      key: 3,
      name: "Saves",
      current: totals[save],
      icon: "briefcase",
    },
  ];

  const renderTotalIncomesTotalSpendings = () => {
    const totalSpendings = totals[save] + totals[need] + totals[want];
    return (
      <View style={styleModal.containerOneDetail}>
        <Text style={styleModal.title}>Total Incomes :</Text>

        <Text style={styleModal.totalIncome}>
          {returnNewFormDisplayPrice(totalIncomes)} DH
        </Text>

        <Text style={[styleModal.title, { marginTop: "5%" }]}>
          Total Spendings :
        </Text>

        <Text style={styleModal.totalIncome}>
          {returnNewFormDisplayPrice(totalSpendings)} DH
        </Text>
      </View>
    );
  };

  const renderModal = () => {
    const renderItem = (item) => {
      return (
        <>
          <View style={styleModal.containerOneDetail}>
            <View
              style={globalStyles.flexRowAndAlignCenterAndSpaceBetweenJustify}
            >
              <Ionicons
                name={item.icon}
                style={{
                  color: COLORS.WHITE,
                  fontSize: 30,
                }}
              />
              <Text style={styleModal.titleCategory}>
                {item.name} - {item.percentage}%
              </Text>
            </View>
            <Text style={styleModal.title}>Current Spendings </Text>
            <Text style={styleModal.price}>
              {returnNewFormDisplayPrice(item.current)} DH{" "}
            </Text>
            <Text style={styleModal.title}>Optimal Spending </Text>
            <Text style={styleModal.price}>
              {returnNewFormDisplayPrice(item.totalOptimal)} DH{" "}
            </Text>
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

            {array.map((item) => {
              return renderItem(item);
            })}
          </ScrollView>
        </Modal>
      </View>
    );
  };
  return <View>{renderModal()}</View>;
};

export default DetailsOptimalIncomes;
