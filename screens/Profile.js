import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.btnContinue}>
        <View style={[styles.container, styles.containerPosition]} />
        <Text style={styles.dahaFazlaBilgi}>Daha Fazla Bilgi Edin</Text>
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
      <Text style={[styles.zoneDeneyiminiEn, styles.zoneClr]}>
        Zone deneyimini en üst seviyeye çıkar
      </Text>
      <View style={styles.zoneIkonGradient11Parent}>
        <Image
          style={[styles.zoneIkonGradient11, styles.zonePosition]}
          resizeMode="cover"
          source={require("../assets/zone-ikon-gradient-1-1.png")}
        />
        <Text style={[styles.zonePlatinum, styles.zonePosition]}>
          Zone Platinum
        </Text>
      </View>
      <View style={styles.maskGroup}>
        <View style={[styles.maskGroupChild, styles.containerPosition]} />
      </View>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.zonePosition]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <View style={styles.unsplashd1upkifd04aWrapper}>
        <Image
          style={[styles.unsplashd1upkifd04aIcon, styles.zonePosition]}
          resizeMode="cover"
          source={require("../assets/unsplashd1upkifd04a.png")}
        />
      </View>
      <Text style={[styles.alex, styles.alexFlexBox]}>Berke Eren</Text>
      <Text style={[styles.profesyonelFotoraf, styles.alexFlexBox]}>
        Profesyonel Fotoğrafçı
      </Text>
      <View style={[styles.ayarlarParent, styles.parentLayout]}>
        <Text style={[styles.ayarlar, styles.gvenlkTypo]}>AYARLAR</Text>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-176811.png")}
        />
      </View>
      <View style={styles.proflDzenleParent}>
        <Text style={[styles.proflDzenle, styles.gvenlkTypo]}>
          PROFİLİ DÜZENLE
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-176813.png")}
        />
      </View>
      <View style={[styles.gvenlkParent, styles.parentLayout]}>
        <Text style={[styles.gvenlk, styles.gvenlkTypo]}>GÜVENLİK</Text>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-176812.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPosition1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  containerPosition: {
    backgroundColor: Color.whiteFFFFFF,
    top: "0%",
    position: "absolute",
  },
  frameSpaceBlock: {
    marginLeft: 11,
    opacity: 0.5,
    height: 7,
  },
  zoneClr: {
    color: Color.black000000,
    textAlign: "center",
  },
  zonePosition: {
    top: 0,
    position: "absolute",
  },
  alexFlexBox: {
    textAlign: "left",
    color: Color.black000000,
    position: "absolute",
  },
  parentLayout: {
    height: 75,
    width: 50,
    top: 306,
    position: "absolute",
  },
  gvenlkTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black000000,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupPosition: {
    top: -24,
    position: "absolute",
  },
  container: {
    height: "100%",
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  dahaFazlaBilgi: {
    width: "78.31%",
    top: "28.57%",
    left: "10.85%",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: "#c80787",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  btnContinue: {
    height: "6.9%",
    width: "78.67%",
    top: "75.99%",
    right: "10.67%",
    bottom: "17.12%",
    left: "10.67%",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 0,
      height: 24,
    },
    position: "absolute",
  },
  frameChild: {
    height: 7,
    width: 7,
  },
  frameItem: {
    width: 7,
    marginLeft: 11,
    opacity: 0.5,
  },
  frameInner: {
    width: 6,
  },
  ellipseParent: {
    top: 590,
    left: 149,
    flexDirection: "row",
    position: "absolute",
  },
  zoneDeneyiminiEn: {
    top: 552,
    left: 73,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  zoneIkonGradient11: {
    width: 26,
    left: 0,
    height: 31,
  },
  zonePlatinum: {
    left: 36,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    color: Color.black000000,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  zoneIkonGradient11Parent: {
    top: 506,
    left: 96,
    width: 183,
    height: 31,
    position: "absolute",
  },
  maskGroupChild: {
    height: "110.54%",
    width: "32.27%",
    right: "33.9%",
    bottom: "-10.54%",
    left: "33.82%",
  },
  maskGroup: {
    height: "57.27%",
    width: "309.84%",
    right: "-105.04%",
    bottom: "42.73%",
    left: "-104.8%",
    shadowColor: "rgba(255, 255, 255, 0.1)",
    top: "0%",
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 0,
      height: 24,
    },
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    width: 375,
    height: 44,
    display: "none",
    left: 0,
    overflow: "hidden",
  },
  unsplashd1upkifd04aIcon: {
    left: 11,
    width: 119,
    height: 177,
  },
  unsplashd1upkifd04aWrapper: {
    height: "17.24%",
    width: "37.33%",
    top: "9.11%",
    right: "31.73%",
    bottom: "73.65%",
    left: "30.93%",
    borderRadius: Border.br_113xl,
    backgroundColor: Color.borderE8E6EA,
    position: "absolute",
    overflow: "hidden",
  },
  alex: {
    marginTop: -177,
    top: "50%",
    left: 122,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  profesyonelFotoraf: {
    top: 265,
    left: 107,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  ayarlar: {
    left: 3,
    top: 60,
    fontSize: FontSize.size_3xs,
  },
  groupChild: {
    left: -48,
    width: 146,
    height: 146,
  },
  ayarlarParent: {
    left: 58,
  },
  proflDzenle: {
    top: 70,
    left: 0,
  },
  groupItem: {
    left: -38,
    width: 156,
    height: 156,
  },
  proflDzenleParent: {
    top: 331,
    left: 148,
    width: 80,
    height: 85,
    position: "absolute",
  },
  gvenlk: {
    left: 1,
    top: 60,
    fontSize: FontSize.size_3xs,
  },
  gvenlkParent: {
    left: 268,
  },
  profile: {
    backgroundColor: "#f5f6fa",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
