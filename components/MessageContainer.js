import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const MessageContainer = () => {
  return (
    <View style={styles.greenStatusParent}>
      <Image
        style={[styles.greenStatusIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/green-status1.png")}
      />
      <View style={[styles.container, styles.dividerLayout]}>
        <View style={[styles.divider, styles.dividerLayout]} />
      </View>
      <View style={[styles.messageIndicator, styles.containerIconLayout]}>
        <Image
          style={[styles.containerIcon, styles.containerIconLayout]}
          resizeMode="cover"
          source={require("../assets/container.png")}
        />
        <Text style={[styles.name, styles.nameLayout]}>1</Text>
      </View>
      <Text style={[styles.time, styles.nameLayout]}>10 dakika önce</Text>
      <Text style={[styles.message, styles.name1Typo]}>😍</Text>
      <Text style={[styles.name1, styles.name1Typo]}>Emel Zambak</Text>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group9.png")}
      />
      <Text style={[styles.message, styles.name1Typo]}>:)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    top: 0,
  },
  dividerLayout: {
    height: 1,
    width: 264,
    position: "absolute",
  },
  containerIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  nameLayout: {
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  name1Typo: {
    textAlign: "left",
    color: Color.black000000,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    left: 72,
    position: "absolute",
  },
  greenStatusIcon: {
    width: 56,
    height: 56,
    position: "absolute",
  },
  divider: {
    backgroundColor: Color.whitesmoke_200,
    left: 0,
    top: 0,
  },
  container: {
    top: 61,
    left: 72,
    width: 264,
  },
  containerIcon: {
    left: 0,
    top: 0,
  },
  name: {
    top: 1,
    left: 8,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
    textAlign: "center",
  },
  messageIndicator: {
    top: 32,
    left: 316,
  },
  time: {
    top: 11,
    left: 248,
    color: Color.silver,
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
  },
  message: {
    top: 31,
    width: 189,
    fontFamily: FontFamily.poppinsRegular,
  },
  name1: {
    top: 9,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 159,
  },
  maskGroupIcon: {
    top: 4,
    left: 4,
    width: 48,
    height: 48,
    position: "absolute",
  },
  greenStatusParent: {
    width: 336,
    height: 62,
  },
});

export default MessageContainer;
