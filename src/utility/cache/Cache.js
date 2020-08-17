import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const prefix = "cache";

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(value));
  } catch (e) {
    console.log(e)
  }
}

export default store;
