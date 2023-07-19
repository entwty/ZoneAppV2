import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TimeText = memo(() => {
  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <Text style={styles.bugn}>Bugün</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 30,
    width: 60,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke_100,
  },
  bugn: {
    top: 3,
    left: 9,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    color: Color.darkgray,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 141,
    left: 157,
  },
});

export default TimeText;
