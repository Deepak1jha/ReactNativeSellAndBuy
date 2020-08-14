import React from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import AppPicker from "./src/component/AppPicker";

export default function App() {
  return (
    <Screen>
      <AppPicker placeholder={"Category"} icon={"apps"}/>
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
