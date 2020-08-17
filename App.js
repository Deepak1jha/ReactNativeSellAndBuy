import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTheme from "./src/navigation/theme/NavigationTheme";
import AppNavigator from "./src/navigation/app/AppNavigator";
import NetInfo from '@react-native-community/netinfo';

export default function App() {
  NetInfo.addEventListener(netInfo=>console.log(netInfo))
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
  );
}

