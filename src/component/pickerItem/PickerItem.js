import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from "../../config/colors";

export default function PickerItem({label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  text:{
    padding:20
  }
})
