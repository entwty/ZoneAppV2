import * as React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { Border, Color } from "../GlobalStyles";

const FullscreenPhoto = () => {
  return (
    <View style={styles.fullscreenPhoto}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.fotoIconLayout1]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer5.png")}
      />
      <Image
        style={[styles.fotoIcon, styles.fotoIconLayout1]}
        resizeMode="cover"
        source={require("../assets/foto5.png")}
      />
      <Pressable style={styles.btnBackWrapper}>
        <View style={[styles.btnBack, styles.btnBackPosition]}>
          <View style={[styles.container, styles.btnBackPosition]} />
          <Image
            style={[styles.rightIcon, styles.fotoIconLayout1]}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </View>
      </Pressable>
      <View style={styles.fotoParent}>
        <Image
          style={[styles.fotoIcon1, styles.btnBackPosition]}
          resizeMode="cover"
          source={require("../assets/foto6.png")}
        />
        <Image
          style={[styles.fotoIcon2, styles.fotoIconLayout]}
          resizeMode="cover"
          source={require("../assets/foto7.png")}
        />
        <Image
          style={[styles.fotoIcon3, styles.fotoIconLayout]}
          resizeMode="cover"
          source={require("../assets/foto8.png")}
        />
        <Image
          style={[styles.fotoIcon4, styles.fotoIconLayout]}
          resizeMode="cover"
          source={require("../assets/foto9.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fotoIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  btnBackPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  fotoIconLayout: {
    opacity: 0.4,
    bottom: "14.29%",
    top: "14.29%",
    width: "20%",
    height: "71.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statusBarIphoneXOrNewe: {
    height: "5.42%",
    bottom: "94.58%",
    display: "none",
    left: "0%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
  },
  fotoIcon: {
    height: "61.58%",
    top: "17.36%",
    bottom: "21.06%",
    left: "0%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  container: {
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    right: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    top: "26.92%",
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
    position: "absolute",
  },
  btnBack: {
    right: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
  },
  btnBackWrapper: {
    height: "6.4%",
    width: "13.87%",
    top: "7.27%",
    right: "80.8%",
    bottom: "86.33%",
    left: "5.33%",
    position: "absolute",
  },
  fotoIcon1: {
    width: "28%",
    right: "72%",
    borderRadius: Border.br_3xs,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fotoIcon2: {
    right: "48%",
    left: "32%",
  },
  fotoIcon3: {
    right: "24%",
    left: "56%",
  },
  fotoIcon4: {
    left: "80%",
    right: "0%",
  },
  fotoParent: {
    height: "8.62%",
    width: "66.67%",
    top: "84.98%",
    right: "16.53%",
    bottom: "6.4%",
    left: "16.8%",
    position: "absolute",
  },
  fullscreenPhoto: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default FullscreenPhoto;
