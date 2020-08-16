import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Account from "../../screens/account/Account";
import MessageScreen from "../../component/messages/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={Account}/>
    <Stack.Screen name="Messages" component={MessageScreen}/>
  </Stack.Navigator>
)
export default AccountNavigator;
