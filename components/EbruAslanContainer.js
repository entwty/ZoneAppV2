import React, { memo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const EbruAslanContainer = memo(() => {
  return (
    <View style={styles.greenStatusParent}>
      <Image
        style={[styles.greenStatusIcon, styles.dividerPosition]}
        resizeMode="cover"
        source={require("../assets/green-status1.png")}
      />
      <View style={[styles.container, styles.dividerLayout]}>
        <View style={[styles.divider, styles.dividerLayout]} />
      </View>
      <Text style={styles.time}>1 gün önce gönderildi</Text>
      <Text style={[styles.message, styles.nameTypo]}>
        <Text style={styles.sen}>{`Sen: `}</Text>
        <Text style={styles.naslsn}>Nasılsın ?</Text>
      </Text>
      <Text style={[styles.name, styles.nameTypo]}>Ebru Aslan</Text>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group12.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  dividerPosition: {
    left: 0,
    top: 0,
  },
  dividerLayout: {
    height: 1,
    width: 264,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
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
  time: {
    top: 11,
    left: 208,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.silver,
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  sen: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightgray,
  },
  naslsn: {
    color: Color.black000000,
    fontFamily: FontFamily.poppinsRegular,
  },
  message: {
    top: 31,
    width: 189,
  },
  name: {
    top: 9,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 159,
    color: Color.black000000,
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
    marginTop: 10,
  },
});

export default EbruAslanContainer;
