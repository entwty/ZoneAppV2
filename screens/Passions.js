import React, { useState } from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Passions = () => {
  const [checkboxchecked, setCheckboxchecked] = useState(undefined);
  const [checkbox1checked, setCheckbox1checked] = useState(undefined);
  const [checkbox2checked, setCheckbox2checked] = useState(undefined);
  const [checkbox3checked, setCheckbox3checked] = useState(undefined);
  const [checkbox4checked, setCheckbox4checked] = useState(undefined);
  const [checkbox5checked, setCheckbox5checked] = useState(undefined);
  const [checkbox6checked, setCheckbox6checked] = useState(undefined);
  const [checkbox7checked, setCheckbox7checked] = useState(undefined);
  const [checkbox8checked, setCheckbox8checked] = useState(undefined);
  const [checkbox9checked, setCheckbox9checked] = useState(undefined);
  const [checkbox10checked, setCheckbox10checked] = useState(undefined);
  const [checkbox11checked, setCheckbox11checked] = useState(undefined);

  return (
    <View style={[styles.passions, styles.passionsLayout]}>
      <Image
        style={styles.statusBarIphoneXOrNewe}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <Pressable style={styles.devamEtWrapper}>
        <Text style={[styles.devamEt, styles.skipTypo]}>Devam Et</Text>
      </Pressable>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.lgiAlanlarn, styles.lgiFlexBox]}>
          İlgi Alanların
        </Text>
        <Text style={[styles.lgiAlanlarnzdanBirkan, styles.lgiFlexBox]}>
          İlgi alanlarınızdan birkaçını seçin ve herkesin neye tutkulu
          olduğunuzu bilmesini sağlayın.
        </Text>
      </View>
      <View style={[styles.parent, styles.headerPosition]}>
        <View style={styles.view}>
          <RNPCheckbox
            status={checkboxchecked ? "checked" : "unchecked"}
            onPress={() => setCheckboxchecked(!checkboxchecked)}
            color="#cc078a"
          />
        </View>
        <View style={[styles.view1, styles.viewPosition4]}>
          <RNPCheckbox
            status={checkbox1checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox1checked(!checkbox1checked)}
            color="#fff"
          />
        </View>
        <View style={[styles.view2, styles.viewPosition3]}>
          <RNPCheckbox
            status={checkbox2checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox2checked(!checkbox2checked)}
            color="#fff"
          />
        </View>
        <View style={[styles.view3, styles.viewPosition2]}>
          <RNPCheckbox
            status={checkbox3checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox3checked(!checkbox3checked)}
            color="#fff"
          />
        </View>
        <View style={[styles.view4, styles.viewPosition1]}>
          <RNPCheckbox
            status={checkbox4checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox4checked(!checkbox4checked)}
            color="#cc078a"
          />
        </View>
        <View style={[styles.view5, styles.viewPosition]}>
          <RNPCheckbox
            status={checkbox5checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox5checked(!checkbox5checked)}
            color="#fff"
          />
        </View>
        <View style={styles.view6}>
          <RNPCheckbox
            status={checkbox6checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox6checked(!checkbox6checked)}
            color="#fff"
          />
        </View>
        <View style={[styles.view7, styles.viewPosition4]}>
          <RNPCheckbox
            status={checkbox7checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox7checked(!checkbox7checked)}
            color="#fff"
          />
        </View>
        <View style={[styles.view8, styles.viewPosition3]}>
          <RNPCheckbox
            status={checkbox8checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox8checked(!checkbox8checked)}
            color="#fff"
          />
        </View>
        <View style={[styles.view9, styles.viewPosition2]}>
          <RNPCheckbox
            status={checkbox9checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox9checked(!checkbox9checked)}
            color="#cc078a"
          />
        </View>
        <View style={[styles.view10, styles.viewPosition1]}>
          <RNPCheckbox
            status={checkbox10checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox10checked(!checkbox10checked)}
            color="#fff"
          />
        </View>
        <View style={[styles.view11, styles.viewPosition]}>
          <RNPCheckbox
            status={checkbox11checked ? "checked" : "unchecked"}
            onPress={() => setCheckbox11checked(!checkbox11checked)}
            color="#fff"
          />
        </View>
      </View>
      <View style={styles.skipParent}>
        <Text style={[styles.skip, styles.lgiFlexBox]}>Atla</Text>
        <Pressable style={[styles.btnBack, styles.btnBackPosition]}>
          <View style={[styles.container, styles.btnBackPosition]} />
          <Image
            style={styles.rightIcon}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passionsLayout: {
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  skipTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  headerPosition: {
    left: 40,
    width: 295,
    position: "absolute",
  },
  lgiFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  viewPosition4: {
    top: 55,
    position: "absolute",
  },
  viewPosition3: {
    top: 110,
    position: "absolute",
  },
  viewPosition2: {
    top: 165,
    position: "absolute",
  },
  viewPosition1: {
    top: 220,
    position: "absolute",
  },
  viewPosition: {
    top: 275,
    position: "absolute",
  },
  btnBackPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    width: 375,
    height: 44,
    display: "none",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  devamEt: {
    top: 12,
    left: 125,
    lineHeight: 24,
    color: Color.whiteFFFFFF,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    position: "absolute",
  },
  devamEtWrapper: {
    height: "5.91%",
    width: "87.2%",
    top: "87.93%",
    right: "7.47%",
    bottom: "6.16%",
    left: "5.33%",
    backgroundColor: Color.mediumvioletred_100,
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
  },
  lgiAlanlarn: {
    fontSize: FontSize.size_15xl,
    lineHeight: 51,
    color: Color.black000000,
    width: 295,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  lgiAlanlarnzdanBirkan: {
    top: 66,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray_500,
    width: 295,
    left: 0,
  },
  header: {
    top: 141,
    height: 129,
    width: 295,
  },
  view: {
    left: 155,
    top: 0,
    position: "absolute",
  },
  view1: {
    left: 155,
  },
  view2: {
    left: 155,
  },
  view3: {
    left: 155,
  },
  view4: {
    left: 155,
  },
  view5: {
    left: 155,
  },
  view6: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  view7: {
    left: 0,
  },
  view8: {
    left: 0,
  },
  view9: {
    left: 0,
  },
  view10: {
    left: 0,
  },
  view11: {
    left: 0,
  },
  parent: {
    top: 320,
    height: 320,
    width: 295,
  },
  skip: {
    top: 14,
    left: 282,
    lineHeight: 24,
    color: Color.mediumvioletred_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  container: {
    right: "0%",
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    borderRadius: Border.br_mini,
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
    width: "16.46%",
    right: "83.54%",
  },
  skipParent: {
    top: 59,
    left: 20,
    width: 316,
    height: 52,
    position: "absolute",
  },
  passions: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Passions;
