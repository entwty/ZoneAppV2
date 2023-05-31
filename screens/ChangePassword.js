import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import PasswordResetView from "../components/PasswordResetView";
import { Color } from "../GlobalStyles";

const ChangePassword = () => {
  return (
    <View style={[styles.changePassword, styles.changePasswordLayout]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.changePasswordLayout]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer7.png")}
      />
      <PasswordResetView
        passwordResetImageUrl={require("../assets/successmark.png")}
        returnToPasswordResetScre="Giriş Ekranına Dön"
        propBorderRadius={15}
        propLeft={88}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  changePasswordLayout: {
    overflow: "hidden",
    width: "100%",
  },
  statusBarIphoneXOrNewe: {
    alignSelf: "stretch",
    maxWidth: "100%",
    height: 44,
    display: "none",
  },
  changePassword: {
    backgroundColor: Color.whiteFFFFFF,
    flex: 1,
    height: 812,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChangePassword;
