import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import colors from "../../config/colors";

export default function AppTextInput({icon = "email", ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialIcons name={icon} size={20} color={colors.mediumGrey} style={styles.icon}/>}
      <TextInput style={styles.textInput} {...otherProps}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: colors.dark,
    width: "100%"
  }
})
