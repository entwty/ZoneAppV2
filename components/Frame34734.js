import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const FrameComponent = memo(({ style }) => {
  return (
    <View style={[styles.frameParent, style]}>
      <View style={styles.groupPosition}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>3</Text>
            <Text style={[styles.ay, styles.ayTypo]}>ay</Text>
          </View>
          <Text style={[styles.ay1, styles.ayTypo]}>₺33,90/ay</Text>
          <Text style={[styles.text1, styles.textFlexBox]}>₺30,90</Text>
          <Text style={[styles.ndrm, styles.ayTypo]}>%10 İNDİRİM</Text>
        </View>
      </View>
      <View style={styles.frameChild} />
      <Text style={[styles.enPopler, styles.ayTypo]}>EN POPÜLER</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 154,
    width: 123,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black000000,
    position: "absolute",
  },
  ayTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.burlywood,
  },
  text: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  ay: {
    top: 15,
    left: 16,
    color: Color.black000000,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  parent: {
    top: 29,
    left: 47,
    width: 29,
    height: 36,
    position: "absolute",
  },
  ay1: {
    top: 65,
    left: 35,
    color: Color.black000000,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text1: {
    top: 115,
    left: 37,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  ndrm: {
    top: 90,
    left: 31,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.goldenrod,
  },
  frameChild: {
    top: 1,
    left: 1,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.whiteFFFFFF,
    width: 121,
    height: 23,
    position: "absolute",
  },
  enPopler: {
    top: 5,
    left: 33,
    color: Color.black000000,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameParent: {
    height: 154,
    width: 123,
  },
});

export default FrameComponent;
