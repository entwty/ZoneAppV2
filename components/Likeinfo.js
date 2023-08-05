import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Likeinfo = memo(() => {
  return (
    <View style={styles.nameParent}>
      <Text style={[styles.name, styles.namePosition]}>
        Ekin profilinizi beğendi!
      </Text>
      <Text style={[styles.time, styles.namePosition]}>10 dakika önce</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  namePosition: {
    left: 0,
    position: "absolute",
  },
  name: {
    top: 0,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black000000,
    textAlign: "left",
  },
  time: {
    top: 26,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.silver,
    textAlign: "right",
  },
  nameParent: {
    top: 202,
    left: 102,
    width: 164,
    height: 44,
    position: "absolute",
  },
});

export default Likeinfo;
