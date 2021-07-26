/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import {Fontisto} from '@expo/vector-icons';
import ChatScreen from '../screens/ChatScreen';
const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Chat"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].background ,
        style:{
          backgroundColor:Colors[colorScheme].tint,
        },
        indicatorStyle:{
          backgroundColor:Colors[colorScheme].background,
          height:4
        },
        labelStyle:{
          fontWeight:'bold'
        },
        showIcon:true,
         
        }}>
      <BottomTab.Screen
        name="Camera"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
          tabBarLabel:()=>null
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
      />
       <BottomTab.Screen
        name="Status"
        component={TabTwoNavigator}
      />
       <BottomTab.Screen
        name="Calls"
        component={TabTwoNavigator}
      />
    </BottomTab.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
      
      />
    </TabTwoStack.Navigator>
  );
}
