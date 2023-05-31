import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const Component1Icon1 = ({ style }) => {
  return (
    <Image
      style={[styles.component1Icon, style]}
      resizeMode="cover"
      source={require("../assets/component-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  component1Icon: {
    width: 61,
    height: 55,
  },
});

export default Component1Icon1;