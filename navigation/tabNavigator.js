import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import Feed from "../screens/feed";
import CreateStory from "../screens/createStory";

const Tab = createBottomTabNavigator()
export default function TabNavigator() {
    return (

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Feed') {
                iconName = focused
                  ? 'book'
                  : 'book-outline';
              } else if (route.name === 'CreateStory') {
                iconName = focused ? 'create' : 'create-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="CreateStory" component={CreateStory} />
        </Tab.Navigator>
      
    );
  }