import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const FrameComponent1 = ({ style }) => {
  return (
    <View style={[styles.rectangleParent, style, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.textPosition]} />
      <View style={styles.frameItem} />
      <Text style={[styles.enDoluPaket, styles.ayTypo]}>EN DOLU PAKET</Text>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.ayTypo]}>12</Text>
        <Text style={[styles.ay, styles.ayTypo]}>ay</Text>
      </View>
      <Text style={[styles.ay1, styles.ayTypo]}>₺69,90/ay</Text>
      <Text style={[styles.text1, styles.ndrmPosition]}>₺839,90</Text>
      <Text style={[styles.ndrm, styles.ndrmPosition]}>%30 İNDİRİM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 128,
    width: 102,
  },
  textPosition: {
    left: 0,
    top: 0,
  },
  ayTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  ndrmPosition: {
    left: 26,
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_200,
    position: "absolute",
    height: 128,
    width: 102,
  },
  frameItem: {
    top: 1,
    left: 1,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.whiteFFFFFF,
    width: 100,
    height: 22,
    position: "absolute",
  },
  enDoluPaket: {
    top: 6,
    left: 19,
    color: Color.black000000,
    fontSize: FontSize.size_5xs,
  },
  text: {
    fontSize: FontSize.size_xl,
    color: Color.whiteFFFFFF,
    left: 0,
    top: 0,
  },
  ay: {
    top: 13,
    left: 20,
    color: Color.whiteFFFFFF,
    fontSize: FontSize.size_5xs,
  },
  parent: {
    top: 26,
    left: 36,
    width: 31,
    height: 30,
    position: "absolute",
  },
  ay1: {
    top: 57,
    left: 30,
    color: Color.whiteFFFFFF,
    fontSize: FontSize.size_5xs,
  },
  text1: {
    top: 98,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.whiteFFFFFF,
  },
  ndrm: {
    top: 79,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    color: Color.firebrick,
    fontSize: FontSize.size_5xs,
  },
  rectangleParent: {
    opacity: 0.9,
  },
});

export default FrameComponent1;
