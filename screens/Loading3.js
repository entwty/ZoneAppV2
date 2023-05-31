import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Loading3 = () => {
  const [groupActivityIndicatorAnimating, setGroupActivityIndicatorAnimating] =
    useState(true);

  return (
    <LinearGradient
      style={styles.loading3}
      locations={[0, 1]}
      colors={["#cc078a", "#32c0f2"]}
      useAngle={true}
      angle={90}
    >
      <View style={styles.unsplash1qiriqn14a} />
      <ImageBackground
        style={styles.zoneIkonBeyaz11}
        resizeMode="cover"
        source={require("../assets/zoneikonbeyaz111.png")}
      />
      <ActivityIndicator
        style={styles.loading3Child}
        size="3x"
        color="#939393"
        animating={groupActivityIndicatorAnimating}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  unsplash1qiriqn14a: {
    width: 1219,
    display: "none",
    height: 812,
  },
  zoneIkonBeyaz11: {
    width: 130,
    height: 154,
    marginTop: 17,
  },
  loading3Child: {
    width: 62,
    height: 62,
    alignSelf: "center",
    marginTop: 17,
  },
  loading3: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: 812,
  },
});

export default Loading3;
