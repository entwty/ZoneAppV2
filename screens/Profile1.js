import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Profile1 = () => {
  const [inputCalendarDatePicker, setInputCalendarDatePicker] =
    useState(undefined);

  return (
    <View style={[styles.profile, styles.profileLayout]}>
      <Image
        style={styles.statusBarIphoneXOrNewe}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <Image
        style={styles.profileChild}
        resizeMode="cover"
        source={require("../assets/frame-34636.png")}
      />
      <TextInput
        style={[styles.inputFirstName, styles.inputPosition]}
        placeholder="Ad Soyad"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
      />
      <TextInput
        style={[styles.inputFirstName1, styles.inputPosition]}
        placeholder="Telefon "
        keyboardType="number-pad"
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
      />
      <TextInput
        style={[styles.inputFirstName2, styles.inputPosition]}
        placeholder="Hakkında"
        keyboardType="default"
        multiline={true}
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
      />
      <RNKDatepicker
        placeholder={() => (
          <Text style={styles.inputCalendarDatePickerPlaceHolder}>
            Doğum Gününü Ekle
          </Text>
        )}
        date={inputCalendarDatePicker}
        onSelect={setInputCalendarDatePicker}
        controlStyle={styles.inputCalendarDatePickerValue}
      />
      <Image
        style={styles.cameraIcon}
        resizeMode="cover"
        source={require("../assets/camera1.png")}
      />
      <Pressable style={[styles.onaylaWrapper, styles.onaylaWrapperPosition]}>
        <Text style={[styles.onayla, styles.onaylaTypo]}>Onayla</Text>
      </Pressable>
      <View style={[styles.profilOluturmaParent, styles.onaylaWrapperPosition]}>
        <Text style={[styles.profilOluturma, styles.onaylaTypo]}>
          Profil Oluşturma
        </Text>
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
  inputCalendarDatePickerPlaceHolder: {
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
    color: "#cc078a",
    fontSize: 14,
  },
  inputCalendarDatePickerValue: {},
  profileLayout: {
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  inputPosition: {
    left: "6.13%",
    right: "5.87%",
    width: "88%",
    position: "absolute",
  },
  onaylaWrapperPosition: {
    left: "5.33%",
    position: "absolute",
  },
  onaylaTypo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
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
    top: 0,
    left: 0,
    width: 375,
    height: 44,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  profileChild: {
    top: 158,
    left: 135,
    borderRadius: Border.br_113xl,
    width: 106,
    height: 106,
    position: "absolute",
    overflow: "hidden",
  },
  inputFirstName: {
    top: "35.84%",
    bottom: "55.91%",
    height: "8.25%",
    left: "6.13%",
    right: "5.87%",
    width: "88%",
  },
  inputFirstName1: {
    top: "46.55%",
    bottom: "45.2%",
    height: "8.25%",
    left: "6.13%",
    right: "5.87%",
    width: "88%",
  },
  inputFirstName2: {
    height: "18.35%",
    top: "66.87%",
    bottom: "14.78%",
  },
  cameraIcon: {
    top: 225,
    left: 213,
    width: 38,
    height: 38,
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
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  profilOluturma: {
    top: "28.85%",
    left: "46.52%",
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.gray_600,
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
    width: "22.61%",
    right: "77.39%",
  },
  profilOluturmaParent: {
    height: "6.4%",
    width: "61.33%",
    top: "7.27%",
    right: "33.33%",
    bottom: "86.33%",
  },
  profile: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Profile1;
