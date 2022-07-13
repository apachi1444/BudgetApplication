import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyles, images} from '../styles/global';
const FlatButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyle.button}>
        <Text style={buttonStyle.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const buttonStyle = {
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTranform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
};
export default FlatButton;
