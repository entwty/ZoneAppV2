import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import MusicContainer from "./MusicContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const InterestView = memo(() => {
  return (
    <View style={styles.parent}>
      <MusicContainer
        musicImageUrl={require("../assets/music.png")}
        mediaType="Music"
        propTop={89}
        propLeft={0}
      />
      <MusicContainer
        musicImageUrl={require("../assets/camera1.png")}
        mediaType="Fotoğraf"
        propTop={34}
      />
      <MusicContainer
        musicImageUrl={require("../assets/voice.png")}
        mediaType="Karaoke"
        propTop={34}
        propLeft={152}
      />
      <Text style={styles.lgiAlanlar}>İlgi Alanları</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  lgiAlanlar: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.black000000,
    textAlign: "left",
    position: "absolute",
  },
  parent: {
    top: 751,
    left: 20,
    width: 292,
    height: 134,
    position: "absolute",
  },
});

export default InterestView;
