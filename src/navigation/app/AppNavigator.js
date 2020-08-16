import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../../screens/listingEditScreen/ListingEditScreen";
import FeedNavigator from "../feed/FeedNavigator";
import AccountNavigator from "../account/AccountNavigator";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import ListingRoundButton from "../../component/navigationListingButton/ListingRoundButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
  >
    <Tab.Screen
      name="FeedNavigator"
      component={FeedNavigator}
      options={{tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>}}
    />
    <Tab.Screen
      name="ListingEditScreen"
      component={ListingEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => <ListingRoundButton onPress={() => navigation.navigate("ListingEditScreen")}/>
      })}
    />
    <Tab.Screen
      name="AccountNavigator"
      component={AccountNavigator}
      options={{tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="account" size={size} color={color}/>}}
    />

  </Tab.Navigator>
)
export default AppNavigator;
