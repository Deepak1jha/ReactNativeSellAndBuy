import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTheme from "./src/navigation/theme/NavigationTheme";
import AppNavigator from "./src/navigation/app/AppNavigator";
import {useNetInfo} from '@react-native-community/netinfo';
import {View,Text} from 'react-native';

export default function App() {
  const netInfo = useNetInfo();
  return netInfo.isInternetReachable ? (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
  ) : <View><Text>Cant Find Any NetWork</Text></View>
}

