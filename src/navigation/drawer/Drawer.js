import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from "../../screens/welcome/WelcomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
    {/*<Drawer.Screen name="LogIn" component={Login}/>*/}
  </Drawer.Navigator>
);

export default DrawerNavigator;
