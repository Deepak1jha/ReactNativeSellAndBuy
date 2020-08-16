import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from "../../config/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ListingRoundButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" size={40} color={colors.white}/>
      </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 30,
    borderColor: colors.white,
    borderWidth: 8,
    alignItems: "center",
    justifyContent: "center"
  }
})
