import React from "react";
import {Image, StyleSheet, View} from 'react-native';
import colors from "../../config/colors";
import {AntDesign} from '@expo/vector-icons';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <AntDesign name="closecircle" size={24} color="white"/>
      </View>
      <View style={styles.deleteIcon}>
        <AntDesign name="delete" size={24} color="white"/>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../../assets/chair.jpg")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  closeIcon: {
    width: 50,
    height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 35,
    left: 10
    // alignItems: "center"
  },
  deleteIcon: {
    width: 50,
    height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 35,
    right: 10
    // alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  }
})
