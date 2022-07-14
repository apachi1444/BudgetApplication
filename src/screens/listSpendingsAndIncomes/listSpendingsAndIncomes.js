import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, Caption, Title } from "react-native-paper";
import COLORS from "../../consts/color";
import { windowWidth, windowHeight } from "../../utils/dimensions";
import SpecificCard from "../../components/specificCard";
import React, { useState } from "react";
import { set } from "react-native-reanimated";
export default function ListIncomes({ navigation }) {
  const SIZES = {
    BASE: 6,
    FONT: 12,
    TITLE: 24,
    SUBTITLE: 11,
    LABEL: 12,
    PADDING: 12,
  };

  const navigateToSpecificPage = () => {
    if (itemSelected == 1) navigation.navigate("ListSpendings");
    else navigation.navigate("ListIncomes");
  };

  const [itemSelected, setItemSelected] = useState(1);
  const toggleItemSelected = (value) => {
    if (value === 1) setItemSelected(1);
    else setItemSelected(0);
  };
  const [arraySpendings, setArraySpendings] = useState([
    {
      title: `${itemSelected === 0}`,
      price: " +5000DH",
      date: "13/07/2022",
      key: "1",
    },
    {
      title: "PC GAMER 2022 ",
      price: " +5000DH",
      date: "13/07/2022",
      key: "2",
    },
  ]);

  const deleteItem = (key) => {
    const newArray = arraySpendings.filter((item) => item.key !== key);
    setArraySpendings(newArray);
  };

  const renderItem = ({ item }) => (
    <SpecificCard item={item} deleteItem={() => deleteItem(item.key)} />
  );

  const listIncomesStyle = StyleSheet.create({
    container: {
      paddingVertical: "26%",
      paddingHorizontal: "9%",
      flex: 1,
      backgroundColor: "white",
    },
    titlePage: {
      flexDirection: "row",
      marginBottom: windowWidth * 0.03,
    },

    titleTextContainer: {
      top: "-0.2%",
      marginLeft: "4%",
    },
    containerSpendingsInformations: {
      marginVertical: "7%",
      alignItems: "center",
    },
    priceInsideContainerIncomesAndSpendings: {
      fontSize: 20,
      color: COLORS.PRIMARY,
      fontWeight: "bold",
      marginTop: "6%",
    },
    lastSpedingsTitle: {
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: SIZES.BASE * 2,
    },
    imageProfile: {
      borderRadius: windowHeight * 0.35,
      borderColor: "rgba(255, 255, 0, .9)",
      borderWidth: 2,
      height: windowWidth * 0.35,
      width: windowWidth * 0.35,
    },
    nameUser: {
      fontWeight: "800",
      fontSize: 25,
    },
    cityUser: {
      fontWeight: "700",
      fontSize: 17,
      marginVertical: SIZES.BASE * 2.5,
    },
    spendings: {
      backgroundColor: COLORS.THIRD,
      height: windowHeight * 0.17,
      width: windowWidth * 0.8,
      borderRadius: SIZES.BASE * 4,
      paddingHorizontal: SIZES.BASE * 7,
      flexDirection: "row",
    },
    specificContainerInsideSpendingsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flex: 1,
    },
    textsInsideSpecificContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: SIZES.BASE * 2.5,
    },
    textPriceOfSpecificContainer: { marginTop: SIZES.BASE * 1 },
    boxContainerIncomesAndSpendings: {
      borderBottomColor: COLORS.BLACK,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderTopColor: COLORS.BLACK,
      flexDirection: "row",
      height: windowHeight * 0.1,
      marginBottom: SIZES.BASE * 3.5,
      width: windowWidth,
      left: -windowHeight * 0.047,
    },
    simpleBoxFirst: {
      flexDirection: "row",
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: itemSelected === 1 ? COLORS.WHITE : COLORS.SECONDARY,
    },
    simpleBoxSecond: {
      flexDirection: "row",
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: itemSelected === 0 ? COLORS.WHITE : COLORS.SECONDARY,
    },
    textsInsideSpecificContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: SIZES.BASE * 1.2,
    },
    textPriceOfSpecificContainer: { marginTop: SIZES.BASE * 1 },
    containerButtonSeeMore: {
      flexDirection: "row",
      justifyContent: "center",
    },
    buttonSeeMore: {
      backgroundColor: COLORS.SECONDARY,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: windowWidth * 0.32,
      padding: SIZES.BASE * 2,
      borderRadius: SIZES.BASE * 8,
      marginTop: SIZES.BASE * 2,
    },
  });

  return (
    <>
      <View style={listIncomesStyle.container}>
        <View style={listIncomesStyle.titlePage}>
          <Avatar.Image
            source={require("../../assets/images/elon_musk.jpg")}
            size={75}
          />
          <View style={listIncomesStyle.titleTextContainer}>
            <Title style={listIncomesStyle.nameUser}>Yessine Jaoua</Title>
            <Caption style={listIncomesStyle.cityUser}>
              INCOMES DASHBOARD
            </Caption>
          </View>
        </View>
        {/* this is containing the user informations  */}
        <View style={listIncomesStyle.boxContainerIncomesAndSpendings}>
          {/* this is the first one */}

          <TouchableOpacity
            onPress={() => toggleItemSelected(0)}
            style={[
              listIncomesStyle.simpleBoxFirst,
              {
                borderLeftWidth: 1,
                borderLeft: COLORS.BLACK,
                borderRightColor: COLORS.BLACK,
                borderRightWidth: 1,
              },
            ]}
          >
            <View>
              <FontAwesome name="arrow-up" size={25} />
            </View>
            <View style={listIncomesStyle.textsInsideSpecificContainer}>
              <Title>TOTAL INCOMES</Title>
              <Caption
                style={listIncomesStyle.priceInsideContainerIncomesAndSpendings}
              >
                650 DH
              </Caption>
            </View>
          </TouchableOpacity>

          {/* // this is second one */}
          <TouchableOpacity
            onPress={() => toggleItemSelected(1)}
            style={[
              listIncomesStyle.simpleBoxSecond,
              {
                borderLeftWidth: 1,
                borderLeft: COLORS.BLACK,
                borderRightColor: COLORS.BLACK,
                borderRightWidth: 1,
              },
            ]}
          >
            <View>
              <FontAwesome name="arrow-down" size={25} />
            </View>
            <View style={listIncomesStyle.textsInsideSpecificContainer}>
              <Title>TOTAL SPENDINGS</Title>
              <Caption
                style={listIncomesStyle.priceInsideContainerIncomesAndSpendings}
              >
                650 DH
              </Caption>
            </View>
          </TouchableOpacity>
        </View>
        {/* this is the end of user informations about spendings */}

        {/* // this is the start of the list of all spendings  */}

        {itemSelected === 0 ? (
          <View>
            <Text style={listIncomesStyle.lastSpedingsTitle}>Last Incomes</Text>
            <FlatList
              data={arraySpendings}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
            <TouchableOpacity
              onPress={navigateToSpecificPage}
              style={listIncomesStyle.containerButtonSeeMore}
            >
              <View style={listIncomesStyle.buttonSeeMore}>
                <FontAwesome name="plus" />
                <Text>See More</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          //else

          <View>
            <Text style={listIncomesStyle.lastSpedingsTitle}>
              Last Spendings
            </Text>
            <FlatList
              data={arraySpendings}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
            <TouchableOpacity
              onPress={navigateToSpecificPage}
              style={listIncomesStyle.containerButtonSeeMore}
            >
              <View style={listIncomesStyle.buttonSeeMore}>
                <FontAwesome name="plus" />
                <Text>See More</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* // this is the end of the list of all spendings  */}
      </View>
    </>
  );
}
