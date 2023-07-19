import React, { useMemo, memo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileContainer = memo(
  ({
    profileImageUrl,
    profileName,
    profileOccupation,
    propTop,
    propLeft,
    propWidth,
    propHeight,
  }) => {
    const groupViewStyle = useMemo(() => {
      return {
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propTop, propLeft]);

    const unsplashplsF6obTgmsIconStyle = useMemo(() => {
      return {
        ...getStyleValue("width", propWidth),
        ...getStyleValue("height", propHeight),
      };
    }, [propWidth, propHeight]);

    return (
      <View
        style={[
          styles.unsplashplsf6obtgmsParent,
          styles.groupChildLayout,
          groupViewStyle,
        ]}
      >
        <Image
          style={[
            styles.unsplashplsf6obtgmsIcon,
            styles.groupChildPosition,
            unsplashplsF6obTgmsIconStyle,
          ]}
          resizeMode="cover"
          source={profileImageUrl}
        />
        <LinearGradient
          style={[styles.groupChild, styles.groupChildPosition]}
          locations={[0.61, 0.72, 1]}
          colors={["rgba(204, 7, 138, 0)", "rgba(204, 7, 138, 0.4)", "#cc078a"]}
          useAngle={true}
          angle={180}
        />
        <View style={styles.bra30Parent}>
          <Text style={[styles.bra30, styles.bra30FlexBox]}>{profileName}</Text>
          <Text style={[styles.model, styles.bra30FlexBox]}>
            {profileOccupation}
          </Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 180,
    width: 160,
  },
  groupChildPosition: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bra30FlexBox: {
    textAlign: "center",
    color: Color.whiteFFFFFF,
    lineHeight: 24,
  },
  unsplashplsf6obtgmsIcon: {
    width: 187,
    height: 284,
  },
  groupChild: {
    backgroundColor: "transparent",
    height: 180,
    width: 160,
  },
  bra30: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
  },
  model: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.openSansRegular,
    marginTop: -9,
  },
  bra30Parent: {
    top: 132,
    left: 25,
    position: "absolute",
  },
  unsplashplsf6obtgmsParent: {
    left: 176,
    top: 0,
    width: 160,
    position: "absolute",
  },
});

export default ProfileContainer;
