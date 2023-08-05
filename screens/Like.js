import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Likeinfo from "../components/Likeinfo";
import TimeText from "../components/TimeText";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Like = () => {
  return (
    <View style={styles.like}>
      <Image
        style={styles.statusBarIphoneXOrNewe}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <View style={[styles.likeChild, styles.likeChildLayout]} />
      <View style={[styles.likeItem, styles.likeChildLayout]} />
      <View style={[styles.likeInner, styles.likeChildLayout]} />
      <View style={[styles.rectangleView, styles.likeChildLayout]} />
      <View style={[styles.likeChild1, styles.likeChildLayout]} />
      <View style={styles.beenilerParent}>
        <Text style={styles.beeniler}>Beğeniler</Text>
        <View style={[styles.btnBack, styles.btnBackPosition]}>
          <View style={[styles.container, styles.btnBackPosition]} />
          <Image
            style={styles.rightIcon}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.greenStatusIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/green-status.png")}
      />
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupLayout]}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
      <Likeinfo />
      <View style={[styles.nameParent, styles.nameGroupPosition]}>
        <Text style={styles.name}>Büşra profilinizi beğendi!</Text>
        <Text style={styles.time}>1 saat önce</Text>
      </View>
      <View style={[styles.nameGroup, styles.nameGroupPosition]}>
        <Text style={styles.name}>Sena profilinizi beğendi!</Text>
        <Text style={styles.time}>Salı</Text>
      </View>
      <View style={[styles.nameContainer, styles.nameGroupPosition]}>
        <Text style={styles.name}>Ebru profilinizi beğendi!</Text>
        <Text style={styles.time}>Salı</Text>
      </View>
      <View style={[styles.groupView, styles.nameGroupPosition]}>
        <Text style={styles.name}>Berna profilinizi beğendi!</Text>
        <Text style={styles.time}>Salı</Text>
      </View>
      <Image
        style={[styles.likeIcon, styles.likeIconLayout]}
        resizeMode="cover"
        source={require("../assets/like.png")}
      />
      <Image
        style={[styles.likeIcon1, styles.likeIconLayout]}
        resizeMode="cover"
        source={require("../assets/like.png")}
      />
      <Image
        style={[styles.likeIcon2, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/like.png")}
      />
      <Image
        style={[styles.likeIcon3, styles.likeIconLayout]}
        resizeMode="cover"
        source={require("../assets/like.png")}
      />
      <Image
        style={[styles.likeIcon4, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/like.png")}
      />
      <TimeText />
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildBg]} />
        <Text style={[styles.dn, styles.dnTypo]}>Dün</Text>
      </View>
      <View style={[styles.pazartesiWrapper, styles.frameChildBg]}>
        <Text style={styles.dnTypo}>Pazartesi</Text>
      </View>
      <Image
        style={[styles.maskGroupIcon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/mask-group1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.dnPosition]}
        resizeMode="cover"
        source={require("../assets/group-18237.png")}
      />
      <Image
        style={[styles.maskGroupIcon2, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/mask-group2.png")}
      />
      <Image
        style={[styles.greenStatusIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/green-status.png")}
      />
      <Image
        style={styles.maskGroupIcon3}
        resizeMode="cover"
        source={require("../assets/mask-group3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  likeChildLayout: {
    height: 1,
    width: 252,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_32xl,
    left: 103,
    position: "absolute",
  },
  btnBackPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: 66,
    width: 66,
  },
  maskGroupLayout: {
    height: 58,
    width: 58,
    left: 24,
  },
  nameGroupPosition: {
    left: 102,
    height: 44,
    position: "absolute",
  },
  likeIconLayout: {
    height: 20,
    width: 20,
    left: 336,
  },
  iconPosition1: {
    top: 423,
    position: "absolute",
  },
  iconPosition: {
    top: 591,
    position: "absolute",
  },
  frameChildLayout: {
    height: 30,
    width: 60,
  },
  frameChildBg: {
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  dnTypo: {
    color: Color.darkgray,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0,
  },
  dnPosition: {
    left: 16,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    display: "none",
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  likeChild: {
    top: 256,
  },
  likeItem: {
    top: 342,
  },
  likeInner: {
    top: 484,
  },
  rectangleView: {
    top: 570,
  },
  likeChild1: {
    top: 652,
  },
  beeniler: {
    left: "65.35%",
    fontSize: FontSize.size_base,
    color: Color.gray_600,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0,
    top: "26.92%",
    position: "absolute",
  },
  container: {
    right: "0%",
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "26.92%",
    position: "absolute",
    overflow: "hidden",
  },
  btnBack: {
    width: "25.74%",
    right: "74.26%",
  },
  beenilerParent: {
    height: "6.4%",
    width: "53.87%",
    top: "7.27%",
    right: "40.8%",
    bottom: "86.33%",
    left: "5.33%",
    position: "absolute",
  },
  greenStatusIcon: {
    top: 191,
    left: 20,
    width: 66,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 195,
    position: "absolute",
  },
  name: {
    lineHeight: 21,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black000000,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  time: {
    top: 26,
    left: 1,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.silver,
    textAlign: "right",
    position: "absolute",
  },
  nameParent: {
    width: 176,
    top: 288,
  },
  nameGroup: {
    top: 430,
    width: 171,
  },
  nameContainer: {
    top: 516,
    width: 167,
  },
  groupView: {
    top: 598,
    width: 177,
  },
  likeIcon: {
    top: 202,
    position: "absolute",
  },
  likeIcon1: {
    top: 288,
    position: "absolute",
  },
  likeIcon2: {
    height: 20,
    width: 20,
    left: 336,
  },
  likeIcon3: {
    top: 505,
    position: "absolute",
  },
  likeIcon4: {
    height: 20,
    width: 20,
    left: 336,
  },
  frameChild: {
    height: 30,
    width: 60,
    left: 0,
    top: 0,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_3xs,
  },
  dn: {
    top: 3,
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    top: 373,
    left: 157,
    position: "absolute",
  },
  pazartesiWrapper: {
    top: 683,
    left: 142,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 3,
  },
  maskGroupIcon1: {
    height: 58,
    width: 58,
    left: 24,
  },
  groupIcon: {
    top: 505,
    height: 66,
    width: 66,
  },
  maskGroupIcon2: {
    height: 58,
    width: 58,
    left: 24,
  },
  greenStatusIcon1: {
    top: 277,
    left: 20,
    width: 66,
    position: "absolute",
  },
  maskGroupIcon3: {
    top: 282,
    left: 25,
    width: 57,
    height: 57,
    position: "absolute",
  },
  like: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default Like;
