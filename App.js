import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTheme from "./src/navigation/theme/NavigationTheme";
import AppNavigator from "./src/navigation/app/AppNavigator";


export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
  );
}

