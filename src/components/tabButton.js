import React, { useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/FontAwesome";
import Modal from "react-native-modal";
import COLORS from "../consts/color";
import Add from "./add/add";
import { windowWidth } from "../utils/dimensions";

const SIZE = windowWidth * 0.19;

export const TabButton = (props) => {
  const { accessibilityState } = props;
  const focused = accessibilityState.selected;

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  mode = new Animated.Value(0);
  toggleView = () => {
    Animated.timing(mode, {
      toValue: mode._value === 0 ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const firstX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZE, -SIZE / 2],
  });
  const firstY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -SIZE / 2.5],
  });
  const secondX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZE / 2, SIZE / 6.5],
  });
  const secondY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -60],
  });
  const thirdX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZE / 2, SIZE * 0.82],
  });
  const thirdY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -SIZE / 2.5],
  });
  const opacity = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  useEffect(() => {
    if (focused) {
      // here we will do the animation of the three buttons to add a spending or an income
    } else {
    }
  }, [focused]);

  const Circle = (props) => {
    const { x, y, opacity, name } = props;
    return (
      <Animated.View
        style={{
          position: "absolute",
          left: x,
          top: y,
          opacity,
        }}
      >
        <TouchableHighlight
          underlayColor="transparent"
          onPress={handleModal}
          style={styles.littleCircle}
        >
          <Ionicons name={name} size={16} color={COLORS.BLACK} />
        </TouchableHighlight>
      </Animated.View>
    );
  };

  const renderThreeCirclesAnimation = () => {
    return (
      <>
        <Circle
          x={firstX}
          y={firstY}
          opacity={opacity}
          name={"arrow-up-circle"}
          rotatione={rotation}
        />
        <Circle
          x={thirdX}
          y={thirdY}
          opacity={opacity}
          name={"arrow-down-circle"}
          rotatione={rotation}
        />
        <Circle
          x={secondX}
          y={secondY}
          rotatione={rotation}
          opacity={opacity}
          name="home"
        />
      </>
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleModal}>
      <View style={styles.container}>
        <View>
          <Modal
            presentationStyle="overFullScreen"
            isVisible={isModalVisible}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                backgroundColor: "transparent",
                flex: 1,
              }}
            >
              <Add handleModal={handleModal} />
            </View>
          </Modal>
        </View>
        <View>
          <TouchableHighlight
            // onPress={toggleView}
            onPress={handleModal}
            underlayColor="transparent"
            style={styles.buttonPlus}
          >
            <Animated.View
              style={{
                transform: [{ rotate: rotation }],
              }}
            >
              <Icon name="plus" size={30} color={COLORS.BLACK} />
            </Animated.View>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonPlus: {
    alignItems: "center",
    justifyContent: "center",
    width: SIZE / 1.25,
    height: SIZE / 1.25,
    borderRadius: SIZE / 2,
    marginBottom: SIZE / 1.5,
    backgroundColor: COLORS.SECONDARY,
  },

  littleCircle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: SIZE / 2,
    height: SIZE / 2,
    borderRadius: SIZE / 4,
    backgroundColor: COLORS.SECONDARY,
  },
});
