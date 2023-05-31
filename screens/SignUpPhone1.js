import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import ViewTextInputs from "../components/ViewTextInputs";
import LoginView from "../components/LoginView";
import { Color } from "../GlobalStyles";

const SignUpPhone1 = () => {
  return (
    <View style={styles.signUpPhone}>
      <Image
        style={styles.statusBarIphoneXOrNewe}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer11.png")}
      />
      <ViewTextInputs />
      <LoginView propZIndex={2} propMarginTop={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarIphoneXOrNewe: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    height: 44,
    display: "none",
    zIndex: 0,
    width: "100%",
  },
  signUpPhone: {
    backgroundColor: Color.whiteFFFFFF,
    flex: 1,
    height: 812,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default SignUpPhone1;
