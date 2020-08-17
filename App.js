import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import NavigationTheme from "./src/navigation/theme/NavigationTheme";
import {NavigationContainer} from "@react-navigation/native";
import OfflineAlert from "./src/component/offlineAlert/OfflineAlert";
import AuthNavigator from "./src/navigation/auth/AuthNavigator";

export default function App() {
  const netInfo = useNetInfo();
  return (
    <>
      <OfflineAlert/>
      <NavigationContainer theme={NavigationTheme}>
        <AuthNavigator/>
      </NavigationContainer>
    </>
  )
  // return netInfo.isInternetReachable ? (
  //   <NavigationContainer theme={NavigationTheme}>
  //     <AppNavigator/>
  //   </NavigationContainer>
  // ) : <View><Text>Cant Find Any NetWork</Text></View>
}

