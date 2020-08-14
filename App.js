import React from 'react';
import {StyleSheet} from 'react-native';
import MessageScreen from "./src/component/messages/MessagesScreen";
import Screen from "./src/component/screen/Screen";
import Icon from "./src/component/Icon";

export default function App() {
  return (
    <Screen>
      <Icon name={"email"} size={50} backgroundColor="red" iconColor={"white"} />
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
