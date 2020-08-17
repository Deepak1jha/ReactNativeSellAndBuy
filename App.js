import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import NavigationTheme from "./src/navigation/theme/NavigationTheme";
import AppNavigator from "./src/navigation/app/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
import OfflineAlert from "./src/component/offlineAlert/OfflineAlert";

export default function App() {
  const netInfo = useNetInfo();
  return (
    <>
      <OfflineAlert/>
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator/>
      </NavigationContainer>
    </>
  )
  // return netInfo.isInternetReachable ? (
  //   <NavigationContainer theme={NavigationTheme}>
  //     <AppNavigator/>
  //   </NavigationContainer>
  // ) : <View><Text>Cant Find Any NetWork</Text></View>
}

