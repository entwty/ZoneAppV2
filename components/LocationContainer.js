import * as React from "react";
import { Pressable, StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LocationContainer = () => {
  return (
    <View style={[styles.inputtextnone, styles.containerPosition1]}>
      <Pressable style={[styles.container, styles.containerPosition]} />
      <Pressable style={styles.iconbackwhite}>
        <View style={[styles.inputtextnone, styles.containerPosition1]}>
          <View style={[styles.inputtextnone, styles.containerPosition1]} />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.whiteLine, styles.containerPosition]} />
      <Text style={[styles.lokasyon, styles.lokasyonTypo]}>Lokasyon</Text>
      <View style={[styles.stanbulBeiktaBalmumcuParent, styles.iconsPinLayout]}>
        <Text style={[styles.stanbulBeiktaBalmumcu, styles.lokasyonTypo]}>
          İstanbul, Beşiktaş, Balmumcu
        </Text>
        <Image
          style={[styles.iconsPin, styles.iconsPinLayout]}
          resizeMode="cover"
          source={require("../assets/icons--pin.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPosition1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  containerPosition: {
    backgroundColor: Color.whiteFFFFFF,
    top: "13.43%",
    position: "absolute",
  },
  lokasyonTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconsPinLayout: {
    height: 20,
    position: "absolute",
  },
  container: {
    height: "86.57%",
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  inputtextnone: {
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  groupIcon: {
    height: "41.67%",
    width: "25%",
    top: "-70.83%",
    right: "137.5%",
    bottom: "129.17%",
    left: "-62.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconbackwhite: {
    height: "35.82%",
    width: "8.14%",
    top: "74.63%",
    right: "-1.36%",
    bottom: "-10.45%",
    left: "93.22%",
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  whiteLine: {
    height: "1.49%",
    width: "21.69%",
    right: "71.53%",
    bottom: "85.07%",
    left: "6.78%",
  },
  lokasyon: {
    marginTop: -33.5,
    top: "50%",
    left: 28,
    lineHeight: 18,
    color: Color.gray_300,
  },
  stanbulBeiktaBalmumcu: {
    top: 2,
    left: 25,
    lineHeight: 15,
    color: Color.darkslategray,
  },
  iconsPin: {
    top: 0,
    left: 0,
    borderRadius: Border.br_8xs,
    width: 20,
    overflow: "hidden",
  },
  stanbulBeiktaBalmumcuParent: {
    top: 28,
    left: 15,
    width: 200,
  },
});

export default LocationContainer;
