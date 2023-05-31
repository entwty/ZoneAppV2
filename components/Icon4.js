import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const Icon4 = ({ style }) => {
  return (
    <Image
      style={[styles.icon, style]}
      resizeMode="cover"
      source={require("../assets/3.png")}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 48,
  },
});

export default Icon4;
