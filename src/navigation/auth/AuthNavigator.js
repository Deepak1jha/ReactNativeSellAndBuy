import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import WelcomeScreen from "../../screens/welcome/WelcomeScreen";
import Login from "../../screens/login/Login";
import RegisterScreen from "../../screens/register/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="LogIn" component={Login}/>
    <Stack.Screen name="Register" component={RegisterScreen}/>
  </Stack.Navigator>
);

export default AuthNavigator;
