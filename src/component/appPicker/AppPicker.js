import React, {useState} from 'react';
import {FlatList, Modal, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import colors from "../../config/colors";
import Screen from "../screen/Screen";
import PickerItem from "../pickerItem/PickerItem";

export default function AppPicker({icon = "email", items, placeholder, selectedItem, onSelectedItem}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialIcons name={icon} size={20} color={colors.mediumGrey} style={styles.icon}/>}
          <Text style={{flex: 1}}>{selectedItem ? selectedItem.label : placeholder}</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color={colors.mediumGrey}/>
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType={"slide"}>
        <Screen>
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => <PickerItem label={item.label} onPress={() => {
              onSelectedItem(item.label);
              setModalVisible(false);
            }}/>}
          />
        </Screen>
      </Modal>
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
