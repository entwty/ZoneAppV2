import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import FrameComponent8 from "FrameComponent8";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent6 from "./FrameComponent6";

const FrameComponent8 = ({ style }) => {
  const [frameCarouselItems, setFrameCarouselItems] = useState([
    <FrameComponent8 />,
    <FrameComponent7 />,
    <FrameComponent6 />,
  ]);

  return (
    <View style={[styles.parent, style]}>
      <Carousel
        width={Dimensions.get("window").width}
        mode="normal"
        autoPlay="false"
        loop="false"
        pagingEnabled="true"
        data={frameCarouselItems}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: 102,
    height: 128,
    opacity: 0.9,
  },
});

export default FrameComponent8;
