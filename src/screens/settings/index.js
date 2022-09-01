import { StyleSheet, Text, View, Alert, SafeAreaView } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { globalStyles } from "../../global/styles/globalStyles";
import COLORS from "../../consts/color";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileStyles } from "./style";
import { renderUserNameIfNUll } from "../../global/functions/nameUser";
import { displayResetAllAlert } from "../../components/alertResetAll";
import { deleteAllCategories } from "../../redux/features/user/userSpendingsAndIncomesCategories";
import { deleteAllTypeTransactions } from "../../redux/features/user/userSpendingsAndIncomesTypeTransaction";
export default function Settings({ navigation }) {
  const [isEnabledSettings, setIsEnabledSettings] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInformations);
  const name = renderUserNameIfNUll(user.name);
  const toggleSwitch = () => {
    setIsEnabledSettings(!isEnabledSettings);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const showLanguages = () => {
    Alert.alert(
      "Change Applicatino Language",
      "There is only ENGLISH for the moment",
      [
        {
          text: "Try later",
          onPress: () => {},
        },
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "OK", onPress: () => {} },
      ]
    );
  };

  const renderClearAllButton = () => {
    const deleteItems = () => {
      dispatch(deleteAllCategories());
      dispatch(deleteAllTypeTransactions());
    };
    return (
      <View
        style={{
          backgroundColor: COLORS.RED,
          padding: SIZES.BASE * 3,
          borderRadius: SIZES.BASE * 2,
          marginVertical: SIZES.BASE * 8,
        }}
        onStartShouldSetResponder={() => {
          return displayResetAllAlert(deleteItems);
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: SIZES.BASE * 2.5,
          }}
        >
          Reset All
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <View style={profileStyles.container}>
        <View style={profileStyles.containerInformationsUser}>
          <Avatar.Image
            source={require("../../assets/images/elon_musk.jpg")}
            size={130}
          />
          <Text style={profileStyles.nameUser}>{name}</Text>

          <View style={profileStyles.categorySettings}>
            <Text>Preferences</Text>
          </View>
          {/* // this is for the each line of profile Details */}

          <View
            style={profileStyles.profileDetailLine}
            onStartShouldSetResponder={toggleSwitch}
          >
            <Ionicons
              name="bulb"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 4.2}
            />
            <Text style={profileStyles.textInsideProfileDetailLine}>
              Dark Mode
            </Text>
            <View
              style={[
                profileStyles.lastElementOfProfileDetailLine,
                profileStyles.toggleSetting,
                {
                  backgroundColor: isEnabledSettings
                    ? COLORS.GREY
                    : COLORS.PRIMARY,
                },
              ]}
            >
              <View
                style={[
                  profileStyles.circleInsideToggleSetting,
                  {
                    left: isEnabledSettings ? "10%" : "55%",
                  },
                ]}
              ></View>
            </View>
          </View>

          <View
            style={profileStyles.profileDetailLine}
            onStartShouldSetResponder={showLanguages}
          >
            <Ionicons
              name="language"
              color={COLORS.PRIMARY}
              size={SIZES.BASE * 4.2}
              style={profileStyles.iconProfileDetailLine}
            />
            <Text style={profileStyles.textInsideProfileDetailLine}>
              Language
            </Text>
            <View style={profileStyles.lastElementOfProfileDetailLine}>
              <Text style={profileStyles.specificLanguageText}>English</Text>
              <FontAwesome
                name="arrow-right"
                color={COLORS.PRIMARY}
                size={SIZES.BASE * 2.9}
              />
            </View>
          </View>
          {renderClearAllButton()}
        </View>
      </View>
    </SafeAreaView>
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
