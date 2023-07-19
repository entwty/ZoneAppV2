import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignUpPhone = () => {
  return (
    <SafeAreaView style={[styles.signUpPhone, styles.signUpPhoneLayout]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.rightIconLayout]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer10.png")}
      />
      <View style={styles.keuboard}>
        <View style={[styles.container, styles.containerPosition]} />
        <View style={styles.keys}>
          <Image
            style={styles.deleteIcon}
            resizeMode="cover"
            source={require("../assets/delete.png")}
          />
          <Text style={[styles.text, styles.textTypo2]}>0</Text>
          <Text style={[styles.text1, styles.textTypo1]}>9</Text>
          <Text style={[styles.text2, styles.textTypo1]}>8</Text>
          <Text style={[styles.text3, styles.textTypo1]}>7</Text>
          <Text style={[styles.text4, styles.textTypo]}>6</Text>
          <Text style={[styles.text5, styles.textTypo]}>5</Text>
          <Text style={[styles.text6, styles.textTypo]}>4</Text>
          <Text style={[styles.text7, styles.textTypo2]}>3</Text>
          <Text style={[styles.text8, styles.textTypo2]}>2</Text>
          <Text style={[styles.text9, styles.textTypo2]}>1</Text>
        </View>
      </View>
      <View style={styles.timer}>
        <Text style={styles.typeTheVerificatio}>
          Size gönderdiğimiz 4 haneli doğrulama kodunu yazınız
        </Text>
        <Text style={[styles.text10, styles.textTypo2]}>00:42</Text>
      </View>
      <View style={styles.giriYapParent}>
        <Text style={[styles.giriYap, styles.giriYapPosition]}>Giriş Yap</Text>
        <Pressable style={[styles.btnBack, styles.containerPosition]}>
          <View style={[styles.container1, styles.blankBorder]} />
          <Image
            style={[styles.rightIcon, styles.giriYapPosition]}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
        </Pressable>
      </View>
      <Pressable style={styles.sendAgain} />
      <View style={styles.enterOtpInput}>
        <TextInput
          style={[styles.blank, styles.textinputPosition]}
          placeholder="Placeholder text"
          keyboardType="number-pad"
        />
        <TextInput
          style={[styles.textinput, styles.textinputPosition]}
          keyboardType="number-pad"
          placeholderTextColor="#1e232c"
        />
        <TextInput
          style={[styles.textinput1, styles.textinputPosition]}
          keyboardType="number-pad"
          autoCapitalize="sentences"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={[styles.textinput2, styles.textinputPosition]}
          placeholder="z"
          keyboardType="number-pad"
          placeholderTextColor="#fff"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpPhoneLayout: {
    height: 812,
    width: "100%",
  },
  rightIconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  containerPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  textTypo2: {
    color: Color.black000000,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  textTypo1: {
    top: "55.56%",
    textAlign: "center",
    color: Color.black000000,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    width: "32.23%",
    position: "absolute",
  },
  textTypo: {
    top: "27.78%",
    textAlign: "center",
    color: Color.black000000,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    width: "32.23%",
    position: "absolute",
  },
  giriYapPosition: {
    top: "26.92%",
    position: "absolute",
  },
  blankBorder: {
    borderWidth: 1,
    borderColor: "#e8e6ea",
    borderStyle: "solid",
    right: "0%",
  },
  textinputPosition: {
    width: "20.95%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    alignSelf: "stretch",
    zIndex: 0,
    display: "none",
    height: 812,
    width: "100%",
  },
  container: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  deleteIcon: {
    width: 24,
    height: 18,
  },
  text: {
    top: "83.33%",
    textAlign: "center",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    width: "32.23%",
    color: Color.black000000,
    left: "33.88%",
  },
  text1: {
    left: "67.77%",
  },
  text2: {
    left: "33.88%",
  },
  text3: {
    left: "0%",
  },
  text4: {
    left: "67.77%",
  },
  text5: {
    left: "33.88%",
  },
  text6: {
    left: "0%",
  },
  text7: {
    left: "67.77%",
    textAlign: "center",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    width: "32.23%",
    color: Color.black000000,
    top: "0%",
  },
  text8: {
    textAlign: "center",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    width: "32.23%",
    color: Color.black000000,
    left: "33.88%",
    top: "0%",
  },
  text9: {
    textAlign: "center",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    width: "32.23%",
    color: Color.black000000,
    left: "0%",
    top: "0%",
  },
  keys: {
    height: "87.1%",
    width: "96.8%",
    top: "6.45%",
    right: "1.6%",
    bottom: "6.45%",
    left: "1.6%",
    position: "absolute",
  },
  keuboard: {
    width: 375,
    height: 248,
    zIndex: 1,
    display: "none",
  },
  typeTheVerificatio: {
    top: "61.11%",
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.gray_500,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  text10: {
    fontSize: FontSize.size_15xl,
    lineHeight: 51,
    textAlign: "center",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  timer: {
    height: "13.3%",
    width: "57.33%",
    top: "23.65%",
    right: "21.33%",
    bottom: "63.05%",
    left: "21.33%",
    zIndex: 2,
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
  container1: {
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    right: "26.92%",
    bottom: "26.92%",
    left: "26.92%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  btnBack: {
    width: "26%",
    right: "74%",
    left: "0%",
    bottom: "0%",
    height: "100%",
  },
  giriYapParent: {
    height: "6.4%",
    width: "53.33%",
    top: "9.36%",
    right: "38.4%",
    bottom: "84.24%",
    left: "8.27%",
    zIndex: 3,
    position: "absolute",
  },
  sendAgain: {
    bottom: 0,
    left: "34.27%",
    zIndex: 4,
    position: "absolute",
  },
  blank: {
    left: "79.05%",
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: "#e8e6ea",
    borderStyle: "solid",
    right: "0%",
  },
  textinput: {
    right: "26.35%",
    left: "52.7%",
  },
  textinput1: {
    right: "79.05%",
    left: "0%",
  },
  textinput2: {
    right: "52.64%",
    left: "26.41%",
  },
  enterOtpInput: {
    height: "7.39%",
    width: "88%",
    top: "44.83%",
    right: "5.87%",
    bottom: "47.78%",
    left: "6.13%",
    zIndex: 5,
    position: "absolute",
  },
  signUpPhone: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default SignUpPhone;
