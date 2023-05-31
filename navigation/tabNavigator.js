import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import Feed from "../screens/feed";
import CreateStory from "../screens/createStory";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator()
export default function TabNavigator() {
    return (

        <Tab.Navigator
        labeled = {false}  
        barStyle = {styles.bottomTabStyle}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Feed') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'CreateStory') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={RFValue(25)} color={color} style = {styles.icons} />;
            },
          })}
          activeColor = {"#EE8249"}
          inactiveColor = {"gray"}
        >
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="CreateStory" component={CreateStory} />
        </Tab.Navigator>
      
    );
  }
  const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });