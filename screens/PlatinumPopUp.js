import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PlatinumPopUp = () => {
  return (
    <View style={styles.platinumPopUp}>
      <Image
        style={[styles.navigationBarIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1variant21.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/backdrop.png")}
      />
      <View
        style={[styles.zoneIkonTextYatayBeyaz1Parent, styles.groupItemLayout]}
      >
        <ImageBackground
          style={[styles.zoneIkonTextYatayBeyaz1, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/zoneikontextyataybeyaz1.png")}
        />
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-176848.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4255.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.frameChild2, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Image
            style={[styles.frameChild2, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <Image
          style={[styles.groupIcon, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-176817.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-176818.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-176820.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-176821.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-176822.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-176823.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-176824.png")}
        />
        <Image
          style={[styles.groupChild7, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-176819.png")}
        />
        <Text style={[styles.zelFrsatlarKarma, styles.satnAlTypo]}>
          Özel Fırsatları Kaçırma
        </Text>
      </View>
      <Pressable style={[styles.satnAlWrapper, styles.groupParentPosition]}>
        <Text style={[styles.satnAl, styles.satnAlTypo]}>Satın Al</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 375,
    position: "absolute",
  },
  textPosition: {
    top: 0,
    left: 0,
  },
  groupItemLayout: {
    width: 248,
    position: "absolute",
  },
  rectanglePosition: {
    opacity: 0.9,
    top: 19,
    height: 128,
    width: 102,
    position: "absolute",
  },
  frameChildBg: {
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_mini,
    left: 0,
  },
  framePosition: {
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    left: 1,
    top: 1,
    position: "absolute",
    backgroundColor: Color.whiteFFFFFF,
  },
  enPoplerTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.black000000,
  },
  groupLayout1: {
    height: 30,
    position: "absolute",
  },
  textTypo3: {
    color: Color.whiteFFFFFF,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  ayTypo: {
    top: 13,
    color: Color.whiteFFFFFF,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  ay1Typo: {
    left: 30,
    color: Color.whiteFFFFFF,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    color: Color.whiteFFFFFF,
  },
  ndrmPosition: {
    left: 26,
    textAlign: "left",
    position: "absolute",
  },
  ndrmTypo: {
    color: Color.firebrick,
    fontFamily: FontFamily.poppinsExtrabold,
    fontWeight: "800",
  },
  frameChildLayout: {
    marginLeft: 10,
    height: 7,
    width: 7,
  },
  groupLayout: {
    height: 154,
    width: 123,
    top: 0,
    position: "absolute",
  },
  ay4Typo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  groupParentPosition: {
    left: "5.33%",
    position: "absolute",
  },
  groupChildLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "2.71%",
    height: "6.12%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: "12.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "2.71%",
    position: "absolute",
    overflow: "hidden",
  },
  satnAlTypo: {
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  navigationBarIcon: {
    top: 713,
    height: 99,
    display: "none",
    left: 0,
  },
  backdropIcon: {
    opacity: 0.7,
    width: 375,
    position: "absolute",
    height: 812,
    top: 0,
  },
  zoneIkonTextYatayBeyaz1: {
    width: 115,
    height: 37,
    position: "absolute",
  },
  groupChild: {
    top: 20,
    left: 115,
    width: 74,
    height: 23,
    position: "absolute",
  },
  groupItem: {
    top: 63,
    height: 2,
    left: 0,
  },
  zoneIkonTextYatayBeyaz1Parent: {
    top: 50,
    height: 65,
    left: 20,
  },
  ellipseIcon: {
    opacity: 0.5,
    height: 7,
    width: 7,
  },
  frameChild2: {
    opacity: 0.5,
  },
  ellipseParent: {
    top: 174,
    left: 139,
    flexDirection: "row",
    position: "absolute",
  },
  frameParent: {
    top: 495,
    width: 335,
    height: 181,
    left: 20,
    position: "absolute",
  },
  groupIcon: {
    width: "34.94%",
    top: "14.97%",
    right: "62.35%",
    bottom: "78.91%",
  },
  groupChild1: {
    width: "32.83%",
    top: "24.49%",
    right: "64.46%",
    bottom: "69.39%",
  },
  groupChild2: {
    width: "61.14%",
    top: "49.66%",
    right: "36.14%",
    bottom: "44.22%",
  },
  groupChild3: {
    width: "93.98%",
    top: "59.18%",
    right: "3.31%",
    bottom: "34.69%",
  },
  groupChild4: {
    width: "76.51%",
    top: "68.71%",
    right: "20.78%",
    bottom: "25.17%",
  },
  groupChild5: {
    width: "90.36%",
    top: "78.23%",
    right: "6.93%",
    bottom: "9.52%",
  },
  groupChild6: {
    width: "97.29%",
    top: "93.88%",
    right: "0%",
    bottom: "0%",
  },
  groupChild7: {
    width: "85.24%",
    top: "34.01%",
    right: "12.05%",
    bottom: "53.74%",
  },
  zelFrsatlarKarma: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    color: Color.whiteFFFFFF,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  groupParent: {
    height: "36.21%",
    width: "88.53%",
    top: "16.63%",
    right: "6.13%",
    bottom: "47.17%",
  },
  satnAl: {
    top: 12,
    left: 132,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    color: Color.black000000,
  },
  satnAlWrapper: {
    height: "5.91%",
    width: "87.2%",
    top: "87.93%",
    right: "7.47%",
    bottom: "6.16%",
    borderRadius: Border.br_mini,
    left: "5.33%",
    overflow: "hidden",
    backgroundColor: Color.whiteFFFFFF,
  },
  platinumPopUp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.whiteFFFFFF,
    height: 812,
  },
});

export default PlatinumPopUp;
