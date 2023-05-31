import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import FrameComponent5 from "FrameComponent5";
import FrameComponent from "./Frame34734";
import FrameComponent4 from "./FrameComponent4";

const FrameComponent5 = ({ style }) => {
  const [frameCarouselItems, setFrameCarouselItems] = useState([
    <FrameComponent5 />,
    <FrameComponent />,
    <FrameComponent4 />,
  ]);

  return (
    <View style={[styles.parent, style]}>
      <Carousel
        width={Dimensions.get("window").width}
        mode="normal"
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

export default FrameComponent5;
