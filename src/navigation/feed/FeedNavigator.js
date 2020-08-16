import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ListingScreen from "../../screens/listingScreen/ListingScreen";
import ListingDetailScreen from "../../component/listingDetail/ListingDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ListingScreen" component={ListingScreen}/>
    <Stack.Screen name="ListingDetailScreen" component={ListingDetailScreen}/>
  </Stack.Navigator>
)
export default FeedNavigator;
