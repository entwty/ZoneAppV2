import React, { memo } from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const Icon3 = memo(({ style }) => {
  return (
    <Image
      style={[styles.icon, style]}
      resizeMode="cover"
      source={require("../assets/41.png")}
    />
  );
});

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 48,
  },
});

export default Icon3;
