import React, { memo } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ViewButtons = memo(() => {
  return (
    <View style={styles.tmElemeler35Parent}>
      <Text style={styles.tmElemeler35}>Tüm Eşleşmeler (35)</Text>
      <Pressable style={[styles.btnBack, styles.btnBackPosition]}>
        <View style={[styles.container, styles.btnBackPosition]} />
        <Image
          style={styles.rightIcon}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </Pressable>
      <Pressable style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search1.png")}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  btnBackPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  frameChildLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  tmElemeler35: {
    top: "28.85%",
    left: "19.94%",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.gray_600,
    textAlign: "center",
    position: "absolute",
  },
  container: {
    width: "100%",
    right: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.whiteFFFFFF,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    top: "26.92%",
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  btnBack: {
    width: "15.48%",
    right: "84.52%",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lavenderblush,
  },
  searchIcon: {
    top: 9,
    left: 9,
    width: 12,
    height: 12,
    position: "absolute",
  },
  rectangleParent: {
    top: 11,
    left: 306,
  },
  tmElemeler35Parent: {
    height: "6.4%",
    width: "89.6%",
    top: "7.27%",
    right: "5.07%",
    bottom: "86.33%",
    left: "5.33%",
    position: "absolute",
  },
});

export default ViewButtons;
