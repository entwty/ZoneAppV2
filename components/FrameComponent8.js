import React, { useState, memo } from "react";
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

const FrameComponent8 = memo(({ style }) => {
  const [frameCarouselItems, setFrameCarouselItems] = useState([
    <FrameComponent8 />,
    <FrameComponent7 />,
    <FrameComponent6 />,
  ]);

  return (
    <View style={[styles.parent, style]}>
      <Carousel
        style={styles.carousel}
        width={102}
        mode="normal"
        pagingEnabled={true}
        data={frameCarouselItems}
        renderItem={({ item }) => item}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  carousel: {
    width: 102,
    height: 128,
  },
  parent: {
    width: 102,
    height: 128,
    opacity: 0.9,
  },
});

export default FrameComponent8;
