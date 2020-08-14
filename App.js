import React from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import AppTextInput from "./src/component/appTextInput/AppTextInput";

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder={"username"} icon={"email"}/>
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
