import React, { useMemo, memo } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LoginView = memo(({ propZIndex, propMarginTop }) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("zIndex", propZIndex),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propZIndex, propMarginTop]);

  return (
    <View style={[styles.giriYapParent, groupView1Style]}>
      <Text style={[styles.giriYap, styles.giriYapPosition]}>Giriş Yap</Text>
      <Pressable style={[styles.btnBack, styles.btnBackPosition]}>
        <View style={[styles.container, styles.btnBackPosition]} />
        <Image
          style={[styles.rightIcon, styles.giriYapPosition]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  giriYapPosition: {
    top: "26.92%",
    position: "absolute",
  },
  btnBackPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  giriYap: {
    left: "67.5%",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    color: Color.gray_600,
    textAlign: "center",
  },
  container: {
    width: "100%",
    right: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.whiteFFFFFF,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  btnBack: {
    width: "26%",
    right: "74%",
  },
  giriYapParent: {
    height: "6.4%",
    width: "53.33%",
    top: "7.27%",
    right: "41.33%",
    bottom: "86.33%",
    left: "5.33%",
    zIndex: 3,
    position: "absolute",
  },
});

export default LoginView;
