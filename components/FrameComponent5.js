import React, { useState, memo } from "react";
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

const FrameComponent5 = memo(({ style }) => {
  const [frameCarouselItems, setFrameCarouselItems] = useState([
    <FrameComponent5 />,
    <FrameComponent />,
    <FrameComponent4 />,
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

export default FrameComponent5;
