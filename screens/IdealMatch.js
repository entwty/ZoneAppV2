import React, { useState } from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IdealMatch = () => {
  const [groupCheckboxchecked, setGroupCheckboxchecked] = useState(undefined);
  const [groupCheckbox1checked, setGroupCheckbox1checked] = useState(undefined);
  const [groupCheckbox2checked, setGroupCheckbox2checked] = useState(undefined);
  const [groupCheckbox3checked, setGroupCheckbox3checked] = useState(undefined);

  return (
    <View style={[styles.idealMatch, styles.containerLayout1]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <View style={styles.btnBackParent}>
        <Pressable style={[styles.btnBack, styles.btnBackPosition]}>
          <View style={[styles.container, styles.containerLayout]} />
          <Image
            style={styles.rightIcon}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </Pressable>
        <Text style={[styles.arzuEdilenLiki, styles.onaylaTypo]}>
          Arzu Edilen İlişki
        </Text>
      </View>
      <Pressable style={[styles.onaylaWrapper, styles.containerLayout]}>
        <Text style={[styles.onayla, styles.onaylaTypo]}>Onayla</Text>
      </Pressable>
      <View style={styles.groupParent}>
        <View style={[styles.wrapper, styles.framePosition]}>
          <RNPCheckbox
            status={groupCheckboxchecked ? "checked" : "unchecked"}
            onPress={() => setGroupCheckboxchecked(!groupCheckboxchecked)}
            color="#fae6f3"
          />
        </View>
        <View style={[styles.frame, styles.framePosition]}>
          <RNPCheckbox
            status={groupCheckbox1checked ? "checked" : "unchecked"}
            onPress={() => setGroupCheckbox1checked(!groupCheckbox1checked)}
            color="#fae6f3"
          />
        </View>
        <View style={[styles.groupView, styles.wrapper1Position]}>
          <RNPCheckbox
            status={groupCheckbox2checked ? "checked" : "unchecked"}
            onPress={() => setGroupCheckbox2checked(!groupCheckbox2checked)}
            color="#fae6f3"
          />
        </View>
        <View style={[styles.wrapper1, styles.wrapper1Position]}>
          <RNPCheckbox
            status={groupCheckbox3checked ? "checked" : "unchecked"}
            onPress={() => setGroupCheckbox3checked(!groupCheckbox3checked)}
            color="#fae6f3"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout1: {
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  framePosition: {
    top: 0,
    position: "absolute",
  },
  btnBackPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
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
  wrapper1Position: {
    top: 180,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    width: 375,
    height: 44,
    display: "none",
    left: 0,
    overflow: "hidden",
  },
  container: {
    right: "0%",
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    width: "22.91%",
    right: "77.09%",
    position: "absolute",
  },
  arzuEdilenLiki: {
    left: "47.14%",
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    color: Color.gray_600,
    top: "26.92%",
  },
  btnBackParent: {
    height: "6.4%",
    width: "60.53%",
    top: "7.27%",
    right: "34.13%",
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
  wrapper: {
    left: 0,
  },
  frame: {
    left: 176,
  },
  groupView: {
    left: 0,
  },
  wrapper1: {
    left: 176,
  },
  groupParent: {
    top: 164,
    left: 20,
    width: 336,
    height: 330,
    position: "absolute",
  },
  idealMatch: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default IdealMatch;
