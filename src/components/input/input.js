import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import { globalStyles } from "../../global/styles/globalStyles";

const Input = (props) => {
  const { nameIcon, value, ref, placeholder, onChangeText, isPassword } = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.inputContainer}>
        <Ionicons
          name={nameIcon}
          color={COLORS.PRIMARY}
          size={SIZES.FONT * 1.8}
          style={globalStyles.inputIcon}
        />
        {isPassword ? (
          <TextInput
            style={globalStyles.textInput}
            secureTextEntry
            value={value}
            placeholderTextColor={COLORS.GREY}
            placeholder={placeholder}
            onChangeText={onChangeText}
          />
        ) : (
          <TextInput
            style={globalStyles.textInput}
            ref={ref}
            value={value}
            placeholderTextColor={COLORS.GREY}
            placeholder={placeholder}
            onChangeText={onChangeText}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Input;
