import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ImageContainer = ({
  carImageUrl,
  propDisplay,
  propRight,
  propLeft,
  propTop,
}) => {
  const maskGroupStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
    };
  }, [propDisplay]);

  const photoIconStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  const maskGroupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.maskGroup, maskGroupStyle]}>
      <Image
        style={[styles.photoIcon, photoIconStyle]}
        resizeMode="cover"
        source={require("../assets/photo1.png")}
      />
      <View style={[styles.maskGroup1, styles.maskGroupPosition]}>
        <Image
          style={[
            styles.maskGroupIcon,
            styles.maskGroupPosition,
            maskGroupIconStyle,
          ]}
          resizeMode="cover"
          source={carImageUrl}
        />
        <Text style={[styles.almilaAkgz23, styles.almilaAkgz23Position]}>
          Almila Açıkgöz, 23
        </Text>
        <Text style={[styles.profesyonelModel, styles.almilaAkgz23Position]}>
          Profesyonel Model
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupPosition: {
    left: 0,
    width: 295,
    position: "absolute",
  },
  almilaAkgz23Position: {
    width: 263,
    textAlign: "left",
    color: Color.whiteFFFFFF,
    left: 16,
    position: "absolute",
  },
  photoIcon: {
    height: "107.11%",
    width: "147.12%",
    top: "0%",
    right: "-47.12%",
    bottom: "-7.11%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 0,
    height: 450,
  },
  almilaAkgz23: {
    top: 11,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  profesyonelModel: {
    top: 47,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
  },
  maskGroup1: {
    top: 370,
    height: 80,
  },
  maskGroup: {
    top: 157,
    left: 40,
    height: 450,
    width: 295,
    position: "absolute",
  },
});

export default ImageContainer;
