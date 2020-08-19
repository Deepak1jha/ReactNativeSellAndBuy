import React, {useEffect} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../../screens/listingEditScreen/ListingEditScreen";
import FeedNavigator from "../feed/FeedNavigator";
import AccountNavigator from "../account/AccountNavigator";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import ListingRoundButton from "../../component/navigationListingButton/ListingRoundButton";
import Routes from "../../routes/Routes";
import * as Notifications from 'expo-notifications';
import * as Permission from 'expo-permissions';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

  useEffect(() => {
    registerForPushNotification();
  }, []);


  const registerForPushNotification = async () => {
    try {
      const permission = Permission.askAsync(Permission.NOTIFICATIONS);
      if (permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
    } catch (e) {
      console.log("Error Getting Push Notification Token", e)
    }
  }
  return (
    <Tab.Navigator
    >
      <Tab.Screen
        name="FeedNavigator"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>,
          title: "Feed"
        }}
      />
      <Tab.Screen
        name="ListingEditScreen"
        component={ListingEditScreen}
        options={({navigation}) => ({
          tabBarButton: () => <ListingRoundButton onPress={() => navigation.navigate(Routes.LISTING_EDIT_SCREEN)}/>
        })}
      />
      <Tab.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="account" size={size} color={color}/>,
          title: "Account",
        }}
      />

    </Tab.Navigator>
  )
};
export default AppNavigator;
