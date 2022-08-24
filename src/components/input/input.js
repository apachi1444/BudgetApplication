import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import { globalStyles } from "../../global/styles/globalStyles";

const Input = (props) => {
  const {
    nameIcon,
    value,
    ref,
    placeholder,
    onChangeText,
    isPassword,
    touched,
    error,
    onBlur,
    isNumeric,
    setter,
    setterValue,
  } = props;
  var borderRed;

  if (touched && error) {
    setter(true);
  } else if (touched && !error) {
    setter(false);
  }
  touched && error
    ? (borderRed = {
        borderColor: COLORS.RED,
        borderWidth: 2,
      })
    : {};

  const changeBorderColorAndSetter = () => {
    borderRed = {
      borderColor: COLORS.GREEN,
      borderWidth: 2,
    };
    setterValue(value);
  };

  touched && !error ? changeBorderColorAndSetter() : {};
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <View style={[globalStyles.inputContainer, borderRed]}>
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
              onBlur={onBlur}
              keyboardType={isNumeric ? "numeric" : "default"}
            />
          )}
        </View>
        {touched && error ? (
          <View style={globalStyles.containerErrorMessage}>
            <Text style={globalStyles.errorText}>{touched && error}</Text>
          </View>
        ) : null}
      </>
    </TouchableWithoutFeedback>
  );
};

export default Input;
