import React from 'react';
import {StyleSheet} from 'react-native';
import MessageScreen from "./src/component/messages/MessagesScreen";

export default function App() {
  return (
    <MessageScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
