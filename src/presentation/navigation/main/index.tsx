// @ts-ignore
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import ItunesScreen from '@screens/itunes/ItunesScreen';
import ProfileScreen from '@screens/profile/ProfileScreen';

import {IconProfile, IconDiscover} from './style';

const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      {/* @ts-ignore */}
      <Tab.Screen
        name="Search for any song"
        component={ItunesScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <IconDiscover />,
        }}
      />
      {/* @ts-ignore */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <IconProfile />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
