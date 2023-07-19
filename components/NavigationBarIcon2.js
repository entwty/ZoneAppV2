import React, { memo } from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const NavigationBarIcon2 = memo(({ style }) => {
  return (
    <Image
      style={[styles.navigationBarIcon, style]}
      resizeMode="cover"
      source={require("../assets/property-1variant51.png")}
    />
  );
});

const styles = StyleSheet.create({
  navigationBarIcon: {
    width: 375,
    height: 105,
  },
});

export default NavigationBarIcon2;
