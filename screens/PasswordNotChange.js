import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import PasswordResetView from "../components/PasswordResetView";
import { Color } from "../GlobalStyles";

const PasswordNotChange = () => {
  return (
    <View style={[styles.passwordNotChange, styles.passwordNotChangeLayout]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.passwordNotChangeLayout]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer6.png")}
      />
      <PasswordResetView
        passwordResetImageUrl={require("../assets/successmark1.png")}
        returnToPasswordResetScre="Şifre Yenileme Ekranına Dön"
        propBorderRadius={10}
        propLeft={47}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordNotChangeLayout: {
    overflow: "hidden",
    width: "100%",
  },
  statusBarIphoneXOrNewe: {
    alignSelf: "stretch",
    maxWidth: "100%",
    height: 44,
    display: "none",
  },
  passwordNotChange: {
    backgroundColor: Color.whiteFFFFFF,
    flex: 1,
    height: 812,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PasswordNotChange;
