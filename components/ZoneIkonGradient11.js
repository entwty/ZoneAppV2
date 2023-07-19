import React, { memo } from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const ZoneIkonGradient11 = memo(({ style }) => {
  return (
    <Image
      style={[styles.zoneIkonGradient11, style]}
      resizeMode="cover"
      source={require("../assets/zone-ikon-gradient-1-11.png")}
    />
  );
});

const styles = StyleSheet.create({
  zoneIkonGradient11: {
    width: 18,
    height: 21,
    opacity: 0.7,
  },
});

export default ZoneIkonGradient11;
