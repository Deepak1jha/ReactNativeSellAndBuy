import React from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import ListingScreen from "./src/screens/listingScreen/ListingScreen";

export default function App() {
  return (
    <Screen>
      <ListingScreen/>
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
