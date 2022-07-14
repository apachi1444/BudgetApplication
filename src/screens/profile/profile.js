import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Avatar, Caption, Title } from "react-native-paper";
export default function ProfileUser({ navigation }) {
  const editProfile = () => {
    navigation.navigate("EditProfile");
  };
  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  const logOut = () => {
    navigation.goBack();
  };

  const goToHistory = () => {
    navigation.navigate("IncomesAndSpendings");
  };

  return (
    <>
      <View style={profileStyles.container}>
        <View onStartShouldSetResponder={logOut}>
          <Ionicons
            name="log-out-outline"
            style={profileStyles.logoutIcon}
            size={SIZES.BASE * 6}
          />
        </View>
        <View style={profileStyles.containerInformationsUser}>
          <Avatar.Image
            source={require("../../assets/images/elon_musk.jpg")}
            size={130}
          />
          {/* <Image
            style={profileStyles.imageProfile}
            source={require("../../assets/images/facebook.png")}
          ></Image> */}
          <Text style={profileStyles.nameUser}>Yessine Jaoua</Text>
          <Text style={profileStyles.cityUser}> Casablanca</Text>
          {/* <View style={profileStyles.incomesAndSpendings}>
            <View
              style={
                profileStyles.specificContainerInsideIncomesAndSpendingsContainer
              }
            >
              <View>
                <FontAwesome name="close" size={25} />
              </View>

              <View style={profileStyles.textsInsideSpecificContainer}>
                <Text>incomes</Text>
                <Text style={profileStyles.textPriceOfSpecificContainer}>
                  {" "}
                  600.12 DH
                </Text>
              </View>
            </View>
            <View
              style={
                profileStyles.specificContainerInsideIncomesAndSpendingsContainer
              }
            >
              <View>
                <FontAwesome name="close" size={25} />
              </View>

              <View style={profileStyles.textsInsideSpecificContainer}>
                <Text>spendings</Text>
                <Text style={profileStyles.textPriceOfSpecificContainer}>
                  {" "}
                  600.12 DH
                </Text>
              </View>
            </View>
          </View> */}

          <View style={profileStyles.boxContainerIncomesAndSpendings}>
            {/* this is the second one */}

            <View
              style={[
                profileStyles.simpleBox,
                { borderRightColor: COLORS.BLACK, borderRightWidth: 1 },
              ]}
            >
              <View>
                <FontAwesome name="close" size={25} />
              </View>
              <View style={profileStyles.textsInsideSpecificContainer}>
                <Title>Yessine</Title>
                <Caption>Jaoua</Caption>
              </View>
            </View>

            {/* // this is first one */}
            <View
              style={[
                profileStyles.simpleBox,
                { borderRightColor: COLORS.BLACK, borderRightWidth: 1 },
              ]}
            >
              <View>
                <FontAwesome name="close" size={25} />
              </View>
              <View style={profileStyles.textsInsideSpecificContainer}>
                <Title>Yessine</Title>
                <Caption>Jaoua</Caption>
              </View>
            </View>
          </View>

          {/* // this is for the divider  */}
          <View style={profileStyles.divider}>
            <Text> Hahah</Text>
          </View>

          {/* // this is for the each line of profile Details */}
          <View
            style={profileStyles.profileDetailLine}
            onStartShouldSetResponder={editProfile}
          >
            <FontAwesome
              name="user"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 4.2}
            />
            <Text style={profileStyles.textInsideProfileDetailLine}>
              Edit Profile
            </Text>
            <FontAwesome
              name="arrow-right"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 2.9}
            />
          </View>
          <View
            style={profileStyles.profileDetailLine}
            onStartShouldSetResponder={goToSettings}
          >
            <FontAwesome
              name="user"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 4.2}
            />
            <Text style={profileStyles.textInsideProfileDetailLine}>
              Settings
            </Text>
            <FontAwesome
              name="arrow-right"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 2.9}
            />
          </View>
          <View
            style={profileStyles.profileDetailLine}
            onStartShouldSetResponder={goToHistory}
          >
            <FontAwesome
              name="history"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 4.2}
            />
            <Text style={profileStyles.textInsideProfileDetailLine}>
              History
            </Text>
            <FontAwesome
              name="arrow-right"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 2.9}
            />
          </View>

          <View style={profileStyles.dividerOfProfileDetailsLines}></View>
        </View>
      </View>
    </>
  );
}

import COLORS from "../../consts/color";
import { windowWidth, windowHeight } from "../../utils/dimensions";
const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 24,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};

const profileStyles = StyleSheet.create({
  logoutIcon: {
    color: COLORS.PRIMARY,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: "85%",
    marginTop: "-9%",
  },
  container: {
    paddingVertical: "26%",
    flex: 1,
  },
  containerInformationsUser: {
    alignItems: "center",
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
    fontSize: 20,
    marginVertical: SIZES.BASE * 2.5,
  },
  incomesAndSpendings: {
    backgroundColor: COLORS.THIRD,
    height: windowHeight * 0.13,
    width: windowWidth * 0.8,
    borderRadius: SIZES.BASE * 4,
    padding: SIZES.BASE * 2,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  specificContainerInsideIncomesAndSpendingsContainer: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 4,
    height: "100%",
    padding: SIZES.BASE * 2,
    borderRadius: SIZES.BASE * 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textsInsideSpecificContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginLeft: SIZES.BASE * 2.5,
  },
  textPriceOfSpecificContainer: { marginTop: SIZES.BASE * 1 },
  divider: {
    marginVertical: SIZES.BASE * 3.5,
    width: windowWidth * 0.8,
    backgroundColor: COLORS.BLACK,
    height: windowHeight * 0.0006,
  },
  profileDetailLine: {
    marginVertical: SIZES.BASE * 1.5,
    flexDirection: "row",
    width: windowWidth * 0.6,
    justifyContent: "space-between",
  },
  textInsideProfileDetailLine: {
    fontSize: SIZES.BASE * 2.8,
    fontWeight: "bold",
  },
  dividerOfProfileDetailsLines: {
    marginTop: SIZES.BASE * 1,
    width: windowWidth * 0.6,
    backgroundColor: COLORS.RED,
    opacity: 0.5,
    height: windowHeight * 0.001,
  },
  boxContainerIncomesAndSpendings: {
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: COLORS.BLACK,
    flexDirection: "row",
    height: windowHeight * 0.1,
  },
  simpleBox: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
