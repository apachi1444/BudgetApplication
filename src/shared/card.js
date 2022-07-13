import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {MaterialIcons} from '@expo/vector-icons';
export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 5,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
