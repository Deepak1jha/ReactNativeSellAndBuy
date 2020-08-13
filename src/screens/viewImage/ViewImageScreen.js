import React from "react";
import {Image, StyleSheet, View} from 'react-native';

export default function ViewImageScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../../../assets/chair.jpg")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%"
  }
})
