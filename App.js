import React from 'react';
import {StyleSheet} from 'react-native';
import WelcomeScreen from "./src/screens/welcome/WelcomeScreen";

export default function App() {
  return (
    <WelcomeScreen/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  }
})
