import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MessageContainer from "../components/MessageContainer";
import ContainerCard from "../components/ContainerCard";
import SenaAvciContainer from "../components/SenaAvciContainer";
import EbruAslanContainer from "../components/EbruAslanContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Messages = () => {
  return (
    <View style={[styles.messages, styles.messagesLayout]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.barPosition]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <Text style={styles.mesajlar}>Mesajlar</Text>
      <View style={[styles.containerParent, styles.frameParentPosition]}>
        <View style={[styles.container, styles.messagesLayout]} />
        <Text style={[styles.arama, styles.timeClr]}>Arama</Text>
        <Image
          style={[styles.searchIcon, styles.frameParentPosition]}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <Text style={[styles.sonAktiviteler, styles.nameTypo]}>
        Son Aktiviteler
      </Text>
      <Text style={[styles.mesajlar1, styles.nameTypo]}>Mesajlar</Text>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.parentLayout}>
          <Text style={[styles.sen, styles.senTypo]}>Sen</Text>
          <Image
            style={styles.greenStatusIcon}
            resizeMode="cover"
            source={require("../assets/green-status.png")}
          />
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group4.png")}
          />
        </View>
        <View style={[styles.keremParent, styles.parentLayout]}>
          <Text style={[styles.kerem, styles.senTypo]}>Kerem</Text>
          <Image
            style={styles.greenStatusIcon}
            resizeMode="cover"
            source={require("../assets/green-status.png")}
          />
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group5.png")}
          />
        </View>
        <View style={[styles.keremParent, styles.parentLayout]}>
          <Text style={[styles.kerem, styles.senTypo]}>Canan</Text>
          <Image
            style={styles.greenStatusIcon}
            resizeMode="cover"
            source={require("../assets/green-status.png")}
          />
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group6.png")}
          />
        </View>
        <View style={[styles.keremParent, styles.parentLayout]}>
          <Text style={[styles.ekin, styles.senTypo]}>Ekin</Text>
          <Image
            style={styles.greenStatusIcon}
            resizeMode="cover"
            source={require("../assets/green-status.png")}
          />
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group7.png")}
          />
        </View>
        <View style={[styles.keremParent, styles.parentLayout]}>
          <Text style={[styles.serkan, styles.senTypo]}>Serkan</Text>
          <Image
            style={styles.greenStatusIcon}
            resizeMode="cover"
            source={require("../assets/green-status.png")}
          />
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group8.png")}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameParentPosition]}>
        <MessageContainer />
        <ContainerCard />
        <SenaAvciContainer />
        <EbruAslanContainer />
        <View style={styles.timeParent}>
          <Text style={[styles.time, styles.timeClr]}>2 gün önce görüldü</Text>
          <Text style={[styles.message, styles.namePosition]}>
            Ne zaman müsaitsin ?
          </Text>
          <Text style={[styles.name, styles.namePosition]}>Berna Karagül</Text>
          <Image
            style={[styles.maskGroupIcon5, styles.maskGroupPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group13.png")}
          />
        </View>
      </View>
      <Image
        style={styles.bicameraFillIcon}
        resizeMode="cover"
        source={require("../assets/bicamerafill.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messagesLayout: {
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  frameParentPosition: {
    left: 20,
    position: "absolute",
  },
  timeClr: {
    color: Color.silver,
    lineHeight: 18,
    position: "absolute",
  },
  nameTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  senTypo: {
    letterSpacing: -0.1,
    top: "79.78%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black000000,
    position: "absolute",
  },
  maskGroupPosition: {
    left: 4,
    top: 4,
    position: "absolute",
  },
  parentLayout: {
    height: 89,
    width: 66,
  },
  namePosition: {
    lineHeight: 21,
    left: 72,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black000000,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    display: "none",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  mesajlar: {
    top: 74,
    fontSize: FontSize.size_15xl,
    lineHeight: 51,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.black000000,
    left: 20,
    position: "absolute",
  },
  container: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    position: "absolute",
  },
  arama: {
    top: "31.25%",
    left: "16.07%",
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    textAlign: "left",
  },
  searchIcon: {
    top: 14,
    width: 20,
    height: 20,
  },
  containerParent: {
    top: 136,
    height: 48,
    width: 336,
  },
  sonAktiviteler: {
    top: "24.51%",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_lg,
    left: "5.33%",
    fontWeight: "600",
    textAlign: "left",
    color: Color.black000000,
    position: "absolute",
  },
  mesajlar1: {
    top: "41.38%",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_lg,
    left: "5.33%",
    fontWeight: "600",
    textAlign: "left",
    color: Color.black000000,
    position: "absolute",
  },
  sen: {
    left: "31.82%",
  },
  greenStatusIcon: {
    height: 66,
    width: 66,
    left: 0,
    top: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    width: 58,
    height: 58,
  },
  kerem: {
    left: "13.64%",
  },
  keremParent: {
    marginLeft: 15,
  },
  ekin: {
    left: "27.27%",
  },
  serkan: {
    left: "12.12%",
  },
  frameParent: {
    top: 232,
    flexDirection: "row",
  },
  time: {
    top: 11,
    left: 219,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
  },
  message: {
    top: 31,
    width: 189,
    fontFamily: FontFamily.poppinsRegular,
  },
  name: {
    top: 9,
    width: 159,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  maskGroupIcon5: {
    width: 48,
    height: 48,
  },
  timeParent: {
    height: 62,
    marginTop: 10,
    width: 336,
  },
  frameGroup: {
    top: 370,
  },
  bicameraFillIcon: {
    top: 83,
    left: 322,
    width: 34,
    height: 34,
    opacity: 0.1,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.2%",
    width: "5.33%",
    top: "10.71%",
    right: "19.47%",
    bottom: "86.08%",
    left: "75.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  messages: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Messages;
