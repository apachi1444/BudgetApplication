import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { SIZES, SIZESS } from "../../consts/theme";
import { plannedPaymentsStyle } from "./plannedPaymentsStyle";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import CheckBox from "expo-checkbox";
import { globalStyles } from "../../global/styles/globalStyles";

const PlannedPayments = () => {
  const [isSelected, setSelection] = useState(false);
  const arrayPlannedPayments = [
    {
      id: 1,
      title: "Insurance",
      price: 250,
      elements: [
        {
          id: 1,
          title: "Vehicule",
          price: 250,
          period: "Yearly",
          datePayment: "12/08/2023",
        },
        {
          id: 2,
          title: "Work",
          price: 150,
          period: "Monthly",
          datePayment: "10/07/2023",
        },
      ],
    },
    {
      id: 2,
      title: "Insurance",
      price: 250,
      elements: [
        {
          id: 1,
          title: "Vehicule",
          price: 250,
          period: "Yearly",
          datePayment: "12/08/2023",
        },
        {
          id: 2,
          title: "Work",
          price: 150,
          period: "Monthly",
          datePayment: "10/07/2023",
        },
      ],
    },
  ];

  const numberPages = [1, 2, 3, 4];

  const renderItem = ({ item }) => {
    console.log(item);
    const { id, title, price, elements } = item;

    const renderTitleAndImage = () => {
      return (
        <View style={plannedPaymentsStyle.imageAndTitle}>
          <Avatar.Image
            source={require("../../assets/images/elon_musk.jpg")}
            size={SIZESS.body1 * 1.5}
          />
          <Text style={plannedPaymentsStyle.title}>{title}</Text>
        </View>
      );
    };

    const renderPriceAndDeleteButton = () => {
      return (
        <View style={plannedPaymentsStyle.priceAndDeleteButton}>
          <View style={plannedPaymentsStyle.iconAndPriceContainer}>
            <Ionicons
              name="cash"
              color={COLORS.PRIMARY}
              size={25}
              style={{ marginRight: SIZES.BASE * 1.5 }}
            />
            <Text style={plannedPaymentsStyle.price}>{price}</Text>
          </View>

          <TouchableOpacity style={plannedPaymentsStyle.deleteButton}>
            <Text style={plannedPaymentsStyle.textDeleteAll}>Delete All</Text>
          </TouchableOpacity>
        </View>
      );
    };

    const renderLineDetailEachItem = (element) => {
      const renderTitleAndPriceAndPeriod = () => {
        const renderImageAndTitle = () => {
          return (
            <View
              style={plannedPaymentsStyle.containerCheckboxAndImageAndTitle}
            >
              <CheckBox
                disabled={false}
                value={isSelected}
                onValueChange={(newValue) => setSelection(newValue)}
              />
              <Avatar.Image
                source={require("../../assets/images/elon_musk.jpg")}
                size={SIZESS.body1 * 1.2}
                style={{
                  marginHorizontal: 10,
                }}
              />
              <Text>{element.title}</Text>
            </View>
          );
        };
        const renderPriceAndPeriod = () => {
          return (
            <View>
              <Text style={globalStyles.primaryColor}> {element.price} </Text>
            </View>
          );
        };
        const renderDateAndTimeRemaining = () => {
          const renderDate = () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={globalStyles.primaryColor}>
                  {element.datePayment}
                </Text>
                <Ionicons
                  name="calendar-outline"
                  style={globalStyles.primaryColor}
                />
              </View>
            );
          };

          const renderTimeRemaining = () => {
            console.log(element.datePayment);
            console.log(new Date());
            const calculateTimeRemaining = () => {};
            return (
              <View>
                <Text style={plannedPaymentsStyle.timeRemaining}>
                  1 year Remaining
                </Text>
              </View>
            );
          };

          return (
            <View
              style={plannedPaymentsStyle.containerCalendarAndTimeRemaining}
            >
              <View>{renderDate()}</View>
              <View>{renderTimeRemaining()}</View>
            </View>
          );
        };
        return (
          <View style={plannedPaymentsStyle.containerEachLine}>
            {renderImageAndTitle()}
            {renderPriceAndPeriod()}
            {renderDateAndTimeRemaining()}
          </View>
        );
      };

      const renderDeleteAndEditButtons = () => {
        return (
          <View style={plannedPaymentsStyle.containerEditAndDeleteButtons}>
            <Ionicons style={plannedPaymentsStyle.iconStyle} name="trash-bin" />
            <Ionicons name="create" style={plannedPaymentsStyle.iconStyle} />
          </View>
        );
      };

      return (
        <View>
          <View>{renderTitleAndPriceAndPeriod()}</View>
          <View>{renderDeleteAndEditButtons()}</View>
        </View>
      );
    };

    const renderDividerBetweenItems = () => {
      return <View style={plannedPaymentsStyle.divider}></View>;
    };

    const renderContainerDetails = () => {
      return (
        <View style={plannedPaymentsStyle.containerDetails}>
          {renderPriceAndDeleteButton()}
          {elements.map((element, index) => {
            return (
              <View>
                {renderLineDetailEachItem(element)}
                {console.log(elements.length, index == elements.length - 1)}
                {index != elements.length - 1
                  ? renderDividerBetweenItems()
                  : null}
              </View>
            );
          })}
        </View>
      );
    };

    return (
      <View style={plannedPaymentsStyle.containerItem}>
        {renderTitleAndImage()}
        {renderContainerDetails()}
      </View>
    );
  };

  const renderPagination = () => {
    return (
      <View>
        {console.log(numberPages)}
        {numberPages.map((page) => {
          <View>{page}</View>;
        })}
      </View>
    );
  };
  return (
    <View style={plannedPaymentsStyle.container}>
      <FlatList data={arrayPlannedPayments} renderItem={renderItem} />
      {renderPagination()}
    </View>
  );
};

export default PlannedPayments;
