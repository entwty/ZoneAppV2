import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import VerifyView from "../components/VerifyView";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OTP = () => {
  return (
    <View style={[styles.otp, styles.otpBg]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.rightIconLayout]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer8.png")}
      />
      <VerifyView />
      <View style={styles.otpDorulamaParent}>
        <Text style={[styles.otpDorulama, styles.otpDorulamaFlexBox]}>
          Otp Doğrulama
        </Text>
        <Pressable style={[styles.btnBack, styles.btnBackPosition]}>
          <View style={[styles.container, styles.btnBackPosition]} />
          <Image
            style={[styles.rightIcon, styles.rightIconLayout]}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </Pressable>
      </View>
      <Text
        style={[styles.ifreniHatrladnMContainer, styles.otpDorulamaFlexBox]}
      >
        <Text style={styles.ifreniHatrladnM}>Şifreni Hatırladın mı?</Text>
        <Text style={styles.giriYap}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.giriYap1}>Giriş Yap</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  otpBg: {
    backgroundColor: Color.whiteFFFFFF,
    width: "100%",
  },
  rightIconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  otpDorulamaFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  btnBackPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    alignSelf: "stretch",
    height: 44,
    display: "none",
    zIndex: 0,
    width: "100%",
  },
  otpDorulama: {
    top: "28.85%",
    left: "49.33%",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.gray_600,
    fontWeight: "600",
  },
  container: {
    right: "0%",
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
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
    maxHeight: "100%",
    position: "absolute",
  },
  btnBack: {
    width: "23.11%",
    right: "76.89%",
  },
  otpDorulamaParent: {
    height: "6.4%",
    width: "60%",
    top: "8.62%",
    right: "34.13%",
    bottom: "84.98%",
    left: "5.87%",
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
  giriYap: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  ifreniHatrladnMContainer: {
    bottom: 0,
    left: "19.47%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0.2,
    lineHeight: 21,
    zIndex: 3,
  },
  otp: {
    flex: 1,
    height: 812,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default OTP;
