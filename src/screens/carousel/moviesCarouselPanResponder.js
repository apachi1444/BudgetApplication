import React, { useRef } from "react";
import { View, Text, Image, PanResponder, Animated } from "react-native";
import { windowWidth } from "../../utils/dimensions";

const MoviesCarouselPanResponder = (props) => {
  const getStyle = () => {
    return {
      slider: {
        flexDirection: "row",
        height: 300,
        width: movies.length * windowWidth,
        transform: [
          {
            translateX: translate,
          },
        ],
      },
      image: { width: windowWidth, height: 300 },
    };
  };

  const translate = new Animated.Value(0);

  const translation = Animated.timing(translate, {
    toValue: windowWidth * -1,
    duration: 300,
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // the gesture has just started
      onPanResponderGrant: (evt) => {
        // console.log(pan.getLayout());
        // pan.setOffset({
        //   x: pan.x._value,
        //   y: pan.y._value,
        // });
        console.log("first Time Clicked");
      },
      onMoveShouldSetPanResponder: (evt, gesture) => {
        return Math.abs(gesture.dx) > 7;
      },
      onPanResponderMove: Animated.event([null, { dx: translate }]),
      onPanResponderRelease: () => {
        console.log("Je Lache");

        // pan.flattenOffset();
      },
      onPanResponderTerminate: (evt, gesture) => {
        console.log("this is the end dude ahah");
      },
    })
  ).current;

  const endGesture = (evt, gesture) => {
    let toValue = 0;

    if (Math.abs(gesture.dx) / windowWidth > 0.2) {
      if (gesture.dx) {
        toValue = windowWidth * -1;
      } else {
        toValue = windowWidth * 1;
      }
      Animated.timing(translate, {
        toValue: toValue,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const movies = [
    {
      title: "Movie number 1",
      image: "http://placekitten.com/200/300",
    },
    {
      title: "Movie number 2",
      image: "http://placekitten.com/200/400",
    },
  ];

  const style = getStyle();
  return (
    <Animated.View style={style.slider} {...panResponder.panHandlers}>
      {movies.map((movie, index) => {
        return (
          <Image
            key={index}
            source={{ uri: movie.image }}
            style={style.image}
          />
        );
      })}
    </Animated.View>
  );
};

export default MoviesCarouselPanResponder;
