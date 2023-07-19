import React, { useMemo, memo } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordResetView = memo(
  ({
    passwordResetImageUrl,
    passwordResetText,
    passwordResetStatusText,
    returnToPasswordResetScre,
    propBorderRadius,
    propLeft,
  }) => {
    const framePressableStyle = useMemo(() => {
      return {
        ...getStyleValue("borderRadius", propBorderRadius),
      };
    }, [propBorderRadius]);

    const ifreYenilemeEkrannaStyle = useMemo(() => {
      return {
        ...getStyleValue("left", propLeft),
      };
    }, [propLeft]);

    return (
      <View style={styles.successmarkParent}>
        <Image
          style={[styles.successmarkIcon, styles.successmarkIconPosition]}
          resizeMode="cover"
          source={passwordResetImageUrl}
        />
        <Text
          style={[
            styles.ifrenizDeitirilemediContainer,
            styles.ifreYenilemeEkrannaFlexBox,
          ]}
        >
          <Text style={styles.ifrenizDeitirilemedi}>{`Şifreniz Değiştirilemedi !
`}</Text>
          <Text style={styles.ltfenTekrarDeneyiniz}>
            Lütfen tekrar deneyiniz
          </Text>
        </Text>
        <Pressable
          style={[
            styles.ifreYenilemeEkrannaDnWrapper,
            styles.successmarkIconPosition,
            framePressableStyle,
          ]}
        >
          <Text
            style={[
              styles.ifreYenilemeEkranna,
              styles.ifreYenilemeEkrannaFlexBox,
              ifreYenilemeEkrannaStyle,
            ]}
          >
            {returnToPasswordResetScre}
          </Text>
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  successmarkIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  ifreYenilemeEkrannaFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  successmarkIcon: {
    height: "34.25%",
    width: "30.12%",
    top: "0%",
    right: "34.94%",
    bottom: "65.75%",
    left: "34.94%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  ifrenizDeitirilemedi: {
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black000000,
  },
  ltfenTekrarDeneyiniz: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.gray_600,
  },
  ifrenizDeitirilemediContainer: {
    width: "100%",
    top: "51.37%",
    left: "0%",
    letterSpacing: "-1%",
  },
  ifreYenilemeEkranna: {
    top: 12,
    left: 47,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
  },
  ifreYenilemeEkrannaDnWrapper: {
    height: "16.44%",
    width: "98.49%",
    top: "83.56%",
    right: "0.9%",
    bottom: "0%",
    left: "0.6%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.mediumvioletred_100,
  },
  successmarkParent: {
    width: 332,
    height: 292,
  },
});

export default PasswordResetView;
