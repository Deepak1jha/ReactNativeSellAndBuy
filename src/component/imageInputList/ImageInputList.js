import React from 'react';
import {StyleSheet,ScrollView, View} from 'react-native';
import ImageInput from "../imageInput/ImageInput";

export default function ImageInputList({imageUris = [], onRemoveImage, onAddImage}) {

  return (
    <ScrollView horizontal>
    <View style={styles.container}>
      {imageUris.map(uri =>
        <View key={uri} style={styles.image}>
          <ImageInput
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        </View>
      )}
      <ImageInput
        onChangeImage={uri => onAddImage(uri)}/>
    </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1
  },
  image: {
    marginRight: 10
  }
})
