import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppButton from "../../component/button/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../../../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../../assets/logo-red.png")}/>
        <Text style={styles.tagline}> Dont keep, what you dont need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"}/>
        <AppButton title={"Register"} color={"secondary"}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonsContainer: {
    padding: 20,
    width: "100%"
  },
  logoContainer: {
    position: `absolute`,
    top: 70,
    alignItems: "center"
  },
  tagline: {
    fontSize: 22,
    fontWeight: "600",
    padding: 20
  },
  logo: {
    width: 100,
    height: 100
  },
})
