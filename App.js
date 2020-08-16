import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();


function product({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Product List Screen</Text>
      <Button title="Click" onPress={()=>navigation.navigate("Product_Detail",{name:"Deepak kumar jha"})}/>
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

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Product" component={product}/>
    <Stack.Screen name="Product_Detail" component={productDetail}/>
  </Stack.Navigator>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
