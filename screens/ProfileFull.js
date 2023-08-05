import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  Text,
} from "react-native";
import InterestView from "../components/InterestView";
import GalleryView from "../components/GalleryView";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ProfileFull = () => {
  return (
    <View style={styles.profileFull}>
      <View style={[styles.profileFullChild, styles.container1Position]} />
      <ImageBackground
        style={styles.photoIcon}
        resizeMode="cover"
        source={require("../assets/photo.png")}
      />
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.container1Position]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer3.png")}
      />
      <Pressable style={styles.btnBackWrapper}>
        <View style={styles.btnBackPosition}>
          <View style={[styles.container, styles.containerBorder]} />
          <Image
            style={styles.rightIcon}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.container1, styles.container1Position]} />
      <View style={[styles.readMoreParent, styles.parentLayout]}>
        <Text style={styles.readMore}>Daha Fazlasını Oku</Text>
        <Text
          style={[styles.merhabaBenAlmila, styles.mimarTypo]}
        >{`Merhaba! Ben Almila. 25 yaşında bir iç mimarım. Burada eğlenmeyi ve yeni arkadaşlar bulmayı umuyorum. Benimle iletişime geçmeni sabırsızlıkla bekliyorum :) `}</Text>
        <Text style={[styles.hakknda, styles.hakkndaTypo]}>Hakkında</Text>
      </View>
      <InterestView />
      <View style={[styles.btnSendParent, styles.parentLayout]}>
        <Pressable style={[styles.btnSend, styles.btnSendLayout]}>
          <View style={[styles.container2, styles.btnSendLayout]} />
          <Image
            style={styles.sendIcon}
            resizeMode="cover"
            source={require("../assets/send.png")}
          />
        </Pressable>
        <View style={[styles.mimarParent, styles.mimarPosition]}>
          <Text style={[styles.mimar, styles.mimarPosition]}>İç Mimar</Text>
          <Text style={[styles.almilaAkgz, styles.mimarPosition]}>
            Almila Açıkgöz
          </Text>
        </View>
      </View>
      <View style={styles.groupParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/group-18161.png")}
        />
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/group-18159.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/group-18160.png")}
        />
      </View>
      <GalleryView />
    </View>
  );
};

const styles = StyleSheet.create({
  container1Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  containerBorder: {
    borderWidth: 1,
    borderColor: "#e8e6ea",
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.whiteFFFFFF,
  },
  parentLayout: {
    width: 336,
    position: "absolute",
  },
  mimarTypo: {
    color: Color.gray_500,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  hakkndaTypo: {
    color: Color.black000000,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    top: 0,
  },
  btnSendLayout: {
    height: 52,
    width: 52,
    position: "absolute",
  },
  mimarPosition: {
    width: 250,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 178,
    width: 168,
  },
  profileFullChild: {
    backgroundColor: Color.gainsboro_100,
    height: 415,
    top: 0,
  },
  photoIcon: {
    height: "30.27%",
    bottom: "69.73%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    display: "none",
    top: 0,
    overflow: "hidden",
  },
  container: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
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
  btnBackPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  btnBackWrapper: {
    height: "3.79%",
    width: "13.87%",
    top: "4.3%",
    right: "80.8%",
    bottom: "91.9%",
    left: "5.33%",
    position: "absolute",
  },
  container1: {
    top: 386,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 939,
    backgroundColor: Color.whiteFFFFFF,
    width: 375,
  },
  readMore: {
    top: 118,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.mediumvioletred_100,
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  merhabaBenAlmila: {
    top: 29,
    width: 336,
    position: "absolute",
    left: 0,
  },
  hakknda: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    left: 0,
    position: "absolute",
  },
  readMoreParent: {
    top: 572,
    height: 139,
    left: 20,
    width: 336,
  },
  container2: {
    borderWidth: 1,
    borderColor: "#e8e6ea",
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.whiteFFFFFF,
    left: 0,
    top: 0,
  },
  sendIcon: {
    top: 14,
    left: 14,
    width: 24,
    height: 24,
    position: "absolute",
  },
  btnSend: {
    top: 3,
    left: 284,
  },
  mimar: {
    top: 36,
    color: Color.gray_500,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  almilaAkgz: {
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.black000000,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    top: 0,
  },
  mimarParent: {
    height: 57,
    top: 0,
  },
  btnSendParent: {
    top: 475,
    height: 57,
    left: 20,
    width: 336,
  },
  frameItem: {
    width: 199,
    height: 199,
    marginLeft: 20,
  },
  frameInner: {
    marginLeft: 20,
  },
  groupParent: {
    top: 336,
    left: 40,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  profileFull: {
    flex: 1,
    height: 1371,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default ProfileFull;
