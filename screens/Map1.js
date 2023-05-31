import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Map1 = () => {
  return (
    <SafeAreaView style={styles.map}>
      <Image
        style={[styles.mapsIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/maps.png")}
      />
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer.png")}
      />
      <View style={styles.mapChild} />
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={["#c60e8e", "#35bdf1"]}
          useAngle={true}
          angle={90}
        />
        <Text style={[styles.deitir, styles.deitirTypo]}>Değiştir</Text>
      </View>
      <View style={styles.stanbulBeiktaParent}>
        <Text style={[styles.stanbulBeikta, styles.deitirTypo]}>
          İstanbul / Beşiktaş
        </Text>
        <View
          style={[styles.lokasyon5KmUzaklktaParent, styles.mapsIconPosition]}
        >
          <Text style={[styles.lokasyon5Km, styles.lokasyon5KmTypo]}>
            Lokasyon (5 km uzaklıkta)
          </Text>
          <Image
            style={[styles.illustrationcardlocationIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/illustrationcardlocation.png")}
          />
        </View>
      </View>
      <Image
        style={styles.mapItem}
        resizeMode="cover"
        source={require("../assets/group-21.png")}
      />
      <Image
        style={[styles.mapInner, styles.mapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-47.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.mapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <Image
        style={[styles.mapChild1, styles.mapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-49.png")}
      />
      <Image
        style={[styles.mapChild2, styles.mapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-50.png")}
      />
      <View style={[styles.evremdekiKiilerWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.evremdekiKiiler, styles.lokasyon5KmTypo]}>
          Çevremdeki Kişiler
        </Text>
      </View>
      <View style={[styles.poplerMekanlarWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.evremdekiKiiler, styles.lokasyon5KmTypo]}>
          Popüler Mekanlar
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  deitirTypo: {
    textAlign: "left",
    color: Color.whiteFFFFFF,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  mapsIconPosition: {
    right: "0%",
    width: "100%",
  },
  lokasyon5KmTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.whiteFFFFFF,
  },
  mapChildLayout: {
    height: 53,
    width: 53,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    top: 684,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  mapsIcon: {
    bottom: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  statusBarIphoneXOrNewe: {
    height: "5.42%",
    bottom: "94.58%",
    display: "none",
    right: "0%",
    width: "100%",
  },
  mapChild: {
    height: "11.08%",
    width: "89.6%",
    top: "11.58%",
    right: "5.07%",
    bottom: "77.34%",
    left: "5.33%",
    borderRadius: 20,
    backgroundColor: "#23252f",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "transparent",
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  deitir: {
    top: "20.69%",
    left: "27.27%",
    fontSize: FontSize.size_xs,
  },
  rectangleParent: {
    height: "3.57%",
    width: "26.4%",
    top: "15.39%",
    right: "11.73%",
    bottom: "81.03%",
    left: "61.87%",
    position: "absolute",
  },
  stanbulBeikta: {
    top: "60%",
    fontSize: FontSize.size_base,
    left: "0%",
  },
  lokasyon5Km: {
    top: "25.81%",
    left: "22.22%",
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    position: "absolute",
  },
  illustrationcardlocationIcon: {
    width: "19.14%",
    right: "80.86%",
    bottom: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  lokasyon5KmUzaklktaParent: {
    height: "51.67%",
    bottom: "48.33%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  stanbulBeiktaParent: {
    height: "7.39%",
    width: "43.2%",
    top: "13.42%",
    right: "44.8%",
    bottom: "79.19%",
    left: "12%",
    position: "absolute",
  },
  mapItem: {
    top: 328,
    left: 60,
    width: 250,
    height: 250,
    position: "absolute",
  },
  mapInner: {
    top: 313,
    left: 83,
  },
  ellipseIcon: {
    top: 340,
    left: 266,
  },
  mapChild1: {
    top: 545,
    left: 242,
  },
  mapChild2: {
    top: 481,
    left: 39,
  },
  evremdekiKiiler: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  evremdekiKiilerWrapper: {
    left: 20,
    backgroundColor: "#c60e8e",
  },
  poplerMekanlarWrapper: {
    left: 216,
    backgroundColor: Color.lightgray,
  },
  map: {
    backgroundColor: Color.whiteFFFFFF,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Map1;
