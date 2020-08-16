import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import ImageInputList from "./src/component/imageInputList/ImageInputList";

export default function App() {

  const [imageUris, setImageUris] = useState([]);

  // const requestPermission = async () => {
  //   const {granted} = await Permissions.askAsync(Permissions.CAMERA)
  //   if (!granted) {
  //     alert("Need Your Permission To Access Your Photos")
  //   }
  // }

  // useEffect(() => {
  //   requestPermission().then(r => console.log("granted"));
  // }, [])

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.cancelled) {
  //       setImageUri(result.uri)
  //     }
  //     // result.
  //   } catch (e) {
  //     console.log("Error Reading Message")
  //   }
  // }
  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }
  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }


  return (
    <Screen>
      {/*<ImageInput onChangeImage={uri => setImageUri(uri)} imageUri={imageUri}/>*/}
      {/*<Button title={"Click"} onPress={() => selectImage()}/>*/}
      {/*<Image source={{uri: imageUri}} style={{width: 200, height: 200}}/>*/}
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}/>
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
