import React, { memo } from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GalleryView = memo(() => {
  return (
    <View style={styles.fotoParent}>
      <Image
        style={[styles.fotoIcon, styles.fotoIconPosition1]}
        resizeMode="cover"
        source={require("../assets/foto.png")}
      />
      <Image
        style={[styles.fotoIcon1, styles.fotoIconPosition]}
        resizeMode="cover"
        source={require("../assets/foto1.png")}
      />
      <Image
        style={[styles.fotoIcon2, styles.fotoIconPosition]}
        resizeMode="cover"
        source={require("../assets/foto2.png")}
      />
      <Image
        style={[styles.fotoIcon3, styles.fotoIconPosition]}
        resizeMode="cover"
        source={require("../assets/foto3.png")}
      />
      <Image
        style={[styles.fotoIcon4, styles.fotoIconPosition1]}
        resizeMode="cover"
        source={require("../assets/foto4.png")}
      />
      <Pressable style={styles.readMore} />
      <Text style={styles.galeri}>Galeri</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  fotoIconPosition1: {
    height: 216,
    top: 44,
    position: "absolute",
  },
  fotoIconPosition: {
    height: 139,
    top: 270,
    position: "absolute",
  },
  fotoIcon: {
    width: 162,
    left: 0,
  },
  fotoIcon1: {
    width: 105,
    height: 139,
    top: 270,
    left: 0,
  },
  fotoIcon2: {
    left: 116,
    width: 104,
    height: 139,
    top: 270,
  },
  fotoIcon3: {
    left: 231,
    width: 105,
    height: 139,
    top: 270,
  },
  fotoIcon4: {
    left: 173,
    width: 163,
  },
  readMore: {
    top: 3,
    left: 248,
    position: "absolute",
  },
  galeri: {
    top: 0,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black000000,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  fotoParent: {
    top: 925,
    left: 20,
    width: 336,
    height: 409,
    position: "absolute",
  },
});

export default GalleryView;
