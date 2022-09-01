import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { styleModal } from "./style";
import { SIZES } from "../../../consts/theme";
import { returnNewFormDisplayPrice } from "../../../global/functions/store";
import { globalStyles } from "../../../global/styles/globalStyles";
import { returnFinalNewDateAfterPeriodAndFinalString } from "../logic";
import { returnFinalStringDate } from "./../../guide/logic";

const DetailsPlanned = (props) => {
  const { isModalVisible, handleModal, element } = props;

  const { date, newDate, numberTimesPaid, period, price, title, lastTimePaid } =
    element;

  const totalPayed = price * numberTimesPaid;
  const renderTotalIncomesTotalSpendings = () => {
    return (
      <View style={styleModal.containerOneDetail}>
        <Text style={styleModal.title}>Total Payed :</Text>

        <Text style={styleModal.totalIncome}>
          {returnNewFormDisplayPrice(totalPayed)} DH
        </Text>
      </View>
    );
  };

  const renderInformationsAboutPlannedPayment = () => {
    const renderOneDetail = (title, information) => {
      return (
        <View
          style={[
            globalStyles.flexRowAndAlignCenterAndSpaceBetweenJustify,
            { marginVertical: SIZES.BASE * 1.5 },
          ]}
        >
          <Text style={[styleModal.titleDetail]}>{title} :</Text>

          <Text style={styleModal.totalIncome}>{information}</Text>
        </View>
      );
    };

    const { finalStringDate: finalStringLastDelay } =
      returnFinalNewDateAfterPeriodAndFinalString(
        period,
        numberTimesPaid,
        date
      );

    return (
      <View style={styleModal.containerOneDetail}>
        {renderOneDetail("Price", returnNewFormDisplayPrice(price) + " DH")}
        {renderOneDetail("Title", title)}
        {renderOneDetail("Added", returnFinalStringDate(new Date(date)))}
        {renderOneDetail("Next Delay", finalStringLastDelay)}
        {renderOneDetail(
          "Last Time Paid",
          newDate != null ? returnFinalStringDate(lastTimePaid) : "Not Paid Yet"
        )}
        {renderOneDetail("Number Times Paid ", numberTimesPaid)}
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
            {renderInformationsAboutPlannedPayment()}
          </ScrollView>
        </Modal>
      </View>
    );
  };
  return <View>{renderModal()}</View>;
};

export default DetailsPlanned;
