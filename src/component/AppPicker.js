import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import colors from "../config/colors";

export default function AppPicker({icon = "email", placeholder, ...otherProps}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          {icon && <MaterialIcons name={icon} size={20} color={colors.mediumGrey} style={styles.icon}/>}
          <Text style={{flex: 1}}>{placeholder}</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color={colors.mediumGrey}/>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType={"slide "}/>
    </>
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
