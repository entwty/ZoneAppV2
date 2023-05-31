import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const UserInfoContainer = () => {
  return (
    <View style={[styles.maskGroup, styles.maskGroupTransform]}>
      <Image
        style={styles.photoIcon}
        resizeMode="cover"
        source={require("../assets/photo4.png")}
      />
      <View style={[styles.maskGroup1, styles.maskGroupTransform]}>
        <Image
          style={styles.maskGroupIcon}
          resizeMode="cover"
          source={require("../assets/mask-group18.png")}
        />
        <Text style={[styles.almilaAkgz23, styles.almilaAkgz23Layout]}>
          Almila Açıkgöz, 23
        </Text>
        <Text style={[styles.profesyonelModel, styles.almilaAkgz23Layout]}>
          Profesyonel Model
        </Text>
      </View>
      <Image
        style={styles.likeIcon}
        resizeMode="cover"
        source={require("../assets/like4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupTransform: {
    transform: [
      {
        rotate: "15deg",
      },
    ],
    width: 295,
    position: "absolute",
  },
  almilaAkgz23Layout: {
    width: 263,
    textAlign: "left",
    color: Color.whiteFFFFFF,
    transform: [
      {
        rotate: "15deg",
      },
    ],
    position: "absolute",
  },
  photoIcon: {
    height: "112.06%",
    width: "98.18%",
    top: "0.75%",
    right: "40.16%",
    bottom: "-12.81%",
    left: "-38.34%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 0,
    left: -17,
    width: 290,
    height: 150,
    position: "absolute",
  },
  almilaAkgz23: {
    top: 15,
    left: 13,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  profesyonelModel: {
    top: 50,
    left: 3,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
  },
  maskGroup1: {
    top: 357,
    left: -96,
    height: 80,
  },
  likeIcon: {
    top: 186,
    left: -6,
    width: 180,
    height: 180,
    position: "absolute",
  },
  maskGroup: {
    top: 118,
    left: 198,
    height: 450,
  },
});

export default UserInfoContainer;
