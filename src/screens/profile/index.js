import { Text, View, Image, ImageBackground } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Avatar, Title } from "react-native-paper";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import { profileStyles } from "./style";
import { windowWidth } from "../../utils/dimensions";
import {
  calculateBudgetSpendingsAndIncomes,
  returnNewFormDisplayPrice,
} from "../../global/functions/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../../config";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import { findUser } from "../../global/async-storage";
import StatusBarCustomized from "../../components/statusBar";
import { renderUserNameIfNUll } from "../../global/functions/nameUser";

export default ProfileUser = ({ navigation }) => {
  let list = useSelector((state) => state.userSpendingsAndIncomesCategories);
  const user = useSelector((state) => state.userInformations);
  const [email, setEmail] = useState(renderUserNameIfNUll(user.name));

  // useEffect(() => {
  //   (async () => {
  //     const value = await findUser();
  //     const obj = JSON.parse(value);
  //     setEmail(obj.email);
  //   })();

  //   // this is for the cleanup function
  //   return () => {
  //     console.log("i m unmounting");
  //   };
  // }, []);

  const { totalIncomes, totalSpendings, currentBudget } =
    calculateBudgetSpendingsAndIncomes(list);

  const editProfile = () => {
    navigation.navigate("EditProfile");
  };

  const logOut = async () => {
    await AsyncStorage.clear();
    navigation.goBack();
  };
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const goToPlannedPayments = () => {
    navigation.navigate("PlannedPayments");
  };

  const renderLogOutIconAndDrawer = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: "5%",
          }}
        >
          <View onStartShouldSetResponder={openDrawer}>
            <Ionicons
              name="menu-outline"
              style={profileStyles.menuIcon}
              size={SIZES.BASE * 7}
            />
          </View>
          {config.LOGGEDIN != "true" && (
            <View onStartShouldSetResponder={logOut}>
              <Ionicons
                name="log-out-outline"
                style={profileStyles.logoutIcon}
                size={SIZES.BASE * 7}
              />
            </View>
          )}
        </View>
      </>
    );
  };

  const renderImageUserAndNamUser = () => {
    return (
      <>
        <Avatar.Image
          source={require("../../assets/images/elon_musk.jpg")}
          size={90}
        />

        <Text style={profileStyles.nameUser}>{email}</Text>
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
            <Text style={profileStyles.textInside}>
              {returnNewFormDisplayPrice(currentBudget)} DH
            </Text>
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
            <Text style={profileStyles.caption}>
              {returnNewFormDisplayPrice(totalIncomes)} DH
            </Text>
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
            <Text style={profileStyles.caption}>
              {returnNewFormDisplayPrice(totalSpendings)} DH
            </Text>
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
          // onStartShouldSetResponder={editProfile}
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

  return (
    <>
      <StatusBarCustomized />
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
};
