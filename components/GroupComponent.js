import React, { memo } from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const GroupComponent = memo(({ style }) => {
  return (
    <View style={[styles.goldPaketParent, style]}>
      <Text style={[styles.goldPaket, styles.goldPaketPosition]}>
        Gold Paket
      </Text>
      <Text style={[styles.bugnKaydolunVe, styles.goldPaketPosition]}>
        Bugün kaydolun ve bizden birinci aydaki premium avantajların tadını
        çıkarın.
      </Text>
      <Image
        style={styles.groupChildPosition}
        resizeMode="cover"
        source={require("../assets/unsplashovgyojausq81.png")}
      />
      <LinearGradient
        style={[styles.groupChild, styles.groupChildPosition]}
        locations={[0, 1]}
        colors={["rgba(204, 7, 138, 0.1)", "rgba(53, 188, 240, 0.1)"]}
        useAngle={true}
        angle={180}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  goldPaketPosition: {
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    height: 360,
    width: 235,
    borderRadius: Border.br_mini,
    marginLeft: -117.5,
    marginTop: -250,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  goldPaket: {
    marginTop: 155,
    marginLeft: -66.5,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    lineHeight: 38,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.mediumvioletred_100,
  },
  bugnKaydolunVe: {
    marginTop: 208,
    marginLeft: -156.5,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.openSansRegular,
    color: Color.black000000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 313,
  },
  groupChild: {
    backgroundColor: "transparent",
  },
  goldPaketParent: {
    height: 500,
    width: 313,
  },
});

export default GroupComponent;
