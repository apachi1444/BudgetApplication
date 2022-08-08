import { Text, View, Image, ImageBackground } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Avatar, Caption, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import PlannedPayments from "./../plannedPayments/plannedPayments";
import { profileStyles } from "./profileStyle";
import { windowWidth } from "../../utils/dimensions";
export default function ProfileUser({ navigation }) {
  const navigationn = useNavigation();

  const editProfile = () => {
    navigation.navigate("EditProfile");
  };

  const logOut = () => {
    navigation.goBack();
  };

  const goToPlannedPayments = () => {
    navigation.navigate("PlannedPayments");
  };

  const renderLogOutIconAndDrawer = () => {
    return (
      <View>
        <View onStartShouldSetResponder={logOut}>
          <Ionicons
            name="log-out-outline"
            style={profileStyles.logoutIcon}
            size={SIZES.BASE * 7}
          />
        </View>
      </View>
    );
  };

  const renderImageUserAndNamUser = () => {
    return (
      <>
        <Avatar.Image
          source={require("../../assets/images/elon_musk.jpg")}
          size={130}
        />

        <Text style={profileStyles.nameUser}>Yessine Jaoua</Text>
      </>
    );
  };

  const renderBudgetCircle = () => {
    return (
      <View>
        <View style={profileStyles.containerImageBudget}>
          <Image
            source={require("../../assets/images/welcomePage.png")}
            style={profileStyles.imageBudget}
          />
          <View style={profileStyles.viewTextInside}>
            <Text style={profileStyles.textInside}>0DH</Text>
          </View>
        </View>
        <View style={profileStyles.viewMyBudgetTitle}>
          <Text style={profileStyles.myBudgetTitle}>My Budget</Text>
        </View>
      </View>
    );
  };

  const renderTotalSpendingAndIncomes = () => {
    return (
      <View style={profileStyles.boxContainerIncomesAndSpendings}>
        {/* this is the second one */}

        <View style={[profileStyles.simpleBox]}>
          <View>
            <Ionicons
              name="arrow-up-circle"
              size={profileStyles.arrowIcon.size}
            />
          </View>
          <View style={profileStyles.textsInsideSpecificContainer}>
            <Title>Total Incomes</Title>
            <Text style={profileStyles.caption}>650DH</Text>
          </View>
        </View>

        {/* // this is first one */}
        <View
          style={[
            profileStyles.simpleBox,
            {
              backgroundColor: COLORS.TOTALSPENDINGS,
            },
          ]}
        >
          <View>
            <Ionicons
              name="arrow-down-circle"
              size={profileStyles.arrowIcon.size}
              color="white"
            />
          </View>
          <View style={profileStyles.textsInsideSpecificContainer}>
            <Title style={{ color: "white" }}>Total Spendings</Title>
            <Text style={profileStyles.caption}>650DH</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderLinesProfileDetails = () => {
    return (
      <>
        <View
          style={profileStyles.profileDetailLine}
          onStartShouldSetResponder={goToPlannedPayments}
        >
          <FontAwesome
            name="user"
            color={COLORS.PRIMARY}
            size={SIZES.BASE * 4.2}
          />
          <Text style={profileStyles.textInsideProfileDetailLine}>
            PlannedPayments
          </Text>
          <FontAwesome
            name="arrow-right"
            color={COLORS.PRIMARY}
            size={SIZES.BASE * 2.9}
          />
        </View>
        <View
          style={{
            borderWidth: 0.2,
            width: windowWidth * 0.48,
            marginVertical: 8,
          }}
        ></View>
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
      </>
    );
  };

  const renderTotalSpendingAndIncomesOldVersion = () => {
    return (
      <View style={profileStyles.incomesAndSpendings}>
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
      </View>
    );
  };

  const renderDivider = () => {
    return (
      <View style={profileStyles.divider}>
        <Text> Hahah</Text>
      </View>
    );
  };

  return (
    <>
      <View style={profileStyles.container}>
        {renderLogOutIconAndDrawer()}

        <View style={profileStyles.containerInformationsUser}>
          {renderImageUserAndNamUser()}

          {renderBudgetCircle()}

          {renderTotalSpendingAndIncomes()}

          {renderLinesProfileDetails()}
        </View>
      </View>
    </>
  );
}
