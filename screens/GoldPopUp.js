import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const GoldPopUp = () => {
  return (
    <View style={styles.goldPopUp}>
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
      <View
        style={[styles.zoneIkonTextYatayBeyaz1Parent, styles.groupItemLayout]}
      >
        <ImageBackground
          style={[styles.zoneIkonTextYatayBeyaz1, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/zoneikontextyataybeyaz1.png")}
        />
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-176847.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-42551.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Image
            style={[styles.frameInner, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Image
            style={[styles.frameInner, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <Image
          style={[styles.groupIcon, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-1768171.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-1768181.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-1768201.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-1768211.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-1768221.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-1768231.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-1768241.png")}
        />
        <Image
          style={[styles.groupChild7, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-1768191.png")}
        />
        <Text style={[styles.zelFrsatlarKarma, styles.satnAlClr]}>
          Özel Fırsatları Kaçırma
        </Text>
      </View>
      <Pressable style={[styles.satnAlWrapper, styles.groupParentPosition]}>
        <Text style={[styles.satnAl, styles.satnAlClr]}>Satın Al</Text>
      </Pressable>
    </View>
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
  groupItemLayout: {
    width: 248,
    position: "absolute",
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
  frameChild3Position: {
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    left: 1,
    top: 1,
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.black000000,
  },
  groupLayout1: {
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
  },
  ndrmPosition: {
    left: 26,
    textAlign: "left",
    position: "absolute",
  },
  ndrmTypo: {
    color: Color.goldenrod,
    fontFamily: FontFamily.poppinsExtrabold,
    fontWeight: "800",
  },
  groupLayout: {
    height: 154,
    width: 123,
    top: 0,
    position: "absolute",
  },
  groupInnerBg: {
    backgroundColor: Color.burlywood,
    borderRadius: Border.br_mini,
  },
  ay4Typo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  groupParentPosition: {
    left: "5.33%",
    position: "absolute",
  },
  groupChildLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "3.3%",
    height: "5.45%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: "10.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "3.3%",
    position: "absolute",
    overflow: "hidden",
  },
  satnAlClr: {
    color: Color.whiteFFFFFF,
    fontSize: FontSize.size_base,
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
  zoneIkonTextYatayBeyaz1: {
    width: 115,
    height: 37,
    position: "absolute",
  },
  groupChild: {
    top: 20,
    left: 115,
    width: 54,
    height: 23,
    position: "absolute",
  },
  groupItem: {
    top: 63,
    height: 2,
    left: 0,
  },
  zoneIkonTextYatayBeyaz1Parent: {
    top: 50,
    height: 65,
    left: 20,
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
    left: 139,
    flexDirection: "row",
    position: "absolute",
  },
  frameParent: {
    top: 495,
    width: 335,
    height: 181,
    left: 20,
    position: "absolute",
  },
  groupIcon: {
    width: "42.49%",
    top: "13.33%",
    right: "54.21%",
    bottom: "81.21%",
  },
  groupChild1: {
    width: "39.93%",
    top: "21.82%",
    right: "56.78%",
    bottom: "72.73%",
  },
  groupChild2: {
    width: "74.36%",
    top: "44.24%",
    right: "22.34%",
    bottom: "50.3%",
  },
  groupChild3: {
    width: "82.42%",
    top: "52.73%",
    right: "14.29%",
    bottom: "36.36%",
  },
  groupChild4: {
    width: "87.18%",
    top: "66.67%",
    right: "9.52%",
    bottom: "22.42%",
  },
  groupChild5: {
    width: "96.7%",
    top: "80.61%",
    right: "0%",
    bottom: "8.48%",
  },
  groupChild6: {
    width: "35.9%",
    top: "94.55%",
    right: "60.81%",
    bottom: "0%",
  },
  groupChild7: {
    width: "95.24%",
    top: "30.3%",
    right: "1.47%",
    bottom: "58.79%",
  },
  zelFrsatlarKarma: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
    top: 0,
    left: 0,
  },
  groupParent: {
    height: "40.64%",
    width: "72.8%",
    top: "16.63%",
    right: "21.87%",
    bottom: "42.73%",
  },
  satnAl: {
    top: 12,
    left: 132,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
  },
  satnAlWrapper: {
    height: "5.91%",
    width: "87.2%",
    top: "87.93%",
    right: "7.47%",
    bottom: "6.16%",
    backgroundColor: Color.burlywood,
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  goldPopUp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default GoldPopUp;
