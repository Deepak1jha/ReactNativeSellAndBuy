import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

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

function Account({route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Account</Text>
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
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Product" component={product}/>
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
      name="Account"
      component={Account}
      options={{tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="account" size={size} color={color}/>}}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="face-profile" size={size} color={color}/>}}
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
