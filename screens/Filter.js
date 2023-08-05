import React, { useState } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slider as RNESlider } from "@rneui/themed";
import ImageContainer from "../components/ImageContainer";
import AgeRangeView from "../components/AgeRangeView";
import InterestCard from "../components/InterestCard";
import LocationContainer from "../components/LocationContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Filter = () => {
  const [sliderValue, setSliderValue] = useState(10);

  return (
    <View style={styles.filter}>
      <Image
        style={[styles.navigationBarIcon, styles.barLayout]}
        resizeMode="cover"
        source={require("../assets/property-1default2.png")}
      />
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.uzaklkPosition]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer1.png")}
      />
      <Image
        style={styles.filterChild}
        resizeMode="cover"
        source={require("../assets/frame-347301.png")}
      />
      <View style={[styles.btnBack, styles.btnBackPosition]}>
        <View style={[styles.container, styles.containerLayout]} />
        <Image
          style={[styles.rightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.stanbulParent, styles.btnBackPosition]}>
        <Text style={styles.stanbul}>İstanbul</Text>
        <Text style={styles.kefet}>Keşfet</Text>
      </View>
      <Image
        style={styles.btnFilterIcon}
        resizeMode="cover"
        source={require("../assets/btn-filter.png")}
      />
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group141.png")}
      />
      <ImageContainer
        carImageUrl={{ uri: "mask-group20@3x.png" }}
        propDisplay="none"
        propRight="-23.73%"
        propLeft="-23.39%"
        propTop={-370}
      />
      <Image
        style={styles.paginationV1Icon}
        resizeMode="cover"
        source={require("../assets/pagination-v1.png")}
      />
      <View style={[styles.location, styles.locationLayout]}>
        <View style={[styles.container1, styles.locationLayout]} />
        <Text style={styles.km}>1 km</Text>
        <Image
          style={styles.localTwoIcon}
          resizeMode="cover"
          source={require("../assets/localtwo.png")}
        />
      </View>
      <View style={[styles.backdrop, styles.uzaklkPosition]} />
      <SafeAreaView style={[styles.containerParent, styles.containerPosition]}>
        <Image
          style={[styles.containerIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/container1.png")}
        />
        <AgeRangeView />
        <InterestCard />
        <Text style={[styles.temizle, styles.km1FlexBox]}>Temizle</Text>
        <Text style={[styles.filtre, styles.filtreTypo]}>Filtre</Text>
        <View style={[styles.distance, styles.sliderLayout]}>
          <Text style={[styles.km1, styles.km1FlexBox]}>15km</Text>
          <RNESlider
            style={[styles.slider, styles.sliderLayout]}
            minimumValue={5}
            maximumValue={150}
            step={1}
            value={sliderValue}
            onValueChange={setSliderValue}
            thumbStyle={styles.sliderts}
            thumbTintColor="#ff0000"
            minimumTrackTintColor="#3f3f3f"
            maximumTrackTintColor="#b3b3b3"
          />
          <Text style={[styles.uzaklk, styles.filtreTypo]}>Uzaklık</Text>
        </View>
        <Pressable style={[styles.uygulaWrapper, styles.containerLayout]}>
          <Text style={styles.uygula}>Uygula</Text>
        </Pressable>
        <View style={styles.inputLastName}>
          <LocationContainer />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderts: {
    height: 25,
    width: 25,
  },
  barLayout: {
    width: 375,
    display: "none",
    position: "absolute",
  },
  uzaklkPosition: {
    top: 0,
    left: 0,
  },
  btnBackPosition: {
    bottom: "86.33%",
    display: "none",
    position: "absolute",
  },
  containerLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  locationLayout: {
    height: 34,
    width: 61,
    position: "absolute",
  },
  containerPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  km1FlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  filtreTypo: {
    color: Color.black000000,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  sliderLayout: {
    width: 295,
    position: "absolute",
  },
  navigationBarIcon: {
    top: 713,
    height: 99,
    display: "none",
    left: 0,
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    display: "none",
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  filterChild: {
    top: 625,
    left: 37,
    width: 302,
    height: 68,
    display: "none",
    position: "absolute",
  },
  container: {
    borderStyle: "solid",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
  rightIcon: {
    height: "46.15%",
    width: "46.15%",
    top: "73.08%",
    right: "-19.23%",
    bottom: "-19.23%",
    left: "73.08%",
  },
  btnBack: {
    height: "6.4%",
    width: "13.87%",
    top: "7.27%",
    right: "77.33%",
    left: "8.8%",
  },
  stanbul: {
    top: "64.71%",
    left: "18.99%",
    textAlign: "center",
    color: Color.gray_600,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  kefet: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.gray_600,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  stanbulParent: {
    height: "6.28%",
    width: "21.07%",
    top: "7.39%",
    right: "39.47%",
    left: "39.47%",
  },
  btnFilterIcon: {
    top: 59,
    left: 290,
    width: 52,
    height: 52,
    display: "none",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 141,
    left: 72,
    width: 231,
    height: 450,
    opacity: 0.3,
    display: "none",
    position: "absolute",
  },
  paginationV1Icon: {
    left: 315,
    width: 20,
    height: 76,
    top: 323,
    display: "none",
    position: "absolute",
  },
  container1: {
    borderRadius: Border.br_6xs,
    opacity: 0.15,
    top: 0,
    left: 0,
    backgroundColor: Color.whiteFFFFFF,
  },
  km: {
    top: 8,
    left: 26,
    lineHeight: 18,
    textAlign: "left",
    color: Color.whiteFFFFFF,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  localTwoIcon: {
    top: 10,
    left: 10,
    width: 14,
    height: 14,
    position: "absolute",
  },
  location: {
    top: 197,
    left: 56,
    display: "none",
  },
  backdrop: {
    backgroundColor: Color.black000000,
    opacity: 0.5,
    display: "none",
    width: 375,
    position: "absolute",
    height: 812,
  },
  containerIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  temizle: {
    left: 294,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.mediumvioletred_100,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    top: 44,
  },
  filtre: {
    top: 38,
    left: 157,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    color: Color.black000000,
    textAlign: "center",
  },
  km1: {
    top: 3,
    left: 260,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.gray_500,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "right",
  },
  slider: {
    height: 40,
    top: 44,
    left: 0,
  },
  uzaklk: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  distance: {
    left: 40,
    height: 84,
    top: 323,
  },
  uygula: {
    top: 12,
    left: 135,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.whiteFFFFFF,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  uygulaWrapper: {
    height: "7.43%",
    width: "87.2%",
    top: "87.93%",
    right: "7.47%",
    bottom: "4.64%",
    left: "5.33%",
    backgroundColor: Color.mediumvioletred_100,
    overflow: "hidden",
  },
  inputLastName: {
    height: "10.37%",
    width: "78.67%",
    top: "36.53%",
    right: "10.67%",
    bottom: "53.1%",
    left: "10.67%",
    position: "absolute",
  },
  containerParent: {
    height: "79.56%",
    top: "20.44%",
    position: "absolute",
  },
  filter: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.whiteFFFFFF,
  },
});

export default Filter;
