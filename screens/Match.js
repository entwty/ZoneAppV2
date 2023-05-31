import * as React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Text,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Match = () => {
  return (
    <View style={styles.match}>
      <View
        style={[
          styles.unsplashpzyrrwvokz0Parent,
          styles.unsplashpzyrrwvokz0Layout,
        ]}
      >
        <ImageBackground
          style={[
            styles.unsplashpzyrrwvokz0Icon,
            styles.statusBarIphoneXOrNewePosition,
          ]}
          resizeMode="cover"
          source={require("../assets/unsplashpzyrrwvokz0.png")}
        />
        <Image
          style={[styles.backdropIcon, styles.backdropIconLayout]}
          resizeMode="cover"
          source={require("../assets/backdrop1.png")}
        />
      </View>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.backdropIconLayout]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer3.png")}
      />
      <Pressable style={[styles.btnContinue, styles.btnShadowBox]}>
        <View style={[styles.container, styles.containerLayout]} />
        <Text style={[styles.merhabaDe, styles.merhabaDeFlexBox]}>
          Merhaba de !
        </Text>
      </Pressable>
      <Pressable style={[styles.btnContinue1, styles.btnShadowBox]}>
        <View style={[styles.container1, styles.containerLayout]} />
        <Text style={[styles.merhabaDe, styles.merhabaDeFlexBox]}>
          Kaydırmaya devam et
        </Text>
      </Pressable>
      <View style={styles.title}>
        <Text
          style={[styles.imdiBirbirinizleKonumaya, styles.merhabaDeFlexBox]}
        >
          Şimdi birbirinizle konuşmaya başlayın
        </Text>
        <Text style={[styles.baarlBirEleme, styles.merhabaDeFlexBox]}>
          Başarılı bir eşleşme, Emel!
        </Text>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <Image
            style={[styles.groupChild, styles.containerLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-4247.png")}
          />
          <Image
            style={styles.unsplashd1upkifd04aIcon}
            resizeMode="cover"
            source={require("../assets/unsplashd1upkifd04a2.png")}
          />
          <Image
            style={[styles.likeIcon, styles.likeIconLayout]}
            resizeMode="cover"
            source={require("../assets/like1.png")}
          />
        </View>
        <ImageBackground
          style={[styles.unsplashmj2zdOfxswIcon, styles.containerLayout]}
          resizeMode="cover"
          source={require("../assets/unsplashmj2zdofxsw.png")}
        />
        <Image
          style={[styles.likeIcon1, styles.likeIconLayout]}
          resizeMode="cover"
          source={require("../assets/like2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  unsplashpzyrrwvokz0Layout: {
    height: 1471,
    width: 980,
    position: "absolute",
  },
  statusBarIphoneXOrNewePosition: {
    left: 0,
    top: 0,
  },
  backdropIconLayout: {
    width: 375,
    position: "absolute",
  },
  btnShadowBox: {
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: "6.9%",
    left: "10.67%",
    right: "10.67%",
    width: "78.67%",
    position: "absolute",
  },
  containerLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  merhabaDeFlexBox: {
    textAlign: "center",
    color: Color.whiteFFFFFF,
    position: "absolute",
  },
  likeIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  unsplashpzyrrwvokz0Icon: {
    height: 1471,
    width: 980,
    position: "absolute",
  },
  backdropIcon: {
    top: 2,
    left: 239,
    opacity: 0.5,
    height: 812,
  },
  unsplashpzyrrwvokz0Parent: {
    top: -2,
    left: -239,
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    display: "none",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  container: {
    backgroundColor: Color.mediumvioletred_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    borderRadius: Border.br_mini,
    top: "0%",
    width: "100%",
  },
  merhabaDe: {
    width: "78.31%",
    top: "28.57%",
    left: "10.85%",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.whiteFFFFFF,
  },
  btnContinue: {
    top: "77.48%",
    bottom: "15.62%",
  },
  container1: {
    opacity: 0.1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    borderRadius: Border.br_mini,
    top: "0%",
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  btnContinue1: {
    top: "86.84%",
    bottom: "6.26%",
  },
  imdiBirbirinizleKonumaya: {
    top: "83.72%",
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    left: "0%",
    width: "100%",
  },
  baarlBirEleme: {
    fontSize: FontSize.size_15xl,
    lineHeight: 44,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.whiteFFFFFF,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  title: {
    height: "15.89%",
    top: "56.67%",
    bottom: "27.45%",
    left: "10.67%",
    right: "10.67%",
    width: "78.67%",
    position: "absolute",
  },
  groupChild: {
    top: 3,
    left: 2,
    width: 195,
    height: 259,
  },
  unsplashd1upkifd04aIcon: {
    top: 31,
    left: 10,
    width: 175,
    height: 232,
    position: "absolute",
  },
  likeIcon: {
    height: "60.35%",
    width: "80.31%",
    top: "-9.52%",
    right: "37.38%",
    bottom: "49.17%",
    left: "-17.69%",
  },
  rectangleParent: {
    left: 121,
    width: 199,
    height: 265,
    top: 0,
    position: "absolute",
  },
  unsplashmj2zdOfxswIcon: {
    height: "65.3%",
    width: "49.96%",
    top: "32.87%",
    right: "50.04%",
    bottom: "1.83%",
    transform: [
      {
        rotate: "-10deg",
      },
    ],
    left: "0%",
  },
  likeIcon1: {
    height: "43.54%",
    width: "49.89%",
    top: "74.22%",
    right: "60.42%",
    bottom: "-17.76%",
    left: "-10.3%",
  },
  groupParent: {
    top: 63,
    left: 33,
    width: 320,
    height: 368,
    position: "absolute",
  },
  match: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default Match;
