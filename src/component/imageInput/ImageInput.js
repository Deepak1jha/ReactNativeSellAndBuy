import React from 'react';
import {Image, StyleSheet, Alert,TouchableWithoutFeedback, View} from 'react-native';
import colors from "../../config/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import {MediaTypeOptions} from "expo-image-picker";

export default function ImageInput({imageUri, onChangeImage}) {

  const handlePress = () => {
    if (!imageUri) {
      selectImage().then(r => console.log("Select image"));
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image ?", [
        {text: "Yes", onPress: () => onChangeImage(null)},
        {text: "No"}
      ])
    }
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (e) {
      console.log("Error Reading Message")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    height: 100,
    borderRadius: 15,
    justifyContent: "center",
    width: 100,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
})
