import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthNavigator from "./src/navigation/auth/AuthNavigator";
import NavigationTheme from "./src/navigation/theme/NavigationTheme";
import AppNavigator from "./src/navigation/app/AppNavigator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function product({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Product List Screen</Text>
      <Button title="Click" onPress={() => navigation.navigate("Product_Detail", {name: "Deepak kumar jha"})}/>
    </View>
  );
}

function productDetail({route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{route.params.name}</Text>
    </View>
  );
}


function Profile({route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
