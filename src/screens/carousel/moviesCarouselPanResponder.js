import React, { useRef } from "react";
import { View, Text, Image, PanResponder } from "react-native";
import { windowWidth } from "../../utils/dimensions";

const MoviesCarouselPanResponder = (props) => {
  const getStyle = () => {
    return {
      slider: {
        flexDirection: "row",
        height: 300,
        width: movies.length * windowWidth,
      },
      image: { width: windowWidth, height: 300 },
    };
  };

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
      onPanResponderMove: (evt, gesture) => {
        // console.log("ARGS ! ", { ...args[1] });
        // pan.x.setValue(gesture.dx);
        // pan.y.setValue(gesture.dy);
        console.log(evt.nativeEvent.locationX);
        console.log("Je Bouge");
      },
      onPanResponderRelease: () => {
        console.log("Je Lache");
        // pan.flattenOffset();
      },
      onPanResponderTerminate: (evt, gesture) => {
        console.log("this is the end dude ahah");
      },
    })
  ).current;

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
    <View style={style.slider} {...panResponder.panHandlers}>
      {movies.map((movie, index) => {
        return (
          <Image
            key={index}
            source={{ uri: movie.image }}
            style={style.image}
          />
        );
      })}
    </View>
  );
};

export default MoviesCarouselPanResponder;
