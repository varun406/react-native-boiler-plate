import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/profile/Profile';
import screenName from '../constants/screenName';
import StackNavigators from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigators = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={screenName.BottomTab} component={StackNavigators} />
      <Tab.Screen name={screenName.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigators;

const styles = StyleSheet.create({});
