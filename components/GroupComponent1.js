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

const GroupComponent1 = memo(({ style }) => {
  return (
    <View style={[styles.elemeParent, style]}>
      <Text style={[styles.eleme, styles.elemePosition]}>Eşleşme</Text>
      <Text style={[styles.siziBenzerIlgi, styles.elemePosition]}>
        Sizi, benzer ilgi alanlarına sahip çok sayıda insanla eşleştiriyoruz.
      </Text>
      <Image
        style={styles.groupChildPosition}
        resizeMode="cover"
        source={require("../assets/unsplashr21syyjdfgc1.png")}
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
  elemePosition: {
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
  eleme: {
    marginTop: 155,
    marginLeft: -49.5,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    lineHeight: 38,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.mediumvioletred_100,
  },
  siziBenzerIlgi: {
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
  elemeParent: {
    height: 500,
    width: 313,
  },
});

export default GroupComponent1;
