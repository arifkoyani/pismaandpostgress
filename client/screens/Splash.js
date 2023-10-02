import React from "react";
import { StyleSheet, View, Image, Pressable, TouchableOpacity } from "react-native";
// import { Color } from "../GlobalStyles";

const Splash = () => {

  const handleGetStarted = () => {
    navigation.navigate('Signin'); 
  };
  return (
    <Pressable style={[styles.splash, styles.iconLayout]} onClick={() => {}}>
      <View style={styles.splashChild} />
      <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          // source={require("../assets/icon-1-masked.png")}
        />
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          Get Started
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  splashChild: {
    top: 156,
    left: -62,
    width: 500,
    height: 500,
    display: "none",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  icon1Masked: {
    left: "30.13%",
    top: "37.68%",
    right: "30.13%",
    bottom: "37.56%",
    width: "39.73%",
    height: "24.75%",
    position: "absolute",
  },
  splash: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Splash;
