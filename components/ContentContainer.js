import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ContentContainer = () => {
  return (
    <View style={styles.content}>
      <View style={styles.bgColorPosition}>
        <Image
          style={[styles.photoIcon, styles.photoIconLayout]}
          resizeMode="cover"
          source={require("../assets/photo2.png")}
        />
      </View>
      <View style={[styles.bgColor, styles.colorBg]} />
      <View style={[styles.bottomContainer, styles.maskPhotoPosition]} />
      <View style={styles.maskPhotoPosition}>
        <View style={styles.bgColor1Position}>
          <Image
            style={[styles.photoIcon1, styles.photoIconLayout]}
            resizeMode="cover"
            source={require("../assets/photo3.png")}
          />
        </View>
        <View style={[styles.bgColor1, styles.bgColor1Position]} />
        <Text style={[styles.cemKaraca, styles.cemKaracaLayout]}>
          Cem Karaca
        </Text>
        <Text style={[styles.amatrFutbolcu, styles.cemKaracaLayout]}>
          Amatör Futbolcu
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photoIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    borderRadius: Border.br_mini,
    left: "36.95%",
    right: "-36.95%",
    width: "100%",
    position: "absolute",
  },
  colorBg: {
    opacity: 0.4,
    backgroundColor: Color.black000000,
    borderRadius: Border.br_mini,
  },
  maskPhotoPosition: {
    height: 83,
    left: 95,
    top: 354,
    transform: [
      {
        rotate: "-15deg",
      },
    ],
    width: 295,
    position: "absolute",
  },
  bgColor1Position: {
    left: -95,
    top: -354,
    transform: [
      {
        rotate: "-15deg",
      },
    ],
    height: 450,
    width: 295,
    position: "absolute",
  },
  cemKaracaLayout: {
    width: 263,
    textAlign: "left",
    color: Color.whiteFFFFFF,
    transform: [
      {
        rotate: "-15deg",
      },
    ],
    position: "absolute",
  },
  photoIcon: {
    height: "112.06%",
    top: "-16.22%",
    bottom: "4.16%",
  },
  bgColorPosition: {
    top: 0,
    transform: [
      {
        rotate: "-15deg",
      },
    ],
    height: 450,
    width: 295,
    left: 0,
    position: "absolute",
  },
  bgColor: {
    top: 0,
    transform: [
      {
        rotate: "-15deg",
      },
    ],
    height: 450,
    width: 295,
    left: 0,
    position: "absolute",
  },
  bottomContainer: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.black000000,
    left: 95,
    top: 354,
  },
  photoIcon1: {
    height: "100%",
    top: "61.81%",
    bottom: "-61.81%",
  },
  bgColor1: {
    opacity: 0.4,
    backgroundColor: Color.black000000,
    borderRadius: Border.br_mini,
  },
  cemKaraca: {
    top: 8,
    left: 32,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  amatrFutbolcu: {
    top: 38,
    left: 41,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
  },
  content: {
    top: 76,
    transform: [
      {
        rotate: "-15deg",
      },
    ],
    height: 450,
    width: 295,
    left: 0,
    position: "absolute",
  },
});

export default ContentContainer;
