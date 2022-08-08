import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import COLORS from "../consts/color";
import { SIZES } from "../consts/theme";
import Icon, { Icons } from "../components/icon";
export const TabIcon = (props) => {
  const { item, focused } = props;
  return (
    <View style={styles.iconAndLabelView}>
      <Icon
        type={item.type}
        name={item.icon}
        style={styles.icon}
        color={focused ? COLORS.FOCUSEDTAB : COLORS.PRIMARY}
      />
      <Text
        style={[
          {
            color: focused ? COLORS.FOCUSEDTAB : COLORS.PRIMARY,
            fontWeight: "700",
          },
        ]}
      >
        {item.label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    height: SIZES.BASE * 10,
    backgroundColor: COLORS.BOTTOMBAR,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonAdd: {
    width: SIZES.BASE * 9,
    height: SIZES.BASE * 9,
    borderRadius: SIZES.BASE * 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.BASE * 8,
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 25,
  },
  icon: {
    fontSize: 26,
  },
  iconAndLabelView: {
    alignItems: "center",
  },
});
