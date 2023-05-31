import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import UserInfoContainer from "../components/UserInfoContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Like1 = () => {
  return (
    <View style={styles.like}>
      <Image
        style={[styles.navigationBarIcon, styles.barLayout]}
        resizeMode="cover"
        source={require("../assets/property-1default3.png")}
      />
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.maskGroupPosition]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer1.png")}
      />
      <Image
        style={[styles.likeChild, styles.barLayout]}
        resizeMode="cover"
        source={require("../assets/frame-347301.png")}
      />
      <View style={[styles.btnBack, styles.btnBackPosition]}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={[styles.rightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.stanbulParent, styles.btnBackPosition]}>
        <Text style={[styles.stanbul, styles.kefetFlexBox]}>İstanbul</Text>
        <Text style={[styles.kefet, styles.kefetTypo]}>Keşfet</Text>
      </View>
      <Image
        style={styles.btnFilterIcon}
        resizeMode="cover"
        source={require("../assets/btn-filter.png")}
      />
      <View style={styles.photoBg}>
        <Image
          style={[styles.photoIcon, styles.iconLayout]}
          resizeMode="cover"
        />
      </View>
      <View style={[styles.maskGroup, styles.maskGroupLayout]}>
        <Image
          style={[styles.maskGroupChild, styles.maskGroupPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-4252.png")}
        />
        <View style={[styles.maskGroup1, styles.maskGroupLayout]}>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupLayout]}
            resizeMode="cover"
            source={require("../assets/mask-group17.png")}
          />
          <Text style={[styles.braTufan21, styles.mimarPosition]}>
            Büşra Tufan, 21
          </Text>
          <Text style={[styles.mimar, styles.mimarPosition]}>Mimar</Text>
        </View>
      </View>
      <View style={[styles.location, styles.locationLayout]}>
        <View style={[styles.container1, styles.locationLayout]} />
        <Text style={styles.km}>1 km</Text>
        <Image
          style={styles.localTwoIcon}
          resizeMode="cover"
          source={require("../assets/localtwo.png")}
        />
      </View>
      <UserInfoContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  barLayout: {
    width: 375,
    position: "absolute",
  },
  maskGroupPosition: {
    top: 0,
    left: 0,
  },
  btnBackPosition: {
    bottom: "86.33%",
    position: "absolute",
  },
  containerPosition: {
    borderRadius: Border.br_mini,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
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
  kefetTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  maskGroupLayout: {
    width: 295,
    position: "absolute",
  },
  mimarPosition: {
    width: 263,
    left: 16,
    textAlign: "left",
    color: Color.whiteFFFFFF,
    position: "absolute",
  },
  locationLayout: {
    height: 34,
    width: 61,
    position: "absolute",
  },
  navigationBarIcon: {
    top: 707,
    height: 105,
    left: 0,
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  likeChild: {
    top: 595,
    height: 168,
    left: 0,
  },
  container: {
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    position: "absolute",
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
    color: Color.gray_600,
  },
  kefet: {
    textAlign: "center",
    color: Color.gray_600,
    position: "absolute",
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
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
  photoIcon: {
    borderRadius: Border.br_mini,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  photoBg: {
    top: 141,
    left: 72,
    width: 231,
    opacity: 0.3,
    height: 450,
    position: "absolute",
  },
  maskGroupChild: {
    width: 313,
    height: 479,
    position: "absolute",
  },
  maskGroupIcon: {
    height: 450,
    top: 0,
    left: 0,
  },
  braTufan21: {
    top: 11,
    lineHeight: 36,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  mimar: {
    top: 47,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
  },
  maskGroup1: {
    top: 370,
    height: 80,
    left: 0,
  },
  maskGroup: {
    top: 157,
    left: 40,
    height: 450,
  },
  container1: {
    borderRadius: Border.br_6xs,
    opacity: 0.15,
    top: 0,
    left: 0,
    backgroundColor: Color.whiteFFFFFF,
  },
  km: {
    top: 8,
    left: 26,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    textAlign: "left",
    color: Color.whiteFFFFFF,
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
  },
  like: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default Like1;
