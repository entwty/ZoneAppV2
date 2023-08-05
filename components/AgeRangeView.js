import React, { useState, memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slider as RNESlider } from "@rneui/themed";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AgeRangeView = memo(() => {
  const [sliderValue, setSliderValue] = useState(10);

  return (
    <View style={styles.age}>
      <RNESlider
        style={[styles.slider, styles.sliderPosition]}
        maximumValue={100}
        step={1}
        minimumValue
        value={sliderValue}
        onValueChange={setSliderValue}
        thumbStyle={styles.sliderts}
        thumbTintColor="#ff0000"
        minimumTrackTintColor="#3f3f3f"
        maximumTrackTintColor="#b3b3b3"
      />
      <Text style={styles.text}>20-40</Text>
      <Text style={[styles.yaAral, styles.sliderPosition]}>Yaş Aralığı</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  sliderts: {
    height: 25,
    width: 25,
  },
  sliderPosition: {
    left: 0,
    position: "absolute",
  },
  slider: {
    top: 44,
    height: 40,
    width: 295,
  },
  text: {
    top: 3,
    left: 252,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray_500,
    textAlign: "right",
    position: "absolute",
  },
  yaAral: {
    top: 0,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black000000,
    textAlign: "left",
  },
  age: {
    top: 427,
    left: 40,
    height: 84,
    width: 295,
    position: "absolute",
  },
});

export default AgeRangeView;
