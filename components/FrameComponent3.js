import React, { useState, memo } from "react";
import {
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import FrameComponent3 from "FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";

const FrameComponent3 = memo(({ style }) => {
  const [frameCarouselItems, setFrameCarouselItems] = useState([
    <FrameComponent3 />,
    <FrameComponent2 />,
    <FrameComponent1 />,
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

export default FrameComponent3;
