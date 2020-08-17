import React, {useState} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import NavigationTheme from "./src/navigation/theme/NavigationTheme";
import {NavigationContainer} from "@react-navigation/native";
import OfflineAlert from "./src/component/offlineAlert/OfflineAlert";
import AuthNavigator from "./src/navigation/auth/AuthNavigator";
import AuthContext from "./src/auth/context/AuthContext";
import AppNavigator from "./src/navigation/app/AppNavigator";
import {getAccessToken} from "./src/auth/authStorage/AuthStorage";
import {AppLoading} from 'expo';

export default function App() {

  const netInfo = useNetInfo();
  const [accessToken, setAccessToken] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const restoreAccessToken = async () => {
    const token = await getAccessToken();
    if (!token) {
      return;
    } else {
      setAccessToken(token)
    }
  }

  if (!isReady) {
    return <AppLoading startAsync={restoreAccessToken} onFinish={() => setIsReady(true)}/>
  }

  return (
    <AuthContext.Provider value={{accessToken, setAccessToken}}>
      <OfflineAlert/>
      <NavigationContainer theme={NavigationTheme}>
        {accessToken ? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
  )
  // return netInfo.isInternetReachable ? (
  //   <NavigationContainer theme={NavigationTheme}>
  //     <AppNavigator/>
  //   </NavigationContainer>
  // ) : <View><Text>Cant Find Any NetWork</Text></View>
}

