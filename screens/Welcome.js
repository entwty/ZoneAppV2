import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Welcome = () => {
  return (
    <LinearGradient
      style={styles.welcome}
      locations={[0, 1]}
      colors={["#cc078a", "#32c0f2"]}
      useAngle={true}
      angle={90}
    >
      <Image
        style={[styles.iphone11ProX20, styles.backdropPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-11-pro--x--20.png")}
      />
      <LinearGradient
        style={[styles.backdrop, styles.backdropPosition]}
        locations={[0, 1]}
        colors={["#cc078a", "#32c0f2"]}
        useAngle={true}
        angle={90}
      />
      <ImageBackground
        style={styles.zoneIkonBeyaz11}
        resizeMode="cover"
        source={require("../assets/zoneikonbeyaz11.png")}
      />
      <Text style={[styles.hogeldiniz, styles.balaFlexBox]}>Hoşgeldiniz</Text>
      <Text style={styles.ltfenAadakiKurallara}>
        Lütfen aşağıdaki kurallara uymayı unutma
      </Text>
      <View style={[styles.fotoraflarnnYannVeBiParent, styles.parentPosition]}>
        <Text
          style={[styles.fotoraflarnnYannVe, styles.fotoraflarnnYannVeTypo]}
        >
          Fotoğraflarının, yaşının ve biyografinin gerçeği yansıttığına emin ol.
        </Text>
        <Text style={[styles.kendinOl, styles.kendinOlTypo]}>Kendin Ol</Text>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-31.png")}
        />
      </View>
      <View
        style={[styles.kiiselBilgileriniPaylamadaParent, styles.parentPosition]}
      >
        <Text
          style={[styles.fotoraflarnnYannVe, styles.fotoraflarnnYannVeTypo]}
        >
          Kişisel bilgilerini paylaşmadan önce iyi düşün. Tedbirli kullan.
        </Text>
        <Text style={[styles.dikkatliOl, styles.kendinOlTypo]}>
          Dikkatli Ol
        </Text>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-18166.png")}
        />
      </View>
      <View
        style={[styles.dierKullanclaraSaygGstParent, styles.parentPosition]}
      >
        <Text
          style={[styles.dierKullanclaraSayg, styles.fotoraflarnnYannVeTypo]}
        >
          Diğer kullanıcılara saygı göster ve sana nasıl davranılmasını
          istiyorsan öyle davran.
        </Text>
        <Text style={[styles.nazikOl, styles.nazikOlTypo]}>Nazik Ol.</Text>
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-18167.png")}
        />
      </View>
      <View
        style={[styles.ktDavranlarMutlakaBizeParent, styles.parentPosition]}
      >
        <Text
          style={[styles.ktDavranlarMutlaka, styles.fotoraflarnnYannVeTypo]}
        >
          Kötü davranışları mutlaka bize bildir.
        </Text>
        <Text style={[styles.proaktifOl, styles.nazikOlTypo]}>
          Proaktif Ol.
        </Text>
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-18168.png")}
        />
      </View>
      <Pressable style={[styles.balaParent, styles.balaParentLayout]}>
        <Text style={[styles.bala, styles.balaFlexBox]}>{`Başla >`}</Text>
        <View style={[styles.rectangleView, styles.balaParentLayout]} />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backdropPosition: {
    width: 375,
    top: "50%",
    marginLeft: -187.5,
    marginTop: -406,
    left: "50%",
    position: "absolute",
    height: 812,
  },
  balaFlexBox: {
    textAlign: "left",
    color: Color.whiteFFFFFF,
    position: "absolute",
  },
  parentPosition: {
    left: "9.33%",
    right: "9.33%",
    width: "81.33%",
    position: "absolute",
  },
  fotoraflarnnYannVeTypo: {
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    lineHeight: 18,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.whiteFFFFFF,
    position: "absolute",
    width: "100%",
  },
  kendinOlTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: "1.64%",
    lineHeight: 18,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.whiteFFFFFF,
    position: "absolute",
  },
  groupPosition: {
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
  },
  nazikOlTypo: {
    left: "9.35%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.whiteFFFFFF,
    position: "absolute",
  },
  balaParentLayout: {
    height: 35,
    width: 134,
    position: "absolute",
  },
  iphone11ProX20: {
    zIndex: 0,
    overflow: "hidden",
  },
  backdrop: {
    opacity: 0.5,
    zIndex: 1,
    backgroundColor: "transparent",
  },
  zoneIkonBeyaz11: {
    top: 103,
    left: 138,
    width: 100,
    height: 119,
    zIndex: 2,
    position: "absolute",
  },
  hogeldiniz: {
    marginLeft: -102.5,
    top: 249,
    fontSize: FontSize.size_15xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    zIndex: 3,
    left: "50%",
    color: Color.whiteFFFFFF,
  },
  ltfenAadakiKurallara: {
    top: "40.44%",
    left: "10.53%",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    zIndex: 4,
    lineHeight: 18,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.whiteFFFFFF,
    position: "absolute",
  },
  fotoraflarnnYannVe: {
    top: "40.98%",
  },
  kendinOl: {
    left: "9.77%",
  },
  groupChild: {
    width: 20,
  },
  fotoraflarnnYannVeBiParent: {
    top: "46.11%",
    bottom: "46.38%",
    zIndex: 5,
    height: "7.51%",
    right: "9.33%",
    width: "81.33%",
  },
  dikkatliOl: {
    left: "9.84%",
  },
  kiiselBilgileriniPaylamadaParent: {
    top: "57.07%",
    bottom: "35.42%",
    zIndex: 6,
    height: "7.51%",
    right: "9.33%",
    width: "81.33%",
  },
  dierKullanclaraSayg: {
    top: "40.8%",
  },
  nazikOl: {
    top: "1.64%",
    left: "9.35%",
  },
  groupInner: {
    width: 19,
  },
  dierKullanclaraSaygGstParent: {
    height: "7.49%",
    top: "68.03%",
    bottom: "24.48%",
    zIndex: 7,
  },
  ktDavranlarMutlaka: {
    top: "57.96%",
  },
  proaktifOl: {
    top: "2.34%",
  },
  ktDavranlarMutlakaBizeParent: {
    height: "5.27%",
    top: "78.96%",
    bottom: "15.76%",
    zIndex: 8,
  },
  bala: {
    top: 4,
    left: 34,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  rectangleView: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 35,
    width: 134,
  },
  balaParent: {
    top: 712,
    left: 121,
    zIndex: 9,
  },
  welcome: {
    flex: 1,
    paddingTop: 62,
    paddingBottom: 65,
    alignItems: "center",
    justifyContent: "flex-end",
    undefined: "",
    backgroundColor: "transparent",
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Welcome;
