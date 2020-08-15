import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import MessagesScreen from "./src/component/messages/MessagesScreen";
import * as Permissions from 'expo-permissions';

export default function App() {

  const requestPermission = async () => {
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if (!granted) {
      alert("Need Your Permission To Access Your Photos")
    }
  }

  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <Screen>
      <MessagesScreen/>
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
