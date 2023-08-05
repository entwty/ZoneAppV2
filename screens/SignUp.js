import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Image
        style={styles.statusBarIphoneXOrNewe}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer2.png")}
      />
      <SafeAreaView style={styles.groupParent}>
        <Pressable style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={styles.rectangle} />
          <Text style={styles.emailIleDevam}>Email ile Devam Et</Text>
        </Pressable>
        <Pressable style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.rectangle1, styles.containerBorder]} />
          <Text style={styles.telefonNumaranKullan}>
            Telefon Numaranı Kullan
          </Text>
        </Pressable>
        <View style={styles.orLoginWith}>
          <Image
            style={[styles.line2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/line-2.png")}
          />
          <Text style={styles.veya}>Veya</Text>
          <Image
            style={[styles.line1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <Pressable style={[styles.fb, styles.fbPosition]} onPress={() => {}}>
          <View style={[styles.container, styles.containerBorder]} />
          <Image
            style={[styles.iconsLogoFacebook, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icons--logo--facebook.png")}
          />
        </Pressable>
        <Pressable style={[styles.google, styles.fbPosition]}>
          <View style={[styles.container, styles.containerBorder]} />
          <Image
            style={[styles.iconsLogoFacebook, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icons--logo--google.png")}
          />
        </Pressable>
        <Image
          style={[styles.appleIcon, styles.fbPosition]}
          resizeMode="cover"
          source={require("../assets/3-apple.png")}
        />
        <ImageBackground
          style={styles.zoneIkonTextYatayGradient}
          resizeMode="cover"
          source={require("../assets/zoneikontextyataygradient11.png")}
        />
      </SafeAreaView>
      <View style={styles.footer}>
        <Text style={[styles.termsOfUse, styles.termsOfUseTypo]}>
          Terms of use
        </Text>
        <Text style={[styles.privacyPolicy, styles.termsOfUseTypo]}>
          Privacy Policy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    height: "14.18%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  containerBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.whiteFFFFFF,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fbPosition: {
    top: "83.8%",
    width: "21.69%",
    height: "16.2%",
    bottom: "0%",
    position: "absolute",
  },
  termsOfUseTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.mediumvioletred_100,
    textAlign: "center",
    top: "0%",
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    alignSelf: "stretch",
    display: "none",
    maxWidth: "100%",
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
  rectangle: {
    backgroundColor: Color.mediumvioletred_100,
    borderRadius: Border.br_mini,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  emailIleDevam: {
    left: "24.41%",
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    top: "28.57%",
    position: "absolute",
  },
  rectangleParent: {
    top: "27.09%",
    bottom: "58.73%",
    left: "0%",
    right: "0%",
  },
  rectangle1: {
    height: "101.79%",
    width: "100.34%",
    top: "-0.89%",
    right: "-0.17%",
    bottom: "-0.89%",
    left: "-0.17%",
    borderColor: "#f3f3f3",
  },
  telefonNumaranKullan: {
    left: "15.59%",
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.mediumvioletred_100,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    top: "28.57%",
    position: "absolute",
  },
  rectangleGroup: {
    top: "46.33%",
    bottom: "39.49%",
    left: "0%",
    right: "0%",
  },
  line2Icon: {
    width: "39.32%",
    left: "60.68%",
    bottom: "38.89%",
    top: "55.56%",
    height: "5.56%",
    maxHeight: "100%",
    position: "absolute",
    right: "0%",
  },
  veya: {
    width: "26.78%",
    left: "36.61%",
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.black000000,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: "0%",
    position: "absolute",
  },
  line1Icon: {
    width: "38.98%",
    right: "61.02%",
    bottom: "38.89%",
    top: "55.56%",
    height: "5.56%",
    maxHeight: "100%",
    position: "absolute",
    left: "0%",
  },
  orLoginWith: {
    height: "4.56%",
    top: "73.16%",
    bottom: "22.28%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  container: {
    borderColor: "#e8e6ea",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconsLogoFacebook: {
    height: "50%",
    width: "50%",
    top: "25%",
    right: "25%",
    bottom: "25%",
    left: "25%",
    position: "absolute",
  },
  fb: {
    right: "67.8%",
    left: "10.51%",
  },
  google: {
    right: "39.32%",
    left: "38.98%",
  },
  appleIcon: {
    right: "10.85%",
    left: "67.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  zoneIkonTextYatayGradient: {
    top: 0,
    left: 60,
    width: 175,
    height: 57,
    position: "absolute",
  },
  groupParent: {
    width: 295,
    height: 395,
  },
  termsOfUse: {
    left: "0%",
  },
  privacyPolicy: {
    left: "54.11%",
  },
  footer: {
    width: 207,
    height: 21,
  },
  signUp: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.whiteFFFFFF,
    width: "100%",
  },
});

export default SignUp;
