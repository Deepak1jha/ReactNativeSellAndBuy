import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from "../../config/colors";
import Constant from "expo-constants";
import {useNetInfo} from "@react-native-community/netinfo";
import {Screen} from "expo/build/DangerZone.web";

export default function OfflineAlert() {

  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <Screen>
        <View style={styles.container}>
          <Text style={styles.text}>No Internet Connection</Text>
        </View>
      </Screen>
    );
  }
  return null;
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    top: Constant.statusBarHeight,
    zIndex: 1
  },
  text: {
    color: colors.white
  }
})
