import * as React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LoginForm = () => {
  return (
    <View style={styles.hogeldinizSeniTekrarGrdParent}>
      <Text style={styles.hogeldinizSeniContainer}>
        <Text style={styles.hogeldiniz}>{`Hoşgeldiniz !
`}</Text>
        <Text style={styles.seniTekrarGrdmze}>
          Seni tekrar gördüğümüze sevindik
        </Text>
      </Text>
      <TextInput
        style={[styles.registerButton, styles.registerPosition]}
        placeholder="E-mail adresinizi giriniz"
        keyboardType="email-address"
        placeholderTextColor="#bababa"
      />
      <TextInput
        style={[styles.registerButton1, styles.registerPosition]}
        placeholder="Şifrenizi giriniz"
        keyboardType="default"
        placeholderTextColor="#bababa"
      />
      <Pressable style={styles.giriYapWrapper}>
        <Text style={styles.giriYap}>Giriş Yap</Text>
      </Pressable>
      <Text style={styles.ifreniMiUnuttun}>Şifreni mi Unuttun ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  registerPosition: {
    left: "0.9%",
    right: "0%",
    width: "99.1%",
    height: "17.55%",
    position: "absolute",
  },
  hogeldiniz: {
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black000000,
  },
  seniTekrarGrdmze: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.gray_600,
  },
  hogeldinizSeniContainer: {
    width: "99.7%",
    top: "0%",
    left: "0%",
    letterSpacing: "-1%",
    textAlign: "left",
    position: "absolute",
  },
  registerButton: {
    top: "29.47%",
    bottom: "52.98%",
  },
  registerButton1: {
    top: "51.72%",
    bottom: "30.72%",
  },
  giriYap: {
    top: 12,
    left: 126,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
    textAlign: "center",
    position: "absolute",
  },
  giriYapWrapper: {
    height: "15.05%",
    width: "98.2%",
    top: "84.95%",
    right: "0.6%",
    bottom: "0%",
    left: "1.2%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.mediumvioletred_100,
    overflow: "hidden",
    position: "absolute",
  },
  ifreniMiUnuttun: {
    top: "73.35%",
    left: "64.86%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.silver,
    textAlign: "right",
    position: "absolute",
  },
  hogeldinizSeniTekrarGrdParent: {
    width: 333,
    height: 319,
    zIndex: 1,
    marginTop: 15,
  },
});

export default LoginForm;
