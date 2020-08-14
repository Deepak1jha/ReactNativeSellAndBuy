import React from 'react';
import {StyleSheet} from 'react-native';
import ListingDetailScreen from "./src/component/listingDetail/ListingDetailScreen";

export default function App() {
  return (
    <ListingDetailScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  }
})
