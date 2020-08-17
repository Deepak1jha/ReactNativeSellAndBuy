import React, {useState} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import NavigationTheme from "./src/navigation/theme/NavigationTheme";
import {NavigationContainer} from "@react-navigation/native";
import OfflineAlert from "./src/component/offlineAlert/OfflineAlert";
import AuthNavigator from "./src/navigation/auth/AuthNavigator";
import AuthContext from "./src/auth/context/AuthContext";
import AppNavigator from "./src/navigation/app/AppNavigator";

export default function App() {
  const netInfo = useNetInfo();
  const [accessToken, setAccessToken] = useState(null);
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

