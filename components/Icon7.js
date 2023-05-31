import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const Icon7 = ({ style }) => {
  return (
    <Image
      style={[styles.icon, style]}
      resizeMode="cover"
      source={require("../assets/2.png")}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 48,
  },
});

export default Icon7;
