import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './stackNavigator';
import Profile from '../screens/profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
  );
}