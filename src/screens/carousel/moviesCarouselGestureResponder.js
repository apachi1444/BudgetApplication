import React, { useRef } from "react";
import { View, Text, Image, PanResponder } from "react-native";
import { windowWidth } from "../../utils/dimensions";

const MoviesCarousel = (props) => {
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
      onPanResponderGrant: () => {
        // console.log(pan.getLayout());
        // pan.setOffset({
        //   x: pan.x._value,
        //   y: pan.y._value,
        // });
      },
      onMoveShouldSetPanResponder: (evt, gesture) => {
        console.log({ ...evt });
        return Math.abs(gesture.dx) > 7;
      },
      onPanResponderMove: (_, gesture) => {
        // console.log("ARGS ! ", { ...args[1] });
        // pan.x.setValue(gesture.dx);
        // pan.y.setValue(gesture.dy);
        console.log("Je Bouge");
      },
      onPanResponderRelease: () => {
        console.log("Je Lache");
        // pan.flattenOffset();
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
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={(evt) => {
        console.log("Received " + evt.target);
      }}
      onResponderMove={(evt) => {}}
      style={style.slider}
    >
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

export default MoviesCarousel;
