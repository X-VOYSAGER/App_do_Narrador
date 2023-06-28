import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './stackNavigator';
import Profile from '../screens/profile';
import Logout from '../screens/logout';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigator} options={{ unmountOnBlur: true }}/>
        <Drawer.Screen name="Profile" component={Profile} options={{ unmountOnBlur: true }}/>
        <Drawer.Screen name="Logout" component={Logout} options={{ unmountOnBlur: true }}/>     
      </Drawer.Navigator>
  );
}