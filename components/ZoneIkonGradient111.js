import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const ZoneIkonGradient111 = ({ style }) => {
  return (
    <Image
      style={[styles.zoneIkonGradient11, style]}
      resizeMode="cover"
      source={require("../assets/zone-ikon-gradient-1-11.png")}
    />
  );
};

const styles = StyleSheet.create({
  zoneIkonGradient11: {
    width: 18,
    height: 21,
  },
});

export default ZoneIkonGradient111;
