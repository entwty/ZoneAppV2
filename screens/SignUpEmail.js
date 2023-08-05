import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import LoginForm from "../components/LoginForm";
import LoginView from "../components/LoginView";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const SignUpEmail = () => {
  return (
    <View style={[styles.signUpEmail, styles.signUpEmailLayout]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.signUpEmailLayout]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer9.png")}
      />
      <LoginForm />
      <Text style={styles.hesabnzYokMuContainer}>
        <Text style={styles.hesabnzYokMu}>Hesabınız yok mu?</Text>
        <Text style={styles.kaytOl}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.kaytOl1}>Kayıt Ol !</Text>
        </Text>
      </Text>
      <LoginView propZIndex={3} propMarginTop={15} />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpEmailLayout: {
    height: 812,
    width: "100%",
  },
  statusBarIphoneXOrNewe: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    display: "none",
    zIndex: 0,
  },
  hesabnzYokMu: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black000000,
  },
  text: {
    color: Color.gray_100,
  },
  kaytOl1: {
    color: Color.mediumvioletred_100,
  },
  kaytOl: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  hesabnzYokMuContainer: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.2,
    lineHeight: 21,
    textAlign: "center",
    zIndex: 2,
    marginTop: 15,
  },
  signUpEmail: {
    backgroundColor: Color.whiteFFFFFF,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUpEmail;
