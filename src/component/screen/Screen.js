import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Constants from "expo-constants";

export default function Screen({children}) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex:1
  }
})
