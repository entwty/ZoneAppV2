import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const SenaAvciContainer = () => {
  return (
    <View style={styles.containerParent}>
      <View style={[styles.container, styles.dividerLayout]}>
        <View style={[styles.divider, styles.dividerPosition]} />
      </View>
      <Text style={[styles.time, styles.timeLayout]}>21 saat önce</Text>
      <Text style={[styles.message, styles.nameTypo]}>Görüşmek üzre :)</Text>
      <Text style={[styles.name, styles.nameTypo]}>Sena Avcı</Text>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group11.png")}
      />
      <View style={[styles.messageIndicator, styles.containerIconLayout]}>
        <Image
          style={[styles.containerIcon, styles.containerIconLayout]}
          resizeMode="cover"
          source={require("../assets/container.png")}
        />
        <Text style={[styles.name1, styles.timeLayout]}>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dividerLayout: {
    height: 1,
    width: 264,
    position: "absolute",
  },
  dividerPosition: {
    left: 0,
    top: 0,
  },
  timeLayout: {
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.black000000,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    left: 72,
    position: "absolute",
  },
  containerIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  divider: {
    backgroundColor: Color.whitesmoke_200,
    height: 1,
    width: 264,
    position: "absolute",
  },
  container: {
    top: 61,
    left: 72,
    width: 264,
  },
  time: {
    top: 11,
    left: 261,
    color: Color.silver,
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
  },
  message: {
    top: 31,
    width: 189,
    fontFamily: FontFamily.poppinsRegular,
  },
  name: {
    top: 9,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 159,
  },
  maskGroupIcon: {
    top: 4,
    left: 4,
    width: 48,
    height: 48,
    position: "absolute",
  },
  containerIcon: {
    left: 0,
    top: 0,
  },
  name1: {
    top: 1,
    left: 8,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
    textAlign: "center",
  },
  messageIndicator: {
    top: 32,
    left: 316,
  },
  containerParent: {
    width: 336,
    height: 62,
    marginTop: 10,
  },
});

export default SenaAvciContainer;
