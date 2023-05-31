import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MusicContainer = ({ musicImageUrl, mediaType, propTop, propLeft }) => {
  const viewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.view, styles.viewLayout, viewStyle]}>
      <View style={[styles.container, styles.viewLayout]} />
      <Image
        style={styles.musicIcon}
        resizeMode="cover"
        source={musicImageUrl}
      />
      <Text style={styles.music}>{mediaType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 45,
    width: 140,
    left: 0,
    position: "absolute",
  },
  container: {
    top: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.whiteFFFFFF,
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
  },
  musicIcon: {
    top: 13,
    left: 14,
    width: 19,
    height: 19,
    position: "absolute",
  },
  music: {
    top: 12,
    left: 41,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black000000,
    textAlign: "left",
    width: 83,
    position: "absolute",
  },
  view: {
    top: 89,
  },
});

export default MusicContainer;
