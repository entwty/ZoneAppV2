import React, { useState } from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { Checkbox } from "react-native-paper";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Gender = () => {
  const [manchecked, setManchecked] = useState(false);
  const [womanchecked, setWomanchecked] = useState(false);
  const [woman1checked, setWoman1checked] = useState(false);

  return (
    <View style={[styles.gender, styles.genderLayout]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.benBirPosition]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <View style={styles.manParent}>
        <View style={styles.man}>
          <Checkbox
            status={manchecked ? "checked" : "unchecked"}
            onPress={() => setManchecked(!manchecked)}
            color="#cc078a"
          />
        </View>
        <View style={styles.woman}>
          <Checkbox
            status={womanchecked ? "checked" : "unchecked"}
            onPress={() => setWomanchecked(!womanchecked)}
            color="#fff"
          />
        </View>
        <View style={styles.woman1}>
          <Checkbox
            status={woman1checked ? "checked" : "unchecked"}
            onPress={() => setWoman1checked(!woman1checked)}
            color="#fff"
          />
        </View>
      </View>
      <View style={styles.cinsiyetParent}>
        <Text style={[styles.cinsiyet, styles.onaylaTypo]}>Cinsiyet</Text>
        <Pressable style={[styles.btnBack, styles.btnBackPosition]}>
          <View style={[styles.container, styles.containerLayout]} />
          <Image
            style={styles.rightIcon}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Text style={[styles.benBir, styles.headerLayout]}>{`Ben bir `}</Text>
      </View>
      <Pressable style={[styles.onaylaWrapper, styles.containerLayout]}>
        <Text style={[styles.onayla, styles.onaylaTypo]}>Onayla</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  genderLayout: {
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  benBirPosition: {
    left: 0,
    top: 0,
  },
  onaylaTypo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  btnBackPosition: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    left: "0%",
  },
  containerLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  headerLayout: {
    width: 295,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    width: 375,
    height: 44,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  man: {
    top: "35.05%",
    bottom: "35.05%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  woman: {
    bottom: "70.1%",
    top: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  woman1: {
    top: "70.1%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  manParent: {
    height: "23.89%",
    width: "78.67%",
    top: "32.27%",
    right: "10.67%",
    bottom: "43.84%",
    left: "10.67%",
    position: "absolute",
  },
  cinsiyet: {
    top: "28.85%",
    left: "70.2%",
    letterSpacing: 0,
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.gray_600,
    fontWeight: "600",
  },
  container: {
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    height: "100%",
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  btnBack: {
    width: "26.26%",
    right: "73.74%",
    position: "absolute",
  },
  cinsiyetParent: {
    height: "6.4%",
    width: "52.8%",
    top: "7.27%",
    right: "41.87%",
    bottom: "86.33%",
    left: "5.33%",
    position: "absolute",
  },
  benBir: {
    fontSize: FontSize.size_15xl,
    lineHeight: 51,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black000000,
    textAlign: "left",
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  header: {
    top: 161,
    left: 40,
    height: 51,
  },
  onayla: {
    top: 12,
    left: 134,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
  },
  onaylaWrapper: {
    height: "5.91%",
    width: "87.2%",
    top: "87.93%",
    right: "7.47%",
    bottom: "6.16%",
    backgroundColor: Color.mediumvioletred_100,
    left: "5.33%",
    overflow: "hidden",
  },
  gender: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Gender;
