import React from 'react';
import {Image, View} from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      // flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start"
    }}>
      <View style={{flex: 5}}>
        <Image source={require("./assets/background.jpg")} style={{flex: 1}}/>
      </View>
      <View style={{
        flex: 5,
        backgroundColor: "green"
      }}/>
      <View style={{
        flex: 1,
        backgroundColor: "red"
      }}/>
    </View>
  );
}

