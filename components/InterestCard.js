import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const InterestCard = memo(() => {
  return (
    <View style={styles.interestedIn}>
      <View style={[styles.container, styles.containerPosition]} />
      <View style={[styles.selectedContainer, styles.containerPosition]} />
      <Text style={[styles.dier, styles.kzLayout]}>Diğer</Text>
      <View style={[styles.divider2, styles.dividerLayout]} />
      <Text style={styles.erkek}>Erkek</Text>
      <View style={[styles.divider1, styles.dividerLayout]} />
      <Text style={[styles.kz, styles.kzTypo]}>Kız</Text>
      <Text style={[styles.banaGster, styles.kzTypo]}>Bana Göster</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  containerPosition: {
    left: "0%",
    bottom: "0%",
    top: "43.14%",
    height: "56.86%",
    position: "absolute",
  },
  kzLayout: {
    width: 58,
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    top: 62,
  },
  dividerLayout: {
    height: 22,
    width: 1,
    backgroundColor: Color.borderE8E6EA,
    top: 62,
    position: "absolute",
  },
  kzTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
  selectedContainer: {
    width: "33.22%",
    right: "66.78%",
    borderTopLeftRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.mediumvioletred_100,
  },
  dier: {
    left: 217,
    color: Color.black000000,
    fontFamily: FontFamily.poppinsRegular,
    width: 58,
    position: "absolute",
  },
  divider2: {
    left: 197,
  },
  erkek: {
    left: 118,
    width: 59,
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    top: 62,
    color: Color.black000000,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  divider1: {
    left: 97,
    display: "none",
  },
  kz: {
    left: 20,
    color: Color.whiteFFFFFF,
    width: 58,
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    top: 62,
  },
  banaGster: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    textAlign: "left",
    color: Color.black000000,
  },
  interestedIn: {
    height: "15.79%",
    width: "78.67%",
    top: "16.1%",
    right: "10.67%",
    bottom: "68.11%",
    left: "10.67%",
    position: "absolute",
  },
});

export default InterestCard;
