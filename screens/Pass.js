import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import ImageContainer from "../components/ImageContainer";
import ContentContainer from "../components/ContentContainer";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Pass = () => {
  return (
    <View style={[styles.pass, styles.passLayout]}>
      <Image
        style={[styles.navigationBarIcon, styles.barLayout]}
        resizeMode="cover"
        source={require("../assets/property-1default2.png")}
      />
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.container1Position]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer1.png")}
      />
      <Image
        style={[styles.passChild, styles.barLayout]}
        resizeMode="cover"
        source={require("../assets/frame-347301.png")}
      />
      <View style={[styles.btnBack, styles.btnBackPosition]}>
        <View style={[styles.container, styles.kefetPosition]} />
        <Image
          style={styles.rightIcon}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
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
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group141.png")}
      />
      <ImageContainer
        carImageUrl={require("../assets/mask-group13.png")}
        propRight="-47.12%"
        propLeft="0%"
        propTop={0}
      />
      <Image
        style={styles.paginationV1Icon}
        resizeMode="cover"
        source={require("../assets/pagination-v1.png")}
      />
      <View style={[styles.location, styles.locationLayout]}>
        <View style={[styles.container1, styles.locationLayout]} />
        <Text style={styles.km}>1 km</Text>
        <Image
          style={styles.localTwoIcon}
          resizeMode="cover"
          source={require("../assets/localtwo.png")}
        />
      </View>
      <View style={styles.contentParent}>
        <ContentContainer />
        <Image
          style={styles.likeIcon}
          resizeMode="cover"
          source={require("../assets/like3.png")}
        />
        <Image
          style={styles.dislikeIcon}
          resizeMode="cover"
          source={require("../assets/dislike.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passLayout: {
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  barLayout: {
    width: 375,
    position: "absolute",
  },
  container1Position: {
    top: 0,
    left: 0,
  },
  btnBackPosition: {
    bottom: "86.33%",
    position: "absolute",
  },
  kefetPosition: {
    left: "0%",
    top: "0%",
  },
  kefetFlexBox: {
    textAlign: "center",
    color: Color.gray_600,
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
    width: 375,
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  passChild: {
    top: 595,
    height: 168,
    left: 0,
    width: 375,
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
    backgroundColor: Color.whiteFFFFFF,
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    top: "26.92%",
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
    height: 450,
    opacity: 0.3,
    position: "absolute",
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
    top: 0,
    left: 0,
    backgroundColor: Color.whiteFFFFFF,
    height: 34,
    width: 61,
  },
  km: {
    top: 8,
    left: 26,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
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
  },
  likeIcon: {
    top: 186,
    left: 111,
    width: 180,
    height: 180,
    position: "absolute",
  },
  dislikeIcon: {
    top: 187,
    left: 112,
    width: 178,
    height: 178,
    position: "absolute",
  },
  contentParent: {
    top: 118,
    left: -109,
    width: 401,
    height: 511,
    position: "absolute",
  },
  pass: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Pass;
