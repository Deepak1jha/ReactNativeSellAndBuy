import React from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import Account from "./src/screens/account/Account";

export default function App() {
  return (
    <Screen>
     <Account/>
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
