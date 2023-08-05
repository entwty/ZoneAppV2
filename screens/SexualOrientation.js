import React, { useState } from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SexualOrientation = () => {
  const [manchecked, setManchecked] = useState(false);
  const [womanchecked, setWomanchecked] = useState(false);
  const [woman1checked, setWoman1checked] = useState(false);
  const [woman2checked, setWoman2checked] = useState(false);
  const [woman3checked, setWoman3checked] = useState(false);

  return (
    <View style={[styles.sexualOrientation, styles.containerLayout1]}>
      <Image
        style={styles.statusBarIphoneXOrNewe}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <View style={styles.manParent}>
        <View style={[styles.man, styles.womanPosition]}>
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
        <View style={[styles.woman1, styles.womanPosition]}>
          <Checkbox
            status={woman1checked ? "checked" : "unchecked"}
            onPress={() => setWoman1checked(!woman1checked)}
            color="#fff"
          />
        </View>
        <View style={[styles.woman2, styles.womanPosition]}>
          <Checkbox
            status={woman2checked ? "checked" : "unchecked"}
            onPress={() => setWoman2checked(!woman2checked)}
            color="#fff"
          />
        </View>
        <View style={styles.woman3}>
          <Checkbox
            status={woman3checked ? "checked" : "unchecked"}
            onPress={() => setWoman3checked(!woman3checked)}
            color="#fff"
          />
        </View>
      </View>
      <View style={styles.btnBackParent}>
        <Pressable style={[styles.btnBack, styles.btnBackPosition]}>
          <View style={[styles.container, styles.containerLayout]} />
          <Image
            style={styles.rightIcon}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </Pressable>
        <Text style={[styles.cinselYnelim, styles.onaylaTypo]}>
          Cinsel Yönelim
        </Text>
      </View>
      <Pressable style={[styles.onaylaWrapper, styles.containerLayout]}>
        <Text style={[styles.onayla, styles.onaylaTypo]}>Onayla</Text>
      </Pressable>
      <Text style={styles.dahaYksekMiktarda}>
        Daha yüksek miktarda günlük eşleşme elde etmek için yöneliminizi
        ekleyiniz.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout1: {
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  womanPosition: {
    left: "0%",
    right: "0%",
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
  onaylaTypo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    top: 0,
    left: 0,
    width: 375,
    height: 44,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  man: {
    top: "20.61%",
    bottom: "61.82%",
    right: "0%",
  },
  woman: {
    bottom: "82.42%",
    top: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  woman1: {
    top: "41.21%",
    bottom: "41.21%",
    right: "0%",
  },
  woman2: {
    top: "61.82%",
    bottom: "20.61%",
    right: "0%",
  },
  woman3: {
    top: "82.42%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  manParent: {
    height: "40.64%",
    width: "78.67%",
    top: "29.68%",
    right: "10.67%",
    bottom: "29.68%",
    left: "10.67%",
    position: "absolute",
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
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "26.92%",
    position: "absolute",
    overflow: "hidden",
  },
  btnBack: {
    width: "23.42%",
    right: "76.58%",
    position: "absolute",
  },
  cinselYnelim: {
    left: "50.9%",
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.gray_600,
    top: "26.92%",
  },
  btnBackParent: {
    height: "6.4%",
    width: "59.2%",
    top: "7.27%",
    right: "35.47%",
    bottom: "86.33%",
    left: "5.33%",
    position: "absolute",
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
  dahaYksekMiktarda: {
    top: 141,
    left: 20,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black000000,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 336,
    position: "absolute",
  },
  sexualOrientation: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default SexualOrientation;
