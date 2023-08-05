import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ForgetYourPassword = () => {
  return (
    <View style={[styles.forgetYourPassword, styles.containerBg]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.rightIconLayout]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer6.png")}
      />
      <View style={styles.ifreniMiUnuttunLtfenHesParent}>
        <Text style={styles.ifreniMiUnuttunContainer}>
          <Text
            style={[styles.ifreniMiUnuttun, styles.giriYapTypo]}
          >{`Şifreni mi Unuttun ?
`}</Text>
          <Text style={styles.ltfenHesabnzlaBalantl}>
            Lütfen hesabınızla bağlantılı e-posta adresini girin
          </Text>
        </Text>
        <TextInput
          style={styles.registerButton}
          placeholder="E-mail adresinizi giriniz"
          keyboardType="default"
          placeholderTextColor="#bababa"
        />
        <Pressable style={styles.kodGnderWrapper}>
          <Text style={[styles.kodGnder, styles.kodGnderTypo]}>Kod Gönder</Text>
        </Pressable>
      </View>
      <View style={styles.ifreniMiUnuttunParent}>
        <Text style={[styles.ifreniMiUnuttun1, styles.rightIconPosition]}>
          Şifreni mi Unuttun
        </Text>
        <Pressable style={[styles.btnBack, styles.btnBackPosition]}>
          <View style={[styles.container, styles.btnBackPosition]} />
          <Image
            style={[styles.rightIcon, styles.rightIconPosition]}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.ifreniHatrladnMContainer}>
        <Text style={styles.ifreniHatrladnM}>Şifreni Hatırladın mı?</Text>
        <Text style={styles.giriYapTypo}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.giriYap1}>Giriş Yap</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBg: {
    backgroundColor: Color.whiteFFFFFF,
    width: "100%",
  },
  rightIconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  giriYapTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  kodGnderTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  rightIconPosition: {
    top: "26.92%",
    position: "absolute",
  },
  btnBackPosition: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    alignSelf: "stretch",
    height: 44,
    display: "none",
    zIndex: 0,
    width: "100%",
  },
  ifreniMiUnuttun: {
    fontSize: FontSize.size_7xl,
    color: Color.black000000,
  },
  ltfenHesabnzlaBalantl: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.gray_600,
  },
  ifreniMiUnuttunContainer: {
    width: "99.7%",
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  registerButton: {
    height: "21.05%",
    width: "99.1%",
    top: "42.11%",
    bottom: "36.84%",
    left: "0.9%",
    right: "0%",
    position: "absolute",
  },
  kodGnder: {
    top: 12,
    left: 115,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
    textAlign: "center",
    position: "absolute",
  },
  kodGnderWrapper: {
    height: "18.05%",
    width: "98.2%",
    top: "81.95%",
    right: "0.6%",
    left: "1.2%",
    backgroundColor: Color.mediumvioletred_100,
    borderRadius: Border.br_mini,
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  ifreniMiUnuttunLtfenHesParent: {
    width: 333,
    height: 266,
    zIndex: 1,
  },
  ifreniMiUnuttun1: {
    left: "41.95%",
    letterSpacing: 0,
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.gray_600,
    fontWeight: "600",
    top: "26.92%",
  },
  container: {
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    borderRadius: Border.br_mini,
    right: "0%",
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  btnBack: {
    width: "22.03%",
    right: "77.97%",
  },
  ifreniMiUnuttunParent: {
    height: "6.4%",
    width: "63.44%",
    top: "8%",
    right: "31.18%",
    bottom: "85.59%",
    left: "5.38%",
    zIndex: 2,
    position: "absolute",
  },
  ifreniHatrladnM: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black000000,
  },
  text: {
    color: Color.gray_100,
  },
  giriYap1: {
    color: Color.mediumvioletred_100,
  },
  ifreniHatrladnMContainer: {
    bottom: 0,
    left: "19.22%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0.2,
    lineHeight: 21,
    zIndex: 3,
    textAlign: "center",
    position: "absolute",
  },
  forgetYourPassword: {
    flex: 1,
    height: 812,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default ForgetYourPassword;
