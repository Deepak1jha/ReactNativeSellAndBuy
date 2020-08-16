import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import ImageInput from "./src/component/imageInput/ImageInput";

export default function App() {

  const [imageUri, setImageUri] = useState("");

  const requestPermission = async () => {
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if (!granted) {
      alert("Need Your Permission To Access Your Photos")
    }
  }

  useEffect(() => {
    requestPermission().then(r => console.log("granted"));
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri)
      }
      // result.
    } catch (e) {
      console.log("Error Reading Message")
    }
  }

  return (
    <Screen>
      <ImageInput onChangeImage={uri => setImageUri(uri)} imageUri={imageUri}/>
      {/*<Button title={"Click"} onPress={() => selectImage()}/>*/}
      {/*<Image source={{uri: imageUri}} style={{width: 200, height: 200}}/>*/}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
