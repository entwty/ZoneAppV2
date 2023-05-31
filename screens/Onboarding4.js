import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding4 = () => {
  const [slideItems, setSlideItems] = useState([
    <GroupComponent1 />,
    <GroupComponent />,
    <GroupComponent1 />,
  ]);

  return (
    <View style={styles.onboarding4}>
      <View style={[styles.unsplashovgyojausq8Parent, styles.parentLayout]}>
        <Image
          style={[styles.unsplashovgyojausq8Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/unsplashovgyojausq8.png")}
        />
        <LinearGradient
          style={[styles.groupChild, styles.childLayout]}
          locations={[0, 1]}
          colors={["rgba(204, 7, 138, 0.1)", "rgba(53, 188, 240, 0.1)"]}
          useAngle={true}
          angle={180}
        />
      </View>
      <View style={[styles.unsplashr21syyjdfgcParent, styles.parentLayout]}>
        <Image
          style={[styles.unsplashr21syyjdfgcIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/unsplashr21syyjdfgc.png")}
        />
        <LinearGradient
          style={[styles.groupChild, styles.childLayout]}
          locations={[0, 1]}
          colors={["rgba(204, 7, 138, 0.1)", "rgba(53, 188, 240, 0.1)"]}
          useAngle={true}
          angle={180}
        />
      </View>
      <LinearGradient
        style={[styles.onboarding4Child, styles.childLayout]}
        locations={[0, 1]}
        colors={["rgba(204, 7, 138, 0.1)", "rgba(53, 188, 240, 0.1)"]}
        useAngle={true}
        angle={180}
      />
      <Pressable style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.hesapOlutur, styles.hesapOluturFlexBox]}>
          Hesap Oluştur
        </Text>
      </Pressable>
      <View style={styles.slide}>
        <Carousel
          width={313}
          mode="normal"
          autoPlay="false"
          loop="true"
          pagingEnabled="true"
          data={slideItems}
          renderItem={({ item }) => item}
        />
      </View>
      <Text style={[styles.hesabnzYokMuContainer, styles.hesapOluturFlexBox]}>
        <Text style={styles.hesabnzYokMu}>Hesabınız yok mu?</Text>
        <Text style={styles.kaytOl}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.kaytOl1}>Kayıt Ol !</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: "53.33%",
    height: "36.95%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  childLayout: {
    backgroundColor: "transparent",
    height: 300,
    width: 200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  rectanglePosition: {
    height: 56,
    width: 295,
    marginLeft: -147.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  hesapOluturFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  unsplashovgyojausq8Icon: {
    right: "-100%",
    left: "100%",
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  unsplashovgyojausq8Parent: {
    top: "13.05%",
    right: "100%",
    bottom: "50%",
    left: "-53.33%",
  },
  unsplashr21syyjdfgcIcon: {
    right: "0%",
    left: "0%",
  },
  unsplashr21syyjdfgcParent: {
    top: "14.29%",
    right: "-53.33%",
    bottom: "48.77%",
    left: "100%",
  },
  onboarding4Child: {
    top: 116,
    left: 454,
  },
  rectangle: {
    marginTop: -28,
    backgroundColor: Color.mediumvioletred_100,
    borderRadius: Border.br_mini,
    width: 295,
    marginLeft: -147.5,
  },
  hesapOlutur: {
    marginTop: -12,
    marginLeft: -57.5,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.whiteFFFFFF,
    left: "50%",
    top: "50%",
    textAlign: "center",
  },
  rectangleParent: {
    marginTop: 339,
  },
  slide: {
    top: 74,
    left: 31,
    width: 313,
    height: 500,
    position: "absolute",
  },
  hesabnzYokMu: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black000000,
  },
  text: {
    color: Color.gray_100,
  },
  kaytOl1: {
    color: Color.mediumvioletred_100,
  },
  kaytOl: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
  },
  hesabnzYokMuContainer: {
    top: 720,
    left: 80,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  onboarding4: {
    backgroundColor: Color.whiteFFFFFF,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding4;
