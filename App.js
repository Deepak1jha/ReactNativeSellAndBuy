import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import ListingScreen from "./src/screens/listingScreen/ListingScreen";
import Account from "./src/screens/account/Account";
import ListingEditScreen from "./src/screens/listingEditScreen/ListingEditScreen";
import AuthNavigator from "./src/navigation/auth/AuthNavigator";
import NavigationTheme from "./src/navigation/theme/NavigationTheme";

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
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Product" component={ListingScreen}/>
    <Stack.Screen name="Product_Detail" component={productDetail}/>
  </Stack.Navigator>
)

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "grey",
      inactiveTintColor: "white"
    }}
  >
    <Tab.Screen
      name="ProductList"
      component={StackNavigator}
      options={{tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>}}
    />
    <Tab.Screen
      name="uploadNewProduct"
      component={ListingEditScreen}
      options={{tabBarIcon: ({size, color}) => <Feather name="plus-circle" size={50} color={color}/>}}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="account" size={size} color={color}/>}}
    />
  </Tab.Navigator>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
