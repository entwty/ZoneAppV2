import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.maskGroupIconPosition]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer1.png")}
      />
      <Image
        style={styles.homeChild}
        resizeMode="cover"
        source={require("../assets/frame-34730.png")}
      />
      <Pressable style={[styles.btnBack, styles.btnBackPosition]}>
        <View style={[styles.container, styles.kefetPosition]} />
        <Image
          style={[styles.rightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </Pressable>
      <View style={[styles.stanbulParent, styles.btnBackPosition]}>
        <Text style={[styles.stanbul, styles.kefetFlexBox]}>İstanbul</Text>
        <Text style={[styles.kefet, styles.kefetFlexBox]}>Keşfet</Text>
      </View>
      <Image
        style={styles.btnFilterIcon}
        resizeMode="cover"
        source={require("../assets/btn-filter.png")}
      />
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
        resizeMode="cover"
      />
      <View style={[styles.maskGroup, styles.maskGroupLayout]}>
        <Image
          style={[styles.photoIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/photo1.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group14.png")}
        />
      </View>
      <Image
        style={styles.paginationV1Icon}
        resizeMode="cover"
        source={require("../assets/pagination-v1.png")}
      />
      <View style={styles.location}>
        <Pressable style={[styles.container1, styles.containerLayout]} />
        <Pressable style={[styles.containerParent, styles.containerLayout]}>
          <View style={[styles.container1, styles.containerLayout]} />
          <Image
            style={[styles.messageIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/message.png")}
          />
        </Pressable>
        <Text style={styles.km}>1 km</Text>
        <Image
          style={styles.localTwoIcon}
          resizeMode="cover"
          source={require("../assets/localtwo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIconPosition: {
    display: "none",
    position: "absolute",
  },
  btnBackPosition: {
    bottom: "86.33%",
    position: "absolute",
  },
  kefetPosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kefetFlexBox: {
    textAlign: "center",
    color: Color.gray_600,
    position: "absolute",
  },
  maskGroupLayout: {
    width: 295,
    position: "absolute",
  },
  containerLayout: {
    width: 61,
    height: 34,
    top: 0,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    top: 0,
    display: "none",
    width: 375,
    left: 0,
    overflow: "hidden",
  },
  homeChild: {
    top: 595,
    width: 339,
    height: 168,
    left: 0,
    position: "absolute",
  },
  container: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    position: "absolute",
    width: "100%",
    top: "0%",
    backgroundColor: Color.whiteFFFFFF,
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    top: "26.92%",
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
  },
  btnBack: {
    height: "6.4%",
    width: "13.87%",
    top: "7.27%",
    right: "77.33%",
    left: "8.8%",
  },
  stanbul: {
    top: "64.71%",
    left: "18.99%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
  },
  kefet: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    left: "0%",
    top: "0%",
  },
  stanbulParent: {
    height: "6.28%",
    width: "21.07%",
    top: "7.39%",
    right: "39.47%",
    left: "39.47%",
  },
  btnFilterIcon: {
    top: 59,
    left: 290,
    width: 52,
    height: 52,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 141,
    left: 72,
    width: 231,
    opacity: 0.3,
    height: 450,
  },
  photoIcon: {
    height: "107.11%",
    width: "147.12%",
    right: "-47.12%",
    bottom: "-7.11%",
    left: "0%",
    top: "0%",
  },
  maskGroupIcon1: {
    top: 370,
    height: 80,
    left: 0,
  },
  maskGroup: {
    top: 157,
    left: 40,
    height: 450,
  },
  paginationV1Icon: {
    top: 323,
    left: 315,
    width: 20,
    height: 76,
    position: "absolute",
  },
  container1: {
    borderRadius: Border.br_6xs,
    opacity: 0.15,
    left: 0,
    backgroundColor: Color.whiteFFFFFF,
    width: 61,
  },
  messageIcon: {
    height: "43.53%",
    width: "24.26%",
    top: "29.41%",
    right: "38.03%",
    bottom: "27.06%",
    left: "37.7%",
  },
  containerParent: {
    left: 202,
  },
  km: {
    top: 8,
    left: 26,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.whiteFFFFFF,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  localTwoIcon: {
    top: 10,
    left: 10,
    width: 14,
    height: 14,
    position: "absolute",
  },
  location: {
    top: 197,
    left: 56,
    width: 263,
    height: 34,
    position: "absolute",
  },
  home: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default Home;
