import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './stackNavigator';
import Profile from '../screens/profile';
import Logout from '../screens/logout';
import firebase from 'firebase'
import CustomSidebarMenu from '../screens/customSideBarMenu';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      light_theme: true
    }

  }
  fetchUser = async () => {
    var theme
    await firebase.database().ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", (snapshot) => {
        theme = snapshot.val().current_theme
      })
    this.setState({
      light_theme: theme == "light" ? true : false,
    })
  }
  //this.setState.light_theme ?:
  componentDidMount() {
    this.fetchUser()
  }
  render() {
    var props = this.props
    return (

      <Drawer.Navigator drawerContentOptions={{
        activeTintColor: "#E91E63",
        inactiveTintColor: this.state.light_theme ? "black" : "white",
        itemStyle: { marginVertical: 5 }
      }} drawerContent={(props) => { <CustomSidebarMenu{...props} /> }}>
        <Drawer.Screen name="Home" component={StackNavigator} options={{ unmountOnBlur: true }} />
        <Drawer.Screen name="Profile" component={Profile} options={{ unmountOnBlur: true }} />
        <Drawer.Screen name="Logout" component={Logout} options={{ unmountOnBlur: true }} />
      </Drawer.Navigator>
    );
  }
}