import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const NavigationBarIcon3 = ({ style }) => {
  return (
    <Image
      style={[styles.navigationBarIcon, style]}
      resizeMode="cover"
      source={require("../assets/property-1default4.png")}
    />
  );
};

const styles = StyleSheet.create({
  navigationBarIcon: {
    width: 375,
    height: 105,
  },
});

export default NavigationBarIcon3;
