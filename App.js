import React from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import ListingEditScreen from "./src/screens/listingEditScreen/ListingEditScreen";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen/>
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
