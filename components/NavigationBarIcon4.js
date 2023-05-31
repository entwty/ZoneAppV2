import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const NavigationBarIcon4 = ({ style }) => {
  return (
    <Image
      style={[styles.navigationBarIcon, style]}
      resizeMode="cover"
      source={require("../assets/navigation-bar3.png")}
    />
  );
};

const styles = StyleSheet.create({
  navigationBarIcon: {
    width: 375,
    height: 105,
  },
});

export default NavigationBarIcon4;
