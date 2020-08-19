import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppButton from "../../component/button/AppButton";

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../../../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../../assets/logo-red.png")}/>
        <Text style={styles.tagline}> Dont keep, what you dont need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} onPress={() => navigation.navigate("LogIn")}/>
        <AppButton title={"Register"} color={"secondary"} onPress={() => navigation.navigate("Register")}/>
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
