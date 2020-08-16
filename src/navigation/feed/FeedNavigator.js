import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../../screens/login/Login";
import RegisterScreen from "../../screens/register/RegisterScreen";
import ListingScreen from "../../screens/listingScreen/ListingScreen";
import ListingDetailScreen from "../../component/listingDetail/ListingDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ListingScreen" component={ListingScreen}/>
    <Stack.Screen name="ListingDetailScreen" component={ListingDetailScreen}/>
  </Stack.Navigator>
)
export default FeedNavigator;
