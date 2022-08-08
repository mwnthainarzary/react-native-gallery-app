import React from "react";
import { View, Text, ImageBackground } from "react-native";
function Slider() {
  return (
    <View
      style={{
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/slider.jpg")}
        style={{
          width: "100%",
          flex: 1,
          height: "100%",
          justifyContent: "center",
          opacity: 0.6,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
          }}
        >
          Slider1
        </Text>
      </ImageBackground>
    </View>
  );
}

export default Slider;
