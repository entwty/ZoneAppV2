import * as React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const VerifyView = () => {
  return (
    <View style={styles.otpDorulamaEPostaAdresiniParent}>
      <Text style={styles.otpDorulamaEPostaContainer}>
        <Text style={styles.otpDorulama}>{`OTP Doğrulama
`}</Text>
        <Text style={styles.ePostaAdresinizeAz}>
          E-posta adresinize az önce gönderdiğimiz doğrulama kodunu girin.
        </Text>
      </Text>
      <Pressable style={styles.dorulaWrapper}>
        <Text style={styles.dorula}>Doğrula</Text>
      </Pressable>
      <View style={styles.enterOtpInput}>
        <TextInput
          style={[styles.blank, styles.textinputPosition]}
          placeholder="Placeholder text"
          keyboardType="number-pad"
        />
        <TextInput
          style={[styles.textinput, styles.textinputPosition]}
          placeholder="0"
          keyboardType="number-pad"
          placeholderTextColor="#1e232c"
        />
        <TextInput
          style={[styles.textinput1, styles.textinputPosition]}
          placeholder="5"
          keyboardType="number-pad"
          placeholderTextColor="#1e232c"
        />
        <TextInput
          style={[styles.textinput2, styles.textinputPosition]}
          placeholder="1"
          keyboardType="number-pad"
          placeholderTextColor="#1e232c"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textinputPosition: {
    width: "20.95%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  otpDorulama: {
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black000000,
  },
  ePostaAdresinizeAz: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.gray_600,
  },
  otpDorulamaEPostaContainer: {
    width: "100%",
    letterSpacing: "-1%",
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  dorula: {
    top: 12,
    left: 131,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
    textAlign: "center",
    position: "absolute",
  },
  dorulaWrapper: {
    height: "16.55%",
    width: "98.49%",
    top: "83.45%",
    right: "0.3%",
    left: "1.2%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.mediumvioletred_100,
    overflow: "hidden",
    bottom: "0%",
    position: "absolute",
  },
  blank: {
    right: "0%",
    left: "79.05%",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
  },
  textinput: {
    right: "26.35%",
    left: "52.7%",
  },
  textinput1: {
    right: "79.05%",
    left: "0%",
  },
  textinput2: {
    right: "52.64%",
    left: "26.41%",
  },
  enterOtpInput: {
    height: "20.69%",
    width: "99.4%",
    top: "45.52%",
    right: "0.6%",
    bottom: "33.79%",
    left: "0%",
    position: "absolute",
  },
  otpDorulamaEPostaAdresiniParent: {
    width: 332,
    height: 290,
    zIndex: 1,
  },
});

export default VerifyView;
