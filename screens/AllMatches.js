import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
} from "react-native";
import ViewButtons from "../components/ViewButtons";
import ProfileContainer from "../components/ProfileContainer";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AllMatches = () => {
  return (
    <View style={[styles.allMatches, styles.allMatchesLayout]}>
      <Image
        style={[styles.statusBarIphoneXOrNewe, styles.allMatchesLayout]}
        resizeMode="cover"
        source={require("../assets/status-bar--iphone-x-or-newer4.png")}
      />
      <ViewButtons />
      <ScrollView style={styles.groupParent}>
        <View
          style={[styles.unsplashprxsooayqggParent, styles.groupChildLayout1]}
        >
          <ImageBackground
            style={[styles.unsplashprxsooayqggIcon, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/unsplashprxsooayqgg.png")}
          />
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-4234.png")}
          />
          <View style={styles.canan22Parent}>
            <Text style={[styles.canan22, styles.canan22FlexBox]}>
              Canan, 22
            </Text>
            <Text style={[styles.fotoraf, styles.canan22FlexBox]}>
              Fotoğrafçı
            </Text>
          </View>
        </View>
        <ProfileContainer
          profileImageUrl={require("../assets/unsplashplsf6obtgms.png")}
          profileName="Büşra, 30"
          profileOccupation="Model"
          propTop={0}
          propLeft={176}
          propWidth={187}
          propHeight={284}
        />
        <ProfileContainer
          profileImageUrl={require("../assets/unsplash0zx1bdv5bny.png")}
          profileName="Ebru, 27"
          profileOccupation="Gazeteci"
          propTop={196}
          propLeft={0}
          propWidth={212}
          propHeight={318}
        />
        <ProfileContainer
          profileImageUrl={require("../assets/unsplashrfoisvdkm4u.png")}
          profileName="Berna, 25"
          profileOccupation="Öğrenci"
          propTop={195}
          propWidth={207}
          propHeight={310}
        />
        <ProfileContainer
          profileImageUrl={require("../assets/unsplash4nulmjuyfo.png")}
          profileName="Sena, 20"
          profileOccupation="Model"
          propTop={390}
          propLeft={0}
          propWidth={366}
          propHeight={245}
        />
        <ProfileContainer
          profileImageUrl={require("../assets/unsplashjfag-ixcrsm.png")}
          profileName="Ekin, 35"
          profileOccupation="UI Designer"
          propTop={390}
          propWidth={180}
          propHeight={223}
        />
      </ScrollView>
      <Image
        style={styles.navigationBarIcon}
        resizeMode="cover"
        source={require("../assets/property-1default1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  allMatchesLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupChildLayout1: {
    height: 180,
    top: 0,
  },
  groupChildLayout: {
    borderRadius: Border.br_mini,
    width: 160,
    left: 0,
    position: "absolute",
  },
  canan22FlexBox: {
    textAlign: "center",
    color: Color.whiteFFFFFF,
    lineHeight: 24,
  },
  statusBarIphoneXOrNewe: {
    height: "5.42%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
  },
  unsplashprxsooayqggIcon: {
    top: -51,
    height: 239,
  },
  groupChild: {
    height: 180,
    top: 0,
    borderRadius: Border.br_mini,
  },
  canan22: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
  },
  fotoraf: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.openSansRegular,
    marginTop: -9,
  },
  canan22Parent: {
    top: 132,
    left: 25,
    position: "absolute",
  },
  unsplashprxsooayqggParent: {
    width: 160,
    height: 180,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    top: 141,
    left: 20,
    width: 336,
    maxWidth: 336,
    position: "absolute",
    flex: 1,
  },
  navigationBarIcon: {
    top: 707,
    width: 375,
    height: 105,
    left: 0,
    position: "absolute",
  },
  allMatches: {
    backgroundColor: Color.whiteFFFFFF,
    height: 812,
    flex: 1,
  },
});

export default AllMatches;
