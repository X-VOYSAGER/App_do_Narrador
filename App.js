import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigation/drawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import RegisterScreen from './screens/registerScreen';
import { firebaseConfig } from './config';
import firebase from 'firebase';
import { Drawer } from 'react-native-paper';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const Stack = createStackNavigator()
const StackNav = () => {
  return(
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{headerShown:false, gestureEnabled:false}}
    >
      <Stack.Screen
        name='Login'
        component={Login}
      />
      <Stack.Screen
        name='RegisterScreen'
        component={RegisterScreen}
      />
      <Stack.Screen
        name='Dashboard'
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  )
} 

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
    
  );
}
