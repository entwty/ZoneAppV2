import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SpecialOffersView = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-311.png")}
        />
        <Text style={[styles.snrszBeeni, styles.snrszBeeniPosition]}>
          Sınırsız beğeni
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-311.png")}
        />
        <Text
          style={[styles.snrszBeeni, styles.snrszBeeniPosition]}
        >{`Ayda 1 adet superzone hakkı 10 dakika 10 km’ye
kadar eşleştirme`}</Text>
      </View>
      <Text style={[styles.zelFrsatlarKarma, styles.snrszBeeniPosition]}>
        Özel Fırsatları Kaçırma
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: "3.12%",
    position: "absolute",
  },
  groupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  snrszBeeniPosition: {
    textAlign: "left",
    color: Color.whiteFFFFFF,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: "51.05%",
    width: "10.43%",
    top: "22.22%",
    right: "90.43%",
    bottom: "26.72%",
    left: "-0.87%",
  },
  snrszBeeni: {
    left: 25,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  groupContainer: {
    height: "16.67%",
    width: "35.83%",
    top: "40.74%",
    right: "61.06%",
    bottom: "42.59%",
  },
  groupItem: {
    height: "25.53%",
    width: "3.86%",
    top: "11.11%",
    right: "96.46%",
    bottom: "63.36%",
    left: "-0.32%",
  },
  groupView: {
    height: "33.33%",
    width: "96.88%",
    top: "66.67%",
    right: "0%",
    bottom: "0%",
  },
  zelFrsatlarKarma: {
    left: 0,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
  },
  groupParent: {
    height: "13.3%",
    width: "85.6%",
    top: "16.13%",
    right: "9.07%",
    bottom: "70.57%",
    left: "5.33%",
    position: "absolute",
  },
});

export default SpecialOffersView;
