import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, Caption, Title } from "react-native-paper";
import COLORS from "../../consts/color";
import { windowWidth, windowHeight } from "../../utils/dimensions";
import Card from "../../shared/card";
import { globalStyles } from "../../global/styles/globalStyles";
import SpecificCard from "../../components/specificCard";
export default function ListSpendings({ navigation }) {
  const renderItem = ({ item }) => <SpecificCard item={item} />;
  const arraySpendings = [
    {
      image: "../../assets/images/facebook.png",
      title: "PC GAMER 2022 ",
      price: " -5000DH",
      date: "13/07/2022",
      key: "1",
    },
    {
      image: "../../assets/images/facebook.png",
      title: "PC GAMER 2022 ",
      price: " -5000DH",
      date: "13/07/2022",
      key: "2",
    },
    {
      image: "../../assets/images/facebook.png",
      title: "PC GAMER 2022 ",
      price: " -5000DH",
      date: "13/07/2022",
      key: "3",
    },
    {
      image: "../../assets/images/facebook.png",
      title: "PC GAMER 2022 ",
      price: " -5000DH",
      date: "13/07/2022",
      key: "4",
    },
    {
      image: "../../assets/images/facebook.png",
      title: "PC GAMER 2022 ",
      price: " -5000DH",
      date: "13/07/2022",
      key: "5",
    },
    {
      image: "../../assets/images/facebook.png",
      title: "PC GAMER 2022 ",
      price: " -5000DH",
      date: "13/07/2022",
      key: "6",
    },
    {
      image: "../../assets/images/facebook.png",
      title: "PC GAMER 2022 ",
      price: " -5000DH",
      date: "13/07/2022",
      key: "7",
    },
  ];

  return (
    <>
      <View style={listSpendingsStyle.container}>
        <View style={listSpendingsStyle.titlePage}>
          <Avatar.Image
            source={require("../../assets/images/facebook.png")}
            size={75}
          />
          <View style={listSpendingsStyle.titleTextContainer}>
            <Title style={listSpendingsStyle.nameUser}>Yessine Jaoua</Title>
            <Caption style={listSpendingsStyle.cityUser}>
              SPENDINGS DASHBOARD
            </Caption>
          </View>
        </View>
        {/* this is containing the user informations  */}
        <View style={listSpendingsStyle.containerSpendingsInformations}>
          <View style={listSpendingsStyle.spendings}>
            <View
              style={
                listSpendingsStyle.specificContainerInsideSpendingsContainer
              }
            >
              <View>
                <FontAwesome name="arrow-down" size={85} />
              </View>

              <View style={listSpendingsStyle.textsInsideSpecificContainer}>
                <Text>Totals Spendins</Text>
                <Text style={listSpendingsStyle.textPriceOfSpecificContainer}>
                  {" "}
                  600.12 DH
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* this is the end of user informations about spendings */}

        {/* // this is the button for adding a spending  */}

        <View style={listSpendingsStyle.buttonAddSpendings}>
          <FontAwesome name="plus" size={23} />
        </View>

        {/* // this is the button for adding a spending  */}

        {/* // this is the start of the list of all spendings  */}

        <View>
          <Text style={listSpendingsStyle.lastSpedingsTitle}>
            Last Spendings
          </Text>
          <FlatList
            data={arraySpendings}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
          />
        </View>

        {/* // this is the end of the list of all spendings  */}
      </View>
    </>
  );
}

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};

const listSpendingsStyle = StyleSheet.create({
  container: {
    paddingVertical: "26%",
    paddingHorizontal: "9%",
    flex: 1,
    backgroundColor: "white",
  },
  titlePage: {
    flexDirection: "row",
  },

  buttonAddSpendings: {
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 60,
    width: windowWidth * 0.15,
    height: windowHeight * 0.08,
    justifyContent: "center",
    alignItems: "center",
    left: "36%",
    marginVertical: SIZES.BASE * 3,
  },
  titleTextContainer: {
    top: "-0.2%",
    marginLeft: "4%",
  },
  containerSpendingsInformations: {
    marginVertical: "7%",
    alignItems: "center",
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
    marginLeft: SIZES.BASE * 7,
  },
  textPriceOfSpecificContainer: {
    marginTop: SIZES.BASE * 3,
    fontSize: 23,
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
