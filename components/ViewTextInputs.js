import * as React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ViewTextInputs = () => {
  return (
    <View style={styles.hogeldinizLtfenGeerliTParent}>
      <Text style={styles.hogeldinizLtfenContainer}>
        <Text style={styles.hogeldiniz}>{`Hoşgeldiniz !
`}</Text>
        <Text style={styles.ltfenGeerliTelefon}>
          Lütfen geçerli telefon numaranızı giriniz. Hesabınızı doğrulamak için
          size 4 haneli bir kod göndereceğiz.
        </Text>
      </Text>
      <Pressable style={styles.devamEtWrapper}>
        <Text style={styles.devamEt}>Devam Et</Text>
      </Pressable>
      <TextInput
        style={styles.registerButton}
        placeholder="(+1)"
        keyboardType="number-pad"
        placeholderTextColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hogeldiniz: {
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black000000,
  },
  ltfenGeerliTelefon: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.gray_600,
  },
  hogeldinizLtfenContainer: {
    width: "99.7%",
    top: "0%",
    left: "0%",
    letterSpacing: "-1%",
    textAlign: "left",
    position: "absolute",
  },
  devamEt: {
    top: 12,
    left: 124,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.whiteFFFFFF,
    textAlign: "center",
    position: "absolute",
  },
  devamEtWrapper: {
    height: "16.9%",
    width: "98.2%",
    top: "83.1%",
    right: "0.6%",
    bottom: "0%",
    left: "1.2%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.mediumvioletred_100,
    overflow: "hidden",
    position: "absolute",
  },
  registerButton: {
    height: "19.72%",
    width: "99.1%",
    top: "45.77%",
    right: "0%",
    bottom: "34.51%",
    left: "0.9%",
    position: "absolute",
  },
  hogeldinizLtfenGeerliTParent: {
    width: 333,
    height: 284,
    zIndex: 1,
    marginTop: 1,
  },
});

export default ViewTextInputs;
