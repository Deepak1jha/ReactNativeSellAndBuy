import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from "../../config/colors";

export default function AppButton({title, onPress, color = "primary"}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: colors[color]}]}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: `center`,
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
})
