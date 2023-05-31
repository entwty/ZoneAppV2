import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Photos = () => {
  return (
    <View style={[styles.photos, styles.photosLayout]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <Pressable style={styles.onaylaWrapper}>
        <Text style={[styles.onayla, styles.onaylaTypo]}>Onayla</Text>
      </Pressable>
      <View style={[styles.btnBack, styles.btnBackPosition]}>
        <View style={[styles.container, styles.btnBack1Position]} />
        <Image
          style={[styles.rightIcon, styles.rightIconPosition]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.enYiFotoraflarnEkleParent, styles.btnBackPosition]}>
        <Text style={[styles.enYiFotoraflarn, styles.rightIconPosition]}>
          En İyi Fotoğraflarını Ekle
        </Text>
        <Pressable style={[styles.btnBack1, styles.btnBack1Position]}>
          <View style={[styles.container, styles.btnBack1Position]} />
          <Image
            style={[styles.rightIcon, styles.rightIconPosition]}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.dahaYksekMiktarda}>
        Daha yüksek miktarda günlük eşleşme elde etmek için en iyi
        fotoğraflarınızı ekleyin
      </Text>
      <Image
        style={[styles.photosChild, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-18146.png")}
      />
      <Image
        style={[styles.photosItem, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group-18146.png")}
      />
      <Image
        style={[styles.photosInner, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-18146.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group-18146.png")}
      />
      <Image
        style={[styles.photosChild1, styles.photosChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-18146.png")}
      />
      <Image
        style={[styles.photosChild2, styles.photosChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-18146.png")}
      />
      <View style={[styles.rectangleParent, styles.childLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Image
          style={styles.unsplashd1upkifd04aIcon}
          resizeMode="cover"
          source={require("../assets/unsplashd1upkifd04a1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photosLayout: {
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  onaylaTypo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  btnBackPosition: {
    bottom: "86.33%",
    top: "7.27%",
    height: "6.4%",
    left: "5.33%",
    position: "absolute",
  },
  btnBack1Position: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  rightIconPosition: {
    top: "26.92%",
    position: "absolute",
  },
  childLayout: {
    height: 140,
    width: 105,
    position: "absolute",
  },
  groupIconPosition: {
    left: 136,
    height: 140,
    width: 105,
    position: "absolute",
  },
  photosChildPosition: {
    left: 251,
    height: 140,
    width: 105,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    width: 375,
    height: 44,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  onayla: {
    top: 12,
    left: 134,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
    position: "absolute",
  },
  onaylaWrapper: {
    height: "5.91%",
    width: "87.2%",
    top: "87.93%",
    right: "7.47%",
    bottom: "6.16%",
    backgroundColor: Color.mediumvioletred_100,
    borderRadius: Border.br_mini,
    left: "5.33%",
    position: "absolute",
    overflow: "hidden",
  },
  container: {
    right: "0%",
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    borderRadius: Border.br_mini,
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  btnBack: {
    width: "13.87%",
    right: "80.8%",
  },
  enYiFotoraflarn: {
    left: "31.13%",
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    color: Color.gray_600,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  btnBack1: {
    width: "20.23%",
    right: "79.77%",
  },
  enYiFotoraflarnEkleParent: {
    width: "68.53%",
    right: "26.13%",
  },
  dahaYksekMiktarda: {
    top: 141,
    left: 20,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black000000,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 336,
    position: "absolute",
  },
  photosChild: {
    left: 21,
    width: 105,
    top: 417,
  },
  photosItem: {
    top: 417,
  },
  photosInner: {
    top: 237,
    left: 21,
    width: 105,
  },
  groupIcon: {
    top: 237,
  },
  photosChild1: {
    top: 417,
  },
  photosChild2: {
    top: 237,
  },
  groupChild: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  unsplashd1upkifd04aIcon: {
    top: 15,
    left: 11,
    width: 84,
    height: 125,
    position: "absolute",
  },
  rectangleParent: {
    top: 237,
    left: 21,
    width: 105,
    display: "none",
  },
  photos: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Photos;
