import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import SpecialOffersView from "../components/SpecialOffersView";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PlusPopUp = () => {
  return (
    <SafeAreaView style={styles.plusPopUp}>
      <Image
        style={[styles.navigationBarIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1variant21.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/backdrop.png")}
      />
      <SafeAreaView style={styles.frameParent}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Image
            style={[styles.frameInner, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
        </View>
      </SafeAreaView>
      <SpecialOffersView />
      <Pressable style={[styles.satnAlWrapper, styles.groupChildBg]}>
        <Text style={styles.satnAl}>Satın Al</Text>
      </Pressable>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-176842.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-42552.png")}
        />
        <ImageBackground
          style={[styles.zoneIkonTextYatayBeyaz1, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/zoneikontextyataybeyaz1.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 375,
    position: "absolute",
  },
  textPosition: {
    top: 0,
    left: 0,
  },
  frameLayout: {
    marginLeft: 10,
    height: 7,
    width: 7,
  },
  rectangleLayout: {
    opacity: 0.9,
    height: 128,
    width: 102,
    top: 19,
    position: "absolute",
  },
  frameChild1Position: {
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    left: 1,
    top: 1,
    backgroundColor: Color.whiteFFFFFF,
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  parentLayout: {
    height: 30,
    position: "absolute",
  },
  ayTypo: {
    top: 13,
    textAlign: "left",
    color: Color.black000000,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  ay1Typo: {
    left: 30,
    textAlign: "left",
    color: Color.black000000,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black000000,
    position: "absolute",
  },
  ndrmTypo: {
    fontFamily: FontFamily.poppinsExtrabold,
    fontWeight: "800",
    color: Color.whiteFFFFFF,
  },
  groupLayout1: {
    height: 154,
    width: 123,
    top: 0,
  },
  groupChildBg: {
    backgroundColor: Color.mediumspringgreen,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  ay2Typo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  groupItemLayout: {
    height: 23,
    position: "absolute",
  },
  groupLayout: {
    width: 248,
    position: "absolute",
  },
  navigationBarIcon: {
    top: 713,
    height: 99,
    display: "none",
    left: 0,
  },
  backdropIcon: {
    opacity: 0.7,
    width: 375,
    position: "absolute",
    height: 812,
  },
  frameChild: {
    opacity: 0.5,
    height: 7,
    width: 7,
  },
  frameInner: {
    opacity: 0.5,
  },
  ellipseParent: {
    top: 174,
    left: 147,
    flexDirection: "row",
    position: "absolute",
  },
  frameParent: {
    top: 289,
    width: 335,
    height: 181,
    left: 20,
    position: "absolute",
  },
  satnAl: {
    top: 12,
    left: 132,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    color: Color.whiteFFFFFF,
    position: "absolute",
  },
  satnAlWrapper: {
    height: "5.91%",
    width: "87.2%",
    top: "87.93%",
    right: "7.47%",
    bottom: "6.16%",
    left: "5.33%",
    overflow: "hidden",
  },
  groupItem: {
    top: 20,
    left: 115,
    width: 45,
  },
  groupInner: {
    top: 59,
    height: 2,
    left: 0,
  },
  zoneIkonTextYatayBeyaz1: {
    width: 115,
    height: 37,
    position: "absolute",
  },
  groupParent: {
    top: 50,
    height: 61,
    left: 20,
  },
  plusPopUp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default PlusPopUp;
